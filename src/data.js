import tour1 from "./assets/actu-1.jpeg";
import tour2 from "./assets/maram-herro.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "actualités" },
  { id: 4, href: "#famille", text: "famille" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-whatsapp" },
];
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "La cotisation annuelle :",
    text: "un effort commun Afin de concrétiser nos projets ambitieux sans subir de pression financière à la dernière minute, nous mettons en place une cotisation annuelle unique pour chaque membre. Cette participation collective est le moteur de notre trésorerie ; elle nous permettra de sécuriser les réservations et d'anticiper les dépenses logistiques bien en amont. C'est un investissement nécessaire qui garantit non seulement la qualité de notre événement, mais qui symbolise aussi l'engagement concret de chacun envers la réussite de cette grande réunion.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Les rencontres mensuelles :",
    text: "garder le lien Pour que notre dynamique ne s'essouffle pas, nous instaurons un rendez-vous mensuel incontournable, qu'il se tienne en présentiel ou par visioconférence selon les disponibilités. Ces réunions ne servent pas uniquement à régler les détails organisationnels, elles sont surtout l'occasion de maintenir le contact et de renforcer notre cohésion tout au long de l'année. C’est un moment privilégié pour échanger nos idées, valider les étapes franchies ensemble et s'assurer que tout le monde avance au même rythme vers notre objectif.",
  },
  {
    id: 3,
    icon: "fas fa-wallet fa-fw",
    title: "La transparence financière :",
    text: "la base de la confiance Parce que la gestion de l'argent familial exige une confiance absolue, nous nous engageons à une transparence totale sur l'utilisation de chaque centime récolté dans la caisse. Un bilan comptable clair et détaillé sera présenté systématiquement à chaque réunion, accompagné des justificatifs pour toutes les dépenses effectuées ou prévues. Chaque membre aura un droit de regard permanent sur les comptes, nous assurant ainsi que les fonds servent exclusivement aux intérêts de notre famille, sans aucune zone d'ombre.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "20 décembre 2025",
    title: "Le rendez-vous sacré de l'année",
    info: "Chaque année, ce moment privilégié nous permet de briser la distance pour nous retrouver et célébrer ensemble la force inaltérable de nos liens du sang. C'est une tradition incontournable qui rythme nos vies et nous offre l'occasion précieuse de tisser, saison après saison, le fil unique de notre histoire commune.",
  },
  {
    id: 2,
    image: tour2,
    date: "20 décembre 2025",
    title: "Un héritage à préserver",
    info: "Au-delà de la fête, cette réunion annuelle a pour vocation essentielle de transmettre nos valeurs et notre culture familiale aux plus jeunes générations qui grandissent. Elle garantit que, malgré le temps qui passe, l'esprit de solidarité et le sentiment d'appartenance continuent de s'enraciner durablement au sein de notre grand foyer.",
  },
];

export const familles = [
  {
    id: 1,
    parentName: "Binta Ba",
    fils: ["Anna ndiaye", "Mareme ndiaye", "Rougui ndiaye"],
  },
  { id: 2, parentName: "Haw Penda", fils: ["Sans fils"] },
  { id: 3, parentName: "Fatma Diallo", fils: ["Sans fils"] },
  { id: 4, parentName: "Coumba Diallo", fils: ["Abdou Diallo"] },
  {
    id: 5,
    parentName: "Dado Diallo",
    fils: ["Baye Diallo", "Fatou Diarra", "Amadou Diaw", "Penda Fall"],
  },
  {
    id: 6,
    parentName: "Malado Diallo",
    fils: [
      "Fatou Diallo",
      "Nafi Diallo",
      "Makhtar keita",
      "Moussa Keita",
      "Baye Cissokho",
      "Khady Cissokho",
      "Maréme Cissokho",
    ],
  },
  {
    id: 7,
    parentName: "Abdou Ndiaye",
    fils: [
      "Ousmane Ndiaye",
      "Doudou Ndiaye",
      "Fatou Ndiaye",
      "Maréme Ndiaye De Dado",
      "Carro Ndiaye",
      "Oulimata Ndiaye",
      "Ndeye maram Ndiaye",
      "Binta Ndiaye",
      "Dado Ndiaye",
      "Assane Ndiaye",
    ],
  },
  {
    id: 8,
    parentName: "Atou Ndiaye",
    fils: ["Abdou Ndiaye", "Maréme Ndiaye", "Baye Ndiaye", "Mame Mory Ndiaye"],
  },
  { id: 9, parentName: "Doudou Gaye", fils: ["Sans fils"] },
];

export const sousFilsAbdouNdiaye = [
  {
    id: 1,
    sousParent: "Ousmane Ndiaye",
    sousFils: [
      "Cheikh Moctar Ndiaye dit Baye Ndiaye",
      "Khady Ba Ndiaye",
      "Alioune Badara Ndiaye dit Alla Ndiaye",
      "Doudou Ndiaye",
      "Mame Fatou Ndiaye",
      "Papa Samba Ndiaye",
      "Aminata Ndiaye",
    ],
  },
  {
    id: 2,
    sousParent: "Doudou Ndiaye",
    sousFils: [
      "Khady Ndiaye",
      "Abdou Ndiaye",
      "Ousmane Ndiaye",
      "Massata Ndiaye",
      "Ndeye Kene Ndiaye",
      "Sedikh Ndiaye",
      "Marieme Ndiaye",
      "Baye Ndiaye",
      "Malick Ndiaye",
      "Papa Abdou Ndiaye",
      "Woulimata Ndiaye",
      "Fatou Bintou Ndiaye",
      "Ndeye Magatte Ndiaye",
      "Cheikh Tidjane Ndiaye",
      "Binta Ndiaye",
    ],
  },
  {
    id: 3,
    sousParent: "Fatou Ndiaye",
    sousFils: ["Baye Diop", "Yacine Diop"],
  },
  {
    id: 4,
    sousParent: "Maréme Ndiaye De Dado",
    sousFils: [
      "Ndeye Fatou Diop",
      "Elhadj Diop",
      "Makhtar Diop",
      "Ablaye Diop",
      "Babacar Diop",
      "Cherif Ibrahima Diop",
      "Ismaila Diop",
      "Oulimata Diop",
      "Mansour Diop",
      "Khadissatou Diop",
      "Khady Seye Diop",
    ],
  },
  { id: 5, sousParent: "Carro Ndiaye", sousFils: ["Ablaye Diop"] },
  {
    id: 6,
    sousParent: "Oulimata Ndiaye",
    sousFils: [
      "Mame Birame Faye",
      "Pape Djin Faye",
      "Ndeye Faye",
      "Fatou Faye",
      "Zéyna Faye",
      "Elhadj Faye",
      "Doudou Faye",
    ],
  },
  {
    id: 7,
    sousParent: "Ndeye maram Ndiaye",
    sousFils: [
      "Babacar Gaye",
      "Ndeye Diop",
      "Adama Anne",
      "Mamie Anne",
      "Rawane Anne",
    ],
  },
  {
    id: 8,
    sousParent: "Binta Ndiaye",
    sousFils: [
      "Ibrahima Seye",
      "Marétou seye",
      "Mané Seye",
      "Sawdiatou Seye",
      "Nafi Seye",
      "Aida Seye",
      "Moussa Seye",
      "Boubacar Seye",
      "Mbaye Seye",
      "Mouhamed Seye",
    ],
  },
  {
    id: 9,
    sousParent: "Dado Ndiaye",
    sousFils: ["Pas d'information pour le moment"],
  },
  {
    id: 10,
    sousParent: "Assane Ndiaye",
    sousFils: ["Pas d'information pour le moment"],
  },
];

// "Ousmane Ndiaye",
//       "Doudou Ndiaye",
//       "Fatou Ndiaye",
//       "Maréme Ndiaye De Dado",
//       "Carro Ndiaye",
//       "Oulimata Ndiaye",
//       "Ndeye maram Ndiaye",
//       "Binta Ndiaye",
//       "Dado Ndiaye",
//       "Assane Ndiaye",
