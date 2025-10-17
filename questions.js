// Trivia jautājumu datu bāze
// Trivia jautājumu datu bāze (iekšējie orgāni – universitātes līmenis)
const questions = [
    {
        id: 1,
        question: "Kurš orgāns cilvēka ķermenī ir atbildīgs par insulīna ražošanu?",
        options: ["Aknas", "Aizkuņģa dziedzeris", "Liesa", "Nieres"],
        correct: 1
    },
    {
        id: 2,
        question: "Kurā cilvēka ķermeņa daļā atrodas hipofīze?",
        options: ["Smadzenēs", "Krūškurvī", "Vēdera dobumā", "Kaklā"],
        correct: 0
    },
    {
        id: 3,
        question: "Kura ir lielākā cilvēka ķermeņa iekšējā dziedzera masa?",
        options: ["Aknas", "Vairogdziedzeris", "Aizkuņģa dziedzeris", "Virsnieres"],
        correct: 0
    },
    {
        id: 4,
        question: "Kurš orgāns galvenokārt atbild par amonjaka pārvēršanu urīnvielā?",
        options: ["Aknas", "Nieres", "Resnā zarna", "Kuņģis"],
        correct: 0
    },
    {
        id: 5,
        question: "Kurš gremošanas sistēmas orgāns satur mikroviļņus barības vielu uzsūkšanai?",
        options: ["Tievā zarna", "Resnā zarna", "Kuņģis", "Aizkuņģa dziedzeris"],
        correct: 0
    },
    {
        id: 6,
        question: "Kurā orgānā tiek filtrēts asins plazmas liekais ūdens un vielas, veidojot urīnu?",
        options: ["Nieres", "Aknas", "Zarnas", "Liesa"],
        correct: 0
    },
    {
        id: 7,
        question: "Kura sirds daļa sūknē asinis uz plaušām?",
        options: ["Kreisais kambaris", "Labais kambaris", "Kreisais priekškambaris", "Labais priekškambaris"],
        correct: 1
    },
    {
        id: 8,
        question: "Kurā orgānā notiek žults uzkrāšana?",
        options: ["Aizkuņģa dziedzerī", "Žultspūslī", "Aknās", "Kuņģī"],
        correct: 1
    },
    {
        id: 9,
        question: "Kurš orgāns ražo žulti?",
        options: ["Aknas", "Žultspūslis", "Kuņģis", "Aizkuņģa dziedzeris"],
        correct: 0
    },
    {
        id: 10,
        question: "Kura orgāna galvenā funkcija ir sarkanā asinsķermenīšu noārdīšana un imūnreakciju atbalsts?",
        options: ["Liesa", "Aknas", "Taisnā zarna", "Aizkuņģa dziedzeris"],
        correct: 0
    },
    {
        id: 11,
        question: "Kura smadzeņu daļa kontrolē elpošanu un sirdsdarbību?",
        options: ["Smadzeņu stumbrs", "Lielās smadzenes", "Muguras smadzenes", "Smadzenītes"],
        correct: 0
    },
    {
        id: 12,
        question: "Kurš orgāns satur glomerulus un nefronus?",
        options: ["Nieres", "Aknas", "Plaušas", "Kuņģis"],
        correct: 0
    },
    {
        id: 13,
        question: "Kurā orgānā notiek gāzu apmaiņa starp asinīm un gaisu?",
        options: ["Plaušās", "Sirdī", "Nierēs", "Zarnās"],
        correct: 0
    },
    {
        id: 14,
        question: "Kura dziedzera hormons galvenokārt regulē vielmaiņu?",
        options: ["Vairogdziedzeris", "Aizkuņģa dziedzeris", "Virsnieres", "Epifīze"],
        correct: 0
    },
    {
        id: 15,
        question: "Kurš orgāns sintezē asins plazmas olbaltumvielas, piemēram, albumīnu?",
        options: ["Aknas", "Liesa", "Sirds", "Tievā zarna"],
        correct: 0
    },
    {
        id: 16,
        question: "Kura struktūra nodrošina pārtikas pārvietošanu no mutes līdz kuņģim?",
        options: ["Barības vads", "Traheja", "Zarnas", "Diafragma"],
        correct: 0
    },
    {
        id: 17,
        question: "Kurš no šiem orgāniem satur hepatocītus?",
        options: ["Aknas", "Nieres", "Kuņģis", "Liesa"],
        correct: 0
    },
    {
        id: 18,
        question: "Kura hormonu grupa tiek izdalīta no virsnieru garozas?",
        options: ["Kortikosteroīdi", "Adrenalīns", "Insulīns", "Tiroksīns"],
        correct: 0
    },
    {
        id: 19,
        question: "Kurš orgāns atrodas aiz kuņģa un piedalās gan gremošanā, gan endokrīnā regulācijā?",
        options: ["Aizkuņģa dziedzeris", "Aknas", "Žultspūslis", "Nieres"],
        correct: 0
    },
    {
        id: 20,
        question: "Kurā orgānā tiek ražoti eritrocīti embrija attīstības sākumā?",
        options: ["Aknās", "Kaulu smadzenēs", "Liesā", "Nierēs"],
        correct: 0
    }
];


// Eksportējam jautājumus, lai varētu tos izmantot citos failos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}