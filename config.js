/* ================================================================
   KONFIGURATION — automatisch aus eurer key.csv generiert
   ================================================================ */
window.SURVEY_CONFIG = {

  /* ---- Supabase (kostenlose Datenbank, siehe README Schritt 2) ---- */
  supabaseUrl: "https://bxokkhaamrawjbsbmwoy.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4b2traGFhbXJhd2pic2Jtd295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMTQxNzgsImV4cCI6MjA5OTc5MDE3OH0.lzDeDUFP-hD4UyQtVVIJSnXTeiAdRTCaM4RlutrM-WE",


  /* ---- Aufmerksamkeitschecks: mind. so viele der 3 identischen
          Paare müssen als "kein Unterschied" erkannt werden, damit
          eine Teilnahme in der gefilterten Auswertung zählt ---- */
  attentionMinPass: 2,

  /* ---- Items (ft = auf welcher Seite das getunte Modell liegt;
          null = Aufmerksamkeitscheck mit identischem Audio).
          NICHT im öffentlichen Repo ändern müsst ihr hier nichts. ---- */
  items: [
    {
        "id": "01",
        "type": "compare",
        "ft": "B",
        "text": "Der Chemiker aus München lachte über das zerbrochene Reagenzglas.",
        "a": "audio/sample_01_A.wav",
        "b": "audio/sample_01_B.wav"
    },
    {
        "id": "02",
        "type": "compare",
        "ft": "A",
        "text": "Nachts las sie ein Buch über griechische Mythologie und Architektur.",
        "a": "audio/sample_02_A.wav",
        "b": "audio/sample_02_B.wav"
    },
    {
        "id": "03",
        "type": "compare",
        "ft": "A",
        "text": "Der Techniker prüfte die Maschine gründlich vor jeder Nachtschicht.",
        "a": "audio/sample_03_A.wav",
        "b": "audio/sample_03_B.wav"
    },
    {
        "id": "04",
        "type": "compare",
        "ft": "B",
        "text": "Michael besuchte die Kirche und sprach danach mit dem Küchenchef.",
        "a": "audio/sample_04_A.wav",
        "b": "audio/sample_04_B.wav"
    },
    {
        "id": "05",
        "type": "compare",
        "ft": "B",
        "text": "Am Montag lag der Hund faul auf dem Weg vor dem Krankenhaus.",
        "a": "audio/sample_05_A.wav",
        "b": "audio/sample_05_B.wav"
    },
    {
        "id": "06",
        "type": "compare",
        "ft": "B",
        "text": "Der Zug nach Hamburg hielt halb sechs am unteren Bahnsteig.",
        "a": "audio/sample_06_A.wav",
        "b": "audio/sample_06_B.wav"
    },
    {
        "id": "07",
        "type": "compare",
        "ft": "B",
        "text": "Sein Rad stand seit Tagen ungenutzt neben dem alten Schuppen.",
        "a": "audio/sample_07_A.wav",
        "b": "audio/sample_07_B.wav"
    },
    {
        "id": "08",
        "type": "compare",
        "ft": "A",
        "text": "Die schöne Wüste erstreckte sich über fünfhundert Kilometer nach Süden.",
        "a": "audio/sample_08_A.wav",
        "b": "audio/sample_08_B.wav"
    },
    {
        "id": "09",
        "type": "compare",
        "ft": "B",
        "text": "Für den Käse zahlte sie zwölf Euro und siebzig Cent.",
        "a": "audio/sample_09_A.wav",
        "b": "audio/sample_09_B.wav"
    },
    {
        "id": "10",
        "type": "compare",
        "ft": "A",
        "text": "Über den Bäumen kreisten müde Vögel im frühen Morgengrauen.",
        "a": "audio/sample_10_A.wav",
        "b": "audio/sample_10_B.wav"
    },
    {
        "id": "11",
        "type": "compare",
        "ft": "A",
        "text": "Die Königin trug grüne Schuhe und einen übergroßen Hut.",
        "a": "audio/sample_11_A.wav",
        "b": "audio/sample_11_B.wav"
    },
    {
        "id": "12",
        "type": "compare",
        "ft": "B",
        "text": "Im Restaurant bestellte der Journalist eine Portion Champignons.",
        "a": "audio/sample_12_A.wav",
        "b": "audio/sample_12_B.wav"
    },
    {
        "id": "13",
        "type": "compare",
        "ft": "A",
        "text": "Das Genre der Chansons erlebte in Frankreich eine Renaissance.",
        "a": "audio/sample_13_A.wav",
        "b": "audio/sample_13_B.wav"
    },
    {
        "id": "14",
        "type": "compare",
        "ft": "B",
        "text": "Er hatte die Chance, das Engagement im Orchester anzunehmen.",
        "a": "audio/sample_14_A.wav",
        "b": "audio/sample_14_B.wav"
    },
    {
        "id": "15",
        "type": "compare",
        "ft": "B",
        "text": "Der Ingenieur diskutierte das Budget mit dem Chef der Agentur.",
        "a": "audio/sample_15_A.wav",
        "b": "audio/sample_15_B.wav"
    },
    {
        "id": "16",
        "type": "compare",
        "ft": "A",
        "text": "Am dritten Oktober zweitausendvierundzwanzig regnete es ununterbrochen.",
        "a": "audio/sample_16_A.wav",
        "b": "audio/sample_16_B.wav"
    },
    {
        "id": "17",
        "type": "compare",
        "ft": "A",
        "text": "Der Vortrag beginnt um Viertel vor acht im Raum siebenhundertzwölf.",
        "a": "audio/sample_17_A.wav",
        "b": "audio/sample_17_B.wav"
    },
    {
        "id": "18",
        "type": "compare",
        "ft": "A",
        "text": "Sie fuhr mit einhundertdreißig Stundenkilometern über die Autobahn.",
        "a": "audio/sample_18_A.wav",
        "b": "audio/sample_18_B.wav"
    },
    {
        "id": "19",
        "type": "compare",
        "ft": "A",
        "text": "An der Straßenbahnhaltestelle warteten viele durchnässte Fahrgäste.",
        "a": "audio/sample_19_A.wav",
        "b": "audio/sample_19_B.wav"
    },
    {
        "id": "20",
        "type": "compare",
        "ft": "A",
        "text": "Die Geschwindigkeitsbegrenzung galt auch für Schwerlastfahrzeuge.",
        "a": "audio/sample_20_A.wav",
        "b": "audio/sample_20_B.wav"
    },
    {
        "id": "21",
        "type": "compare",
        "ft": "B",
        "text": "Der Wirtschaftswissenschaftler hielt einen Vortrag über Versicherungen.",
        "a": "audio/sample_21_A.wav",
        "b": "audio/sample_21_B.wav"
    },
    {
        "id": "22",
        "type": "compare",
        "ft": "A",
        "text": "Der Übersetzer musste den modernen Text noch einmal übersetzen.",
        "a": "audio/sample_22_A.wav",
        "b": "audio/sample_22_B.wav"
    },
    {
        "id": "23",
        "type": "compare",
        "ft": "B",
        "text": "Bitte umfahren Sie das Hindernis und nicht etwa umfahren.",
        "a": "audio/sample_23_A.wav",
        "b": "audio/sample_23_B.wav"
    },
    {
        "id": "24",
        "type": "compare",
        "ft": "A",
        "text": "Der Wind pfiff durch die schmalen Gassen der historischen Altstadt.",
        "a": "audio/sample_24_A.wav",
        "b": "audio/sample_24_B.wav"
    },
    {
        "id": "25",
        "type": "compare",
        "ft": "B",
        "text": "Im Sommer schwimmen die Kinder gerne im kühlen See am Waldrand.",
        "a": "audio/sample_25_A.wav",
        "b": "audio/sample_25_B.wav"
    },
    {
        "id": "c01",
        "type": "attention",
        "ft": null,
        "text": "Die Bibliothek öffnet werktags um neun Uhr ihre schweren Türen.",
        "a": "audio/sample_c01_A.wav",
        "b": "audio/sample_c01_B.wav"
    },
    {
        "id": "c02",
        "type": "attention",
        "ft": null,
        "text": "Auf dem Markt kaufte er frisches Gemüse und einen Blumenstrauß.",
        "a": "audio/sample_c02_A.wav",
        "b": "audio/sample_c02_B.wav"
    },
    {
        "id": "c03",
        "type": "attention",
        "ft": null,
        "text": "Der Pianist spielte ein ruhiges Stück von einem russischen Komponisten.",
        "a": "audio/sample_c03_A.wav",
        "b": "audio/sample_c03_B.wav"
    }
],
};
