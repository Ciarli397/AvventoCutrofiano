/* ------------------------
OPERAZIONI PRELIMINARI
--------------------------- */

// Raccogliamo tutti gli elementi di interesse
const calendar = document.querySelector(".calendar");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");
const modalDay = document.querySelector(".modal-day");
const idUtente = document.querySelector("#codiceUtente");
const points = document.querySelector("#points");
let premio1 = "";
let premioggiC = "";
let premio2 = "";
let premioggiD = "";
const premioD = document.querySelector("#premio2");
let premio3 = "";
let premioggiV = "";
const premioV = document.querySelector("#premio3");
const grid1 = document.querySelector("#grid1");

//prepariamo una variabile con il codice utente
let codiceUtente = "";

// PRepariamo un elenco con gli indici delle finestrelle aperte
let openedIndexes = [];
console.log(openedIndexes);

//prepariamo una variabile con il premio vinto di oggi

let todayprimeC = "";
let todayprimeD = "";
let todayprimeV = "";

/* ------------------------
OPERAZIONI DI AVVIO (MAIN)
-------------------------*/

// ! COntrolliamo subito se c'erano degli indici salvati!
const data = new Date();
const today = data.getDate();
const alreadyUtente = localStorage.getItem("Id_AvventoCutrofiano");

//generazione e assegnazione del codice utente
//TODO mettere un GUID
if (alreadyUtente) {
  codiceUtente = alreadyUtente;
  idUtente.innerHTML += codiceUtente;
} else {
  const n = 8;
  let pop = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < n; i++) {
    codiceUtente += pop.charAt(Math.floor(Math.random() * pop.length));
  }

  idUtente.innerHTML += codiceUtente;
  localStorage.setItem("Id", codiceUtente);
}

// ! Controlliamo subito se c'erano degli indici salvati!
const previouslyOpenedIndexes = localStorage.getItem("my-list");

// Se c'è....
if (previouslyOpenedIndexes) {
  openedIndexes = JSON.parse(previouslyOpenedIndexes);
  console.log(openedIndexes);
}

// creazione calendario
// per ognuno degli elementi della sorgente...
for (let i = 0; i < source.length; i++) {
  // 1. creiamo una finestrella
  const box = createBox(i);

  // 2. agganciarla al calendario in pagina
  calendar.innerHTML += box;
}

/* --------------------------
EVENTI DINAMICI
---------------------------- */

// Rendere cliccabili le finestrelle
const boxes = document.querySelectorAll(".box");
for (let i = 0; i < boxes.length; i++) {
  // Prendo ad ogni giro il box corrente
  const box = boxes[i];

  // Rendo cliccabile il box se l'indice di quel giorno è minore o uguale di oggi
  if (i + 1 == today) {
    // if (1 == 1) {
    //per test metto la condizione a sempre vero
    box.classList.add("today");
    box.classList.add("hithere");
    box.addEventListener("click", function () {
      // 1. fai apparire questo box come se fosse aperto
      box.classList.add("box-opened");
      console.log("a");

      // 2. riempire la modale
      insertModalContent(i);

      // 3. apri la modale
      openModal();

      // 4. Aggiungi l'id alla lista delle finestrelle aperte
      addToOpenedIndexes(i);
    });
  } else if (i + 1 < today) {
    box.classList.add("box-opened");
  } else {
    box.classList.add("not-yet");
  }
}

function send(j) {
  // Ottieni l'array dal localStorage e convertilo in un oggetto JavaScript
  const storedRandomBusinessesWithPrizes = localStorage.getItem("randomBusinessesWithPrizes");
  const parsedRandomBusinessesWithPrizes = JSON.parse(storedRandomBusinessesWithPrizes);

  azienda = parsedRandomBusinessesWithPrizes[j];

  let message = "";

  message =
    "Vorrei riscattare il premio: " +
    azienda.premioCasuale.nome +
    "dall'azienda " +
    azienda.Nome +
    "\n\n ID Utente: *" +
    codiceUtente +
    "*" +
    "\n\n Valore in punti: 50 *" +
    // azienda.premioCasuale.punti +
    "*";
  window.open("https://wa.me/" + azienda.numeroCell + "?text=" + message);
}

function sendScontrino() {
  let message = "";

  message = "Ciao, solo l'utente " + codiceUtente + ". Vorrei convertire in punti il mio scontrino, ecco la foto: ";
  window.open("https://wa.me/393802482577?text=" + message);
}

/* -----------------------
FUNZIONI
---------------------- */

// Funzione per creare il codice di un box
function createBox(i) {
  // Raccogliamo le parti dinamiche
  const date = i + 1;
  const icon = source[i].icon;

  let classes = "box";

  // !controlla se sono state aperte
  if (openedIndexes.includes(i)) {
    classes += " box-opened";
    classes = "box , box-opened";
  }

  // Creiamo il codice per il box
  let mancano = 25 - date;
  return `
    <div class="${classes}">
      <div class="topline">*</div>
      <img class="box-icon" src="images/icons/${icon}" alt="icon">
      <div class="box-date">${date}</div>
    </div>`;
}

// Funzione per aprire la modale
function openModal() {
  modal.classList.remove("modal-hidden");
}

// Funzione per chiudere la modale
function closeModal() {
  modal.classList.add("modal-hidden");
}

// Funzione per riempire la modale
function insertModalContent(i) {
  const randomBusinessesWithPrizes = getRandomBusinesses();


  // Salva l'array nel localStorage come stringa JSON, mi serve per recuperarlo al click senza metterlo nel DOM
  localStorage.setItem("randomBusinessesWithPrizes", JSON.stringify(randomBusinessesWithPrizes));

  const surprise = source[i];

  if (randomBusinessesWithPrizes.length > 0) {
    modalDay.innerHTML = `<p>${surprise.day + " - Codice utente:" + codiceUtente}</p>
    <p>il tuo codice utente ti servitrà per accumulare punti una volta usato il buono. Chi accumulerà più punti riceverà un fantastico premio.</p>`;

    //svuoto la grid altrimenti potrebbero accumularsi con eventuali doppi click
    grid1.innerHTML = "";

    // Utilizzo di un ciclo for per generare dinamicamente i div
    for (let j = 0; j < randomBusinessesWithPrizes.length; j++) {
      const business = randomBusinessesWithPrizes[j];

      grid1.innerHTML += `<div class="att animate pop delay-${j}">
      <div class="premio"><p>${business.Nome}</p></div>
      <input type="button" class="btn11" id="logo" onclick="send(${j})" style="background-image: url('images/${
        business.logo
      }');">
      <div>
      <div class="premio"><p>${business.premioCasuale.nome}</p></div>
      <div class="premio1"><p>Punti: 50</p></div>
      </div>
    </div>
    <hr style="width:100%;">`;
    }
  }
}

//funzione che prende 3 attività casuali dalla lista businesses
function getRandomBusinesses() {
  // Estrai casualmente 3 oggetti dall'array businesses
  const randomBusinesses = [];
  const numBusinesses = businesses.length;
  const precedentiEstrazioniJson = localStorage.getItem("Estrazioni_AvventoCutrofiano");
  const precedentiEstrazioni = precedentiEstrazioniJson != null ? JSON.parse(precedentiEstrazioniJson) : [];

  while (randomBusinesses.length < 3) {
    const randomIndex = Math.floor(Math.random() * numBusinesses);
    const randomBusiness = businesses[randomIndex];

    // Evita di aggiungere duplicati, e controllo che non escano gli stessi negozi dell'altra volta
    if (!randomBusinesses.includes(randomBusiness) && !precedentiEstrazioni.some((a) => a.ID == randomBusiness.ID)) {
      randomBusinesses.push(randomBusiness);
    }
  }

  //risalvo il nuovo dato
  localStorage.setItem("Estrazioni_AvventoCutrofiano", JSON.stringify(randomBusinesses));

  // Per ogni business estratto, seleziona un premio a caso
  const businessesWithRandomPrizes = randomBusinesses.map((attivita) => {
    const randomIndex = Math.floor(Math.random() * attivita.premi.length);
    const randomPrize = attivita.premi[randomIndex];

    // Aggiungi il premio selezionato al business
    return {
      ...attivita,
      premioCasuale: randomPrize
    };
  });
  return businessesWithRandomPrizes;
}

// Funzione per aggiungere l'indice alla lista
function addToOpenedIndexes(i) {
  // Se dentro opnedIndexes NON c'è già la i
  if (!openedIndexes.includes(i)) {
    // La aggiungiamo alla lista
    openedIndexes.push(i);

    // La aggiungiamo nel localStorage
    localStorage.setItem("my-list", JSON.stringify(openedIndexes));
  }
  console.log(openedIndexes);
}

const sponsor = document.querySelector("#show1");

function load() {
  businesses.forEach((element, index) => {
    const spons = createsponsor(element);
    sponsor.innerHTML += spons;
  });
}

function createsponsor(element) {
  return `<div>
<h2>${element.Nome}</h2>
<div class="food">
<div style="display:flex; justify-content:space-between;">
<img class="immagine" src='images/${element.logo}'/></img>
<br>
<div   style="width: fit-content;">
<p1> ${element.descrizione} </p1>
<br>
<br>
<p1>${element.indirizzo} </p1>
</div>
</div<
</div>
</div>`;
}
