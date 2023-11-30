const businesses = [
  {
    ID: 1,
    Nome: "Antonio Vergine Photo Cutrofiano",
    logo: "A1.jpg",
    indirizzo: "Via Duca D'Aosta, 14, 73020 Cutrofiano LE",
    descrizione:"",
    lista: "BI1",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393388585923",
    premi: [
      { id: 101, nome: "10%di sconto su tele formato  30x45  40x60  50x70", punti: 20 },
      { id: 102, nome: "10% di sconto su shooting natalizio (solo file) ai primi 5 che prenotano", punti: 20 },
      { id: 103, nome: "10% di sconto su calendario fotografico personalizzato  12 mesi (13 fogli rilegati)", punti: 20 },
      { id: 104, nome: "Shooting natalizio incluso su pacchetti  BOX FOTO proposti in studio", punti: 20 },
      { id: 105, nome: "1 calendario fotografico personalizzato in omaggio a chi prenota uno shooting natalizio", punti: 20 },
      { id: 106, nome: "Cornice con foto nel formato 30x45 a 30,00 euro", punti: 20 },
      { id: 107, nome: "Pieghevole con  4 foto vari formati a 20,00 euro", punti: 20 },
      { id: 108, nome: "Cornici multiframe comprensive di foto a 30 euro", punti: 20 } 
    ]
  },
  {
    ID: 2,
    Nome: "DDM Informatica",
    logo: "B1.png",
    indirizzo: "Via Ferruccio 4 - Cutrofiano",
    descrizione: "",
    lista: "BI2",
    linksite: "https://www.instagram.com/ddm_informatica/",
    numeroCell : "393276877772",
    premi: [
      { id: 201, nome: "10% sconto su pc fissi", punti: 20 },
      { id: 202, nome: "5% sconto su smartphone", punti: 20 },
      { id: 203, nome: "10% sconto su accessori smartphone", punti: 20 },
      { id: 204, nome: "kit cover e pellicola omaggio con l'acquisto di un nuovo smartphone", punti: 20 },
      { id: 205, nome: "5% sconto su elettrodomestici", punti: 20 },
      { id: 206, nome: "Chiavetta USB in omaggio se porti il tuo pc in riparazione", punti: 20 },
      { id: 207, nome: "15% sconto su Ripristino Sistema operativo e installazione SSD sul tuo Pc", punti: 20 },
      { id: 208, nome: "Sim in regalo se passi a Wind3", punti: 20 }, 
    ]
  },
  {
    ID: 3,
    Nome: "PALAMA' - Cutrofiano",
    logo: "C1.jpg",
    indirizzo: "Via Armando Diaz, 6, 73020 Cutrofiano LE",
    descrizione: "",
    lista: "BI3",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393715361775",
    premi: [
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Metiusco rosato  ", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Metiusco bianco", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Metiusco rosso", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Metiusco anniversario ", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Metiusco aleatico", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Metiusco metodo classico", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Nini bianco", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Nini rosso", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su Nini rosato", punti: 20 },
      { id: 301, FK_Attivita: 3, nome: "Sconto 10% su 75 vendemmie", punti: 20 },
    ]
  },

  {
    ID: 4,
    Nome: "L'osteria vini divini - Cutrofiano",
    logo: "D1.jpg",
    indirizzo: "Via Monte Bianco, 73020 Cutrofiano LE",
    descrizione:"",
    lista: "BI4",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393883016691",
    premi: [
      { id: 401, FK_Attivita: 4, nome: "Calafuria ( negroamaro  ) bottiglia magnum da 1,5L - € 44.00 da scontare il 10%", punti: 20},
      { id: 402, FK_Attivita: 4, nome: "LE BRACI ( negroamaro )azienda Garofano €55,00 scontare il 10%", punti: 20},
      { id: 403, FK_Attivita: 4, nome: "Ottagono TORREVENTO ( nero di Troia riserva 2014 ) 3 bicchieri al gambero rosso. Bott da 0,75 - €31 scontare il 10%", punti: 20},
      { id: 404, FK_Attivita: 4, nome: "Chateau La Maroutine (MERLOT) 2018 BORDEAUX ( Francia ) Bott da 0,75 €25 da scontare il 10%", punti: 20},
      { id: 405, FK_Attivita: 4, nome: "Acini Spargoli ANTICO PALMENTO riserva 2017 (primitivo di manduria) Bott 0,75 €44,00 scontare il 10%", punti: 20},
      { id: 40, FK_Attivita: 4, nome: "Calafuria ( negroamaro  ) bottiglia magnum da 1,5L - € 44.00 da scontare il 10%", punti: 20},
      { id: 461, FK_Attivita: 4, nome: "Sant’Agostino FIRRIATO Sicilia (2016 Nero D’avola e Syrah) Bott. 0,75 €28,00 da scontare il 10%", punti: 20},
      
    ]
  },

  {
    ID: 5,
    Nome: "Dolce Arte, Pasticceria - Gelateria",
    logo: "E1.jpg",
    indirizzo: "Via Giuseppe Garibaldi, 31, 73020 Cutrofiano LE",
    descrizione:"",
    lista: "BI5",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393476204916",
    premi: [
      { id: 501, FK_Attivita: 5, nome: "15% di sconto sull'acquisto del Pantalento", punti: 20 },
    ]
  },

  {
    ID: 6,
    Nome: "Fioreria il Punto Verde - Cutrofiano",
    logo: "F1.jpg",
    indirizzo: "Via XXV Aprile, 70 - angolo Via Collepasso",
    descrizione: "Non solo fiori e piante. Da noi troverai oggettistica, candele, profumatori ambiente e tanto altro",
    lista: "BI6",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393356701542",
    premi: [
      { id: 601, FK_Attivita: 6, nome: "Stella di Natale rossa vaso 20cm a €10", punti: 20 },
      { id: 602, FK_Attivita: 6, nome: "Sconto -10% su giare natalizie Yankee Candle ", punti: 20 },
      { id: 603, FK_Attivita: 6, nome: "Sconto-5% su profumatori ambiente MUHÀ", punti: 20 },
      { id: 604, FK_Attivita: 6, nome: "Sconto -10% su profumatori auto", punti: 20 },
      { id: 605, FK_Attivita: 6, nome: "Sconto -20% su fiori artificiali natalizi ", punti: 20 },
      { id: 606, FK_Attivita: 6, nome: "Sconto -15% su ghirlande natalizie", punti: 20 },
      { id: 607, FK_Attivita: 6, nome: "Sconto -5% su linea Natale EGAN", punti: 20 },
      { id: 608, FK_Attivita: 6, nome: "Sconto -5% su porcellana HUTSCHENREUTER", punti: 20 },
      { id: 609, FK_Attivita: 6, nome: "Sconto €5 su candela clessidra grande WOODWICK", punti: 20 },
    ]
  },

  {
    ID: 7,
    Nome: "Ottica Vecchio",
    logo: "G1.jpg",
    indirizzo: "Corso Piave, 77, 73020 Cutrofiano LE",
    descrizione:"",
    lista: "BI7",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393317661948",
    premi: [
      { id: 701, FK_Attivita: 7, nome: "Sconto del 20% su tutto", punti: 20 },
      { id: 701, FK_Attivita: 7, nome: "Sconto del 25% su tutto", punti: 20 }
    ]
  },
  {
    ID: 8,
    Nome: "Mida Gioielli",
    logo: "H1.jpg",
    indirizzo: "Via Bovio 1 - Cutrofiano",
    descrizione:"",
    lista: "BI8",
    linksite: "https://www.instagram.com/charly.parabita/",
    numeroCell : "393349928976",
    premi: [
      { id: 801, FK_Attivita: 8, nome: "10% di sconto su tutta la merce", punti: 20 },
      { id: 802, FK_Attivita: 8, nome: "con una spesa minima di 29 euro, aggiungendo 1 euro, per te in regalo un paio di orecchini punti luce del valore di 19 euro", punti: 20 },
      { id: 803, FK_Attivita: 8, nome: "PROMO ORO E DIAMANTI: 15% (Pezzi Limitati)", punti: 20 }, 
    ]
  }
];
