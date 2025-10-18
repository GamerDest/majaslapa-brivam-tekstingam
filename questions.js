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
    },
    {
        id: 21,
        question: "Kurā orgānā notiek žults sāļu sintēze?",
        options: ["Aknās", "Žultspūslī", "Tievajā zarnā", "Aizkuņģa dziedzerī"],
        correct: 0
    },
    {
        id: 22,
        question: "Kurā orgānā notiek galvenā ogļhidrātu gremošana?",
        options: ["Tievā zarna", "Kuņģis", "Mutes dobums", "Resnā zarna"],
        correct: 0
    },
    {
        id: 23,
        question: "Kura ir galvenā nieru strukturālā un funkcionālā vienība?",
        options: ["Nefrons", "Glomeruls", "Tubuls", "Papilla"],
        correct: 0
    },
    {
        id: 24,
        question: "Kura smadzeņu daļa atbild par homeostāzi un endokrīno regulāciju?",
        options: ["Hipotalāms", "Hipofīze", "Smadzeņu garoza", "Smadzenītes"],
        correct: 0
    },
    {
        id: 25,
        question: "Kura sirds struktūra novērš asiņu atplūdi no kreisā kambara uz priekškambari?",
        options: ["Mitrālā vārstule", "Trīsvārstu vārstule", "Aortas vārstule", "Plaušu vārstule"],
        correct: 0
    },
    {
        id: 26,
        question: "Kurā orgānā tiek ražots hormons eritropoetīns?",
        options: ["Nierēs", "Aknās", "Kaulu smadzenēs", "Liesā"],
        correct: 0
    },
    {
        id: 27,
        question: "Kura ir galvenā funkcija resnajai zarnai?",
        options: ["Ūdens uzsūkšana", "Olbaltumvielu šķelšana", "Tauku emulgācija", "Žults izdalīšana"],
        correct: 0
    },
    {
        id: 28,
        question: "Kurā orgānā notiek olbaltumvielu denaturācija ar sālsskābi?",
        options: ["Kuņģī", "Tievajā zarnā", "Mutes dobumā", "Aizkuņģa dziedzerī"],
        correct: 0
    },
    {
        id: 29,
        question: "Kurā orgānā atrodas alveolas?",
        options: ["Plaušās", "Sirdī", "Nierēs", "Smadzenēs"],
        correct: 0
    },
    {
        id: 30,
        question: "Kurš hormons palielina glikozes līmeni asinīs, stimulējot glikogenolīzi aknās?",
        options: ["Glikagons", "Insulīns", "Kortizols", "Adrenalīns"],
        correct: 0
    },
    {
        id: 31,
        question: "Kurā orgānā notiek galvenā aminoskābju deaminācija?",
        options: ["Aknās", "Kuņģī", "Nierēs", "Liesā"],
        correct: 0
    },
    {
        id: 32,
        question: "Kura struktūra atdala krūškurvi no vēdera dobuma?",
        options: ["Diafragma", "Perikards", "Pleura", "Peritoneums"],
        correct: 0
    },
    {
        id: 33,
        question: "Kura ir lielākā artērija cilvēka organismā?",
        options: ["Aorta", "Plaušu artērija", "Kakla artērija", "Femorālā artērija"],
        correct: 0
    },
    {
        id: 34,
        question: "Kurā orgānā atrodas Bowmana kapsula?",
        options: ["Nierēs", "Aknās", "Liesā", "Kuņģī"],
        correct: 0
    },
    {
        id: 35,
        question: "Kura smadzeņu daļa koordinē kustības un līdzsvaru?",
        options: ["Smadzenītes", "Hipotalāms", "Smadzeņu garoza", "Smadzeņu stumbrs"],
        correct: 0
    },
    {
        id: 36,
        question: "Kurš hormons samazina kalcija līmeni asinīs?",
        options: ["Kalcitonīns", "Parathormons", "Aldosterons", "Kortizols"],
        correct: 0
    },
    {
        id: 37,
        question: "Kura ir sirds ārējā saistaudu apvalka nosaukums?",
        options: ["Perikards", "Endokards", "Miokards", "Pleura"],
        correct: 0
    },
    {
        id: 38,
        question: "Kurš enzīms sadala taukus monoglicerīdos un brīvajās taukskābēs?",
        options: ["Lipāze", "Amilāze", "Pepsīns", "Laktāze"],
        correct: 0
    },
    {
        id: 39,
        question: "Kurš orgāns satur Heringa kanālus un sinusoīdus?",
        options: ["Aknas", "Nieres", "Liesa", "Aizkuņģa dziedzeris"],
        correct: 0
    },
    {
        id: 40,
        question: "Kura struktūra vīrieša organismā ir atbildīga par spermatozoīdu uzglabāšanu un nogatavināšanu?",
        options: ["Epididīms", "Sēklinieki", "Sēklas pūslīši", "Prostata"],
        correct: 0
    },
    {
        id: 41,
        question: "Kurš orgāns sievietes organismā izdala estrogēnus?",
        options: ["Olnīcas", "Hipofīze", "Dzemde", "Virsnieres"],
        correct: 0
    },
    {
        id: 42,
        question: "Kurā orgānā notiek holesterīna sintēze?",
        options: ["Aknās", "Nierēs", "Kuņģī", "Liesā"],
        correct: 0
    },
    {
        id: 43,
        question: "Kura plaušu struktūra nodrošina gāzu apmaiņu ar kapilāriem?",
        options: ["Alveolas", "Bronhi", "Traheja", "Pleura"],
        correct: 0
    },
    {
        id: 44,
        question: "Kurš hormons regulē nātrija un kālija jonu apmaiņu nierēs?",
        options: ["Aldosterons", "Kortizols", "Insulīns", "Adrenalīns"],
        correct: 0
    },
    {
        id: 45,
        question: "Kura smadzeņu daļa uztver ožas informāciju?",
        options: ["Ožas centrs", "Hipokamps", "Smadzenītes", "Talamuss"],
        correct: 0
    },
    {
        id: 46,
        question: "Kurā orgānā tiek ražots hormons melatonīns?",
        options: ["Epifīzē", "Hipofīzē", "Hipotalāmā", "Vairogdziedzerī"],
        correct: 0
    },
    {
        id: 47,
        question: "Kurš enzīms kuņģī šķeļ olbaltumvielas?",
        options: ["Pepsīns", "Tripsīns", "Amilāze", "Lipāze"],
        correct: 0
    },
    {
        id: 48,
        question: "Kurā orgānā notiek asins detoksikācija no alkohola un medikamentiem?",
        options: ["Aknās", "Nierēs", "Liesā", "Aizkuņģa dziedzerī"],
        correct: 0
    },
    {
        id: 49,
        question: "Kurš hormons palielina ūdens uzsūkšanos nieru kanāliņos?",
        options: ["Vazopresīns", "Aldosterons", "Adrenalīns", "Insulīns"],
        correct: 0
    },
    {
        id: 50,
        question: "Kurš orgāns ir atbildīgs par trombocītu noārdīšanu?",
        options: ["Liesa", "Aknas", "Kaulu smadzenes", "Nieres"],
        correct: 0
    },
    {
        id: 51,
        question: "Kura struktūra ražo cerebrospinālo šķidrumu?",
        options: ["Smadzeņu kambaru pinumi", "Hipotalāms", "Smadzenītes", "Arahnoīdā membrāna"],
        correct: 0
    },
    {
        id: 52,
        question: "Kurš hormons stimulē piena izdalīšanos no krūts dziedzeriem?",
        options: ["Oksitocīns", "Prolaktīns", "Estrogēns", "Kortizols"],
        correct: 0
    },
    {
        id: 53,
        question: "Kurā orgānā atrodas Bowman kapsula?",
        options: ["Nierēs", "Aknās", "Liesā", "Aizkuņģa dziedzerī"],
        correct: 0
    },
    {
        id: 54,
        question: "Kura struktūra regulē ķermeņa temperatūru?",
        options: ["Hipotalāms", "Smadzeņu stumbrs", "Smadzenītes", "Hipofīze"],
        correct: 0
    },
    {
        id: 55,
        question: "Kurā orgānā tiek sintezēts žults pigments bilirubīns?",
        options: ["Aknās", "Liesā", "Nierēs", "Kuņģī"],
        correct: 0
    },
    {
        id: 56,
        question: "Kurš hormons palielina glikozes uzņemšanu šūnās?",
        options: ["Insulīns", "Glikagons", "Kortizols", "Adrenalīns"],
        correct: 0
    },
    {
        id: 57,
        question: "Kurā orgānā notiek galvenā D vitamīna aktivācija?",
        options: ["Nierēs", "Aknās", "Ādā", "Kuņģī"],
        correct: 0
    },
    {
        id: 58,
        question: "Kurā orgānā notiek hemoglobīna noārdīšanās?",
        options: ["Liesā", "Aknās", "Nierēs", "Kaulu smadzenēs"],
        correct: 0
    },
    {
        id: 59,
        question: "Kura struktūra vīrieša organismā ražo prostatas šķidrumu?",
        options: ["Prostata", "Sēklinieki", "Epididīms", "Sēklas pūslīši"],
        correct: 0
    },
    {
        id: 60,
        question: "Kura ir galvenā funkcija limfmezgliem?",
        options: ["Filtrēt limfu un aktivēt imūnšūnas", "Ražot hormonus", "Uzglabāt glikozi", "Filtrēt asinis"],
        correct: 0
    }
];
// Grupēšanas jautājumi (orgāni → sistēmas)
const groupQuestions = [
    {
        id: 1,
        question: "Kuri no šiem orgāniem pieder gremošanas sistēmai?",
        options: [
            "Kuņģis",
            "Tievā zarna",
            "Barības vads",
            "Aknas",
            "Sirds",
            "Niere",
            "Traheja",
            "Urīnpūslis"
        ],
        correct: [0, 1, 2, 3] // 4 pareizi
    },
    {
        id: 2,
        question: "Kuri no šiem orgāniem pieder elpošanas sistēmai?",
        options: [
            "Plaušas",
            "Traheja",
            "Bronhi",
            "Deguna dobums",
            "Kuņģis",
            "Sirds",
            "Tievā zarna",
            "Aknas"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 3,
        question: "Kuri no šiem orgāniem pieder asinsrites sistēmai?",
        options: [
            "Sirds",
            "Artērijas",
            "Vēnas",
            "Kapilāri",
            "Aknas",
            "Plaušas",
            "Kuņģis",
            "Niere"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 4,
        question: "Kuri no šiem orgāniem pieder urīnceļu sistēmai?",
        options: [
            "Nieres",
            "Urīnvada kanāli",
            "Urīnpūslis",
            "Urīnizvadkanāls",
            "Tievā zarna",
            "Kuņģis",
            "Sirds",
            "Aknas"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 5,
        question: "Kuri no šiem orgāniem pieder nervu sistēmai?",
        options: [
            "Smadzenes",
            "Muguras smadzenes",
            "Perifēriskie nervi",
            "Smadzeņu stumbrs",
            "Kuņģis",
            "Nieres",
            "Plaušas",
            "Aknas"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 6,
        question: "Kuri no šiem orgāniem pieder endokrīnajai sistēmai?",
        options: [
            "Vairogdziedzeris",
            "Hipofīze",
            "Virsnieres",
            "Aizkuņģa dziedzeris",
            "Aknas",
            "Sirds",
            "Kuņģis",
            "Tievā zarna"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 7,
        question: "Kuri no šiem orgāniem pieder reproduktīvajai (dzimum) sistēmai?",
        options: [
            "Olnīcas",
            "Dzemde",
            "Sēklinieki",
            "Prostata",
            "Plaušas",
            "Aknas",
            "Nieres",
            "Kuņģis"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 8,
        question: "Kuri no šiem orgāniem pieder imūnsistēmai?",
        options: [
            "Liesa",
            "Tīklains (limfmezgli)",
            "Tīmus (aizkrūtes dziedzeris)",
            "Kaulu smadzenes",
            "Kuņģis",
            "Aknas",
            "Sirds",
            "Plaušas"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 9,
        question: "Kuri no šiem orgāniem pieder skeleta sistēmai?",
        options: [
            "Galvaskauss",
            "Mugurkauls",
            "Ribas",
            "Kauli",
            "Niere",
            "Kuņģis",
            "Plaušas",
            "Sirds"
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 10,
        question: "Kuri no šiem orgāniem pieder muskuļu sistēmai?",
        options: [
            "Skeleta muskuļi",
            "Sirds muskulis",
            "Gremošanas trakta gludā muskulatūra",
            "Diafragma",
            "Aknas",
            "Plaušas",
            "Niere",
            "Smadzenes"
        ],
        correct: [0, 1, 2, 3]
    }
];

const reversedQuestions = [
    {
        id: 1,
        question: "Kurai sistēmai pieder orgāni: barības vads, kuņģis, tievā zarna, aknas?",
        options: ["Gremošanas sistēma", "Elpošanas sistēma", "Asinsrites sistēma", "Ekskrēcijas sistēma"],
        correct: 0
    },
    {
        id: 2,
        question: "Kurai sistēmai pieder orgāni: sirds, artērijas, vēnas, kapilāri?",
        options: ["Asinsrites sistēma", "Limfātiskā sistēma", "Nervu sistēma", "Elpošanas sistēma"],
        correct: 0
    },
    {
        id: 3,
        question: "Kurai sistēmai pieder orgāni: nieres, urīnvadi, urīnpūslis, urīnizvadkanāls?",
        options: ["Ekskrēcijas (izvadorgānu) sistēma", "Gremošanas sistēma", "Endokrīnā sistēma", "Nervu sistēma"],
        correct: 0
    },
    {
        id: 4,
        question: "Kurai sistēmai pieder orgāni: plaušas, bronhi, traheja, deguna dobums?",
        options: ["Elpošanas sistēma", "Asinsrites sistēma", "Endokrīnā sistēma", "Limfātiskā sistēma"],
        correct: 0
    },
    {
        id: 5,
        question: "Kurai sistēmai pieder orgāni: olnīcas, olvadi, dzemde, maksts?",
        options: ["Sieviešu reproduktīvā sistēma", "Endokrīnā sistēma", "Ekskrēcijas sistēma", "Elpošanas sistēma"],
        correct: 0
    },
    {
        id: 6,
        question: "Kurai sistēmai pieder orgāni: smadzenes, muguras smadzenes, perifēriskie nervi, sensorie receptori?",
        options: ["Nervu sistēma", "Endokrīnā sistēma", "Skeleta sistēma", "Elpošanas sistēma"],
        correct: 0
    },
    {
        id: 7,
        question: "Kurai sistēmai pieder orgāni: hipofīze, vairogdziedzeris, virsnieres, aizkuņģa dziedzeris?",
        options: ["Endokrīnā sistēma", "Nervu sistēma", "Imūnsistēma", "Ekskrēcijas sistēma"],
        correct: 0
    },
    {
        id: 8,
        question: "Kurai sistēmai pieder orgāni: liesa, limfmezgli, limfvadi, limfa?",
        options: ["Limfātiskā sistēma", "Asinsrites sistēma", "Elpošanas sistēma", "Endokrīnā sistēma"],
        correct: 0
    },
    {
        id: 9,
        question: "Kurai sistēmai pieder orgāni: āda, mati, nagi, sviedru dziedzeri?",
        options: ["Ādas jeb integumentārā sistēma", "Endokrīnā sistēma", "Elpošanas sistēma", "Nervu sistēma"],
        correct: 0
    },
    {
        id: 10,
        question: "Kurai sistēmai pieder orgāni: kauli, skrimšļi, locītavas, cīpslas?",
        options: ["Skeleta sistēma", "Muskuļu sistēma", "Limfātiskā sistēma", "Elpošanas sistēma"],
        correct: 0
    }
];


// Eksportējam jautājumus, lai varētu tos izmantot citos failos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions, groupQuestions };
}