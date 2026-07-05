/* ============================================================
   RECIPES.JS — deine fest einprogrammierten Rezepte
   ============================================================

   Hier kannst du Rezepte direkt im Code eintragen, ohne die App
   zu öffnen. Jedes Rezept ist ein Objekt in der BUILTIN_RECIPES-
   Liste unten. Kopiere einfach einen bestehenden Eintrag, ändere
   die Werte und speichere die Datei.

   Felder:
     title         - Name des Rezepts (Text)
     category      - Kategorie, z.B. "Desserts", "Gerichte", "Getränke",
                     "Kuchen" (oder eine eigene neue)
     portions      - Anzahl Portionen, für die die Mengen gelten (Zahl)
     time_minutes  - Zubereitungszeit in Minuten (Zahl oder null)
     difficulty    - z.B. "Leicht", "Mittel", "Schwer" (optional)
     tags          - Liste von Schlagworten (optional), z.B. ["Vegetarisch"]
     image         - Bild-URL (ein Link auf ein Foto im Internet) oder ""
     ingredients   - Zutaten als ein Text, eine Zutat pro Zeile
     steps         - Liste von Zubereitungsschritten (jeder Schritt = ein Text)
     notes         - Freitext-Notizen/Tipps (optional)

   Bild-Hinweis: "image" ist hier bewusst ein Link (URL) und kein
   Foto-Upload — so bleiben auf dem Handy keine großen Bilddateien
   liegen. Wenn du in der App über "+ Rezept" ein eigenes Rezept
   hinzufügst, trägst du dort ebenfalls einen Bildlink ein (oder
   lässt das Feld leer).
   ============================================================ */

var BUILTIN_RECIPES = [
  {
    title: "Apfel-Schmand-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/973_730/public/2025-10/2025_Apfel-Schmand-Torte_Aufmacher.jpg?h=bc174711&itok=CVTFgYyx",
    ingredients: "5 Äpfel\nSaft von 1 Zitrone\n500 ml Apfelsaft\n375 g Zucker\n2 TL Zucker\n2 Pck. Puddingpulver Vanille-Geschmack (zum Kochen)\n200 g Mehl\n175 g Butter\n1 TL Backpulver\n1 Ei (Gr. M)\n250 g Schmand\n500 g Schlagsahne\nZimt zum Bestreuen",
    steps: [
      "Äpfel schälen, vierteln und Kerngehäuse entfernen. Viertel in dünne Scheiben schneiden, mit Zitronensaft beträufeln. 440 ml Apfelsaft und 200 g Zucker aufkochen. Puddingpulver und übrigen Apfelsaft glatt rühren.",
      "In den kochenden Saft rühren, aufkochen und ca. 1 Minute köcheln lassen. Von der Herdplatte nehmen, Äpfel unterrühren und ca. 1 Stunde abkühlen lassen.",
      "Mehl, Butter in Flöckchen, 175 g Zucker, Backpulver und Ei in eine Schüssel geben. Erst mit den Knethaken des Handrührgerätes, dann mit den Händen zu einem Mürbeteig verkneten. Teig in eine gefettete, mit Mehl ausgestäubte Springform (26 cm Ø) als Boden und Rand drücken.",
      "Apfelmasse auf dem Teig verteilen. Im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) ca. 45 Minuten backen. Herausnehmen und auf einem Kuchengitter auskühlen lassen.",
      "Schmand und 2 TL Zucker verrühren. Sahne mit den Schneebesen des Handrührgerätes steif schlagen, unter den Schmand heben. Kuchen vorsichtig aus der Form lösen, auf eine Tortenplatte setzen. Schmandcreme locker auf dem Kuchen verstreichen.Schmand und 2 TL Zucker verrühren. Sahne mit den Schneebesen des Handrührgerätes steif schlagen, unter den Schmand heben. Kuchen vorsichtig aus der Form lösen, auf eine Tortenplatte setzen. Schmandcreme locker auf dem Kuchen verstreichen.",
      "Mit Zimt bestäuben."
    ],
    notes: ""
  },
  {
    title: "Apfelkuchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.malteskitchen.de/wp-content/uploads/2016/04/toaskanischer-apfelkuchen-final-7-1440x680.webp",
    ingredients: "3 Äpfel\n150 g Butter oder Margarine\n150 g Zucker\n1 Prise(n) Salz\n2 Eier (Gr. M)\n1 Pck. Vanillepuddingpulver (zum Kochen)\n250 g Mehl\n3 gestr. TL Backpulver\n5 EL Milch\nPuderzucker zum Bestäuben",
    steps: [
      "Äpfel schälen, vierteln, Kerngehäuse herausschneiden und Fruchtfleisch in Würfel schneiden.",
      "Fett, Zucker und Salz mit den Schneebesen des Handrührgerätes weißcremig aufschlagen. Eier nacheinander unterrühren.",
      "Puddingpulver, Mehl und Backpulver mischen. Mehl-Mischung und Milch abwechselnd unter den Teig heben. Äpfel unter den Teig heben. Teig in eine gefettete, mit Mehl ausgestäubte Springform (26 cm Ø) geben und glatt streichen. Im vorgeheizten Backofen (Ober-/Unterhitze: 175 °C/ Umluft: 150 °C) ca. 45 Minuten backen.",
      "Apfelkuchen aus dem Ofen nehmen, auf einem Kuchengitter auskühlen lassen und aus der Form lösen. Mit Puderzucker bestäuben."
    ],
    notes: ""
  },
  {
    title: "Avocado-Toast mit Rührei und Bacon",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/f5571511-avocado-bacon-ei-sandwich,id=67112c7b,b=lecker,w=795,ca=10.00,31.04,91.20,79.68,rm=sk.webp",
    ingredients: "8 Scheiben Bacon\n6 Eier (Gr. M)\n2 Avocados\n2 EL Zitronensaft\nSalz\nPfeffer\n8 Scheiben Toast\n2 EL Honig-Senf",
    steps: [
      "Bacon in einer Pfanne ohne Fett knusprig braten. Eier ca. 9 Minuten kochen. Avocados halbieren und entkernen. Das Fruchtfleisch herauslösen und mit Zitronensaft pürieren. Mit Salz und Pfeffer abschmecken. Brotscheiben toasten.",
      "Eier kalt abschrecken, pellen und grob hacken. Mit Honig-Senf, Salz und Pfeffer würzen. 4 Scheiben Toastbrot mit dem Avocadomus bestreichen. Erst den Bacon und dann den Senf-Eier-Mix darauf verteilen. Mit den restlichen Toastscheiben abschließen."
    ],
    notes: ""
  },
  {
    title: "Bananen-Karamell-Schoko-Kuchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/bananen-karamell-schoko-kuchen,id=1cb7ff08,b=lecker,w=795,rm=sk.webp",
    ingredients: "1 Dose (400 g) Kondensmilch\n85 g Butter\n1 Packung (250 g) Hafer-Mürbeteig-Kekse mit Vollmilchschokolade\n200 g Zartbitterschokolade\n2 (à 125 g) Crème-double\n2 mittelgroße Banane (à ca. 160 g)\n1 EL Zitronensaft\n1 TL Kakaopulver",
    steps: [
      "Kondensmilch in der Dose in einem Topf mit Wasser bedecken und ca. 2 Stunden bei mittlerer Hitze köcheln lassen. Inzwischen Butter schmelzen. Kekse im Universalzerkleinerer fein mahlen, mit Butter vermengen.",
      "Den Boden einer Springform (20 cm Ø) mit Backpapier auslegen. Keksmasse in die Form geben und zu einem Boden festdrücken. Dabei einen Rand von ca. 3 cm andrücken. Keksboden ca. 30 Minuten kalt stellen.",
      "Kondensmilchdose aus dem Wasser nehmen und abkühlen lassen. Schokolade hacken und über einem warmen Wasserbad schmelzen. Geschmolzene Schokolade und eingekochte Kondensmilch mit den Schneebesen des Handrührgerätes verrühren.",
      "Masse auf den Keksboden geben und glattstreichen. Ca. 30 Minuten kalt stellen.",
      "Crème double mit den Schneebesen des Handrührgerätes steif schlagen. Bananen schälen, in Scheiben schneiden und mit dem Zitronensaft beträufeln. Ca. die Hälfte der Bananen unter die Creme heben. Creme auf den Kuchen geben und glatt streichen.",
      "Restliche Bananen auf der Creme verteilen und mit Kakao bestäuben."
    ],
    notes: ""
  },
  {
    title: "Birnen-Schoko-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/birnen-schoko-torte,id=7ec4e265,b=lecker,w=795,rm=sk.webp",
    ingredients: "4 Birnen\n150 ml trockener Weißwein\nSaft von 1 Zitrone\n125 g Zucker\n3 Eier (Gr. M)\n150 g Puderzucker\nSalz\n150 ml Sonnenblumenöl\n400 g Schlagsahne\n100 g Mehl\n75 g Speisestärke\n10 g Backpulver\n2 Blatt Gelatine\n250 g Schmand\n1 Pck. Vanillin-Zucker\n200–250 g Himbeer-Konfitüre\n150 g Vollmilch-Kuvertüre\n2 Päckchen Tortenguss",
    steps: [
      "Birnen schälen und halbieren. Kerngehäuse, Stiel- und Blütenansatz entfernen. Weißwein, Zitronensaft, 500 ml Wasser und 75 g Zucker aufkochen. Birnen darin 15–20 Minuten köcheln lassen, bis sie weich sind (sollten die Birnen nicht bedeckt sein, hin und wieder wenden)",
      "Eier, Puderzucker und Salz mit den Schneebesen des Handrührgerätes dickcremig aufschlagen. Öl und 150 g Sahne langsam unter Rühren zugießen. Mehl, Stärke und Backpulver mischen, unterrühren und zu einem glatten Teig verrühren. In eine gefettete Springform (ca. 26 cm Ø) und im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) 20–30 Minuten backen",
      "Birnen aus dem Sud nehmen. Birnen und Sud auskühlen lassen. Kuchen aus dem Backofen nehmen und auf einem Kuchengitter in der Form auskühlen lassen",
      "Gelatine in kaltem Wasser einweichen. Schmand, Vanillin-Zucker und 50 g Zucker verrühren. Gelatine ausdrücken und in einem kleinen Topf schmelzen. 2 EL Creme einrühren, dann in die übrige Creme rühren. Creme ca. 15 Minuten kalt stellen, bis sie anfängt zu gelieren. 150 g Sahne steif schlagen und unter die Creme heben",
      "Tortenboden aus der Form lösen und waagerecht halbieren. Konfitüre glatt rühren. 1 EL Konfitüre beiseitenehmen, übrige Konfitüre auf der unteren Teighälfte verstreichen. Obereb Boden daraufsetzen und den Tortenboden mit einem Tortenring umschließen. Creme auf dem Boden verteilen. Birnen trocken tupfen und kreisförmig in die Creme drücken. Torte mindestens 4 Stunden kalt stellenTortenboden aus der Form lösen und waagerecht halbieren. Konfitüre glatt rühren. 1 EL Konfitüre beiseitenehmen, übrige Konfitüre auf der unteren Teighälfte verstreichen. Obereb Boden daraufsetzen und den Tortenboden mit einem Tortenring umschließen. Creme auf dem Boden verteilen. Birnen trocken tupfen und kreisförmig in die Creme drücken. Torte mindestens 4 Stunden kalt stellen",
      "Kuvertüre grob hacken. 250 ml Birnensud abmessen und mit Wasser auf 500 ml auffüllen. Tortenguss in einen Topf geben. Flüssigkeit langsam einrühren. Schokolade ebenfalls zugeben und unter Rühren langsam erhitzen, bis die Schokolade geschmolzen ist. Guss einmal kurz aufkochen und unter langsamen Rühren etwas abkühlen lassen",
      "Guss zügig auf die Creme gießen und sofort nochmals ca. 1 Stunde kalt stellen. Konfitüre und 1 EL Wasser aufkochen, durch ein Sieb streichen und auskühlen lassen. 100 g Schlagsahne steif schlagen und in einen Spritzbeutel mit mittelgroßer Sterntülle füllen. Torte aus der Form lösen und mit Sahnetuffs und Konfitüre verzierenGuss zügig auf die Creme gießen und sofort nochmals ca. 1 Stunde kalt stellen. Konfitüre und 1 EL Wasser aufkochen, durch ein Sieb streichen und auskühlen lassen. 100 g Schlagsahne steif schlagen und in einen Spritzbeutel mit mittelgroßer Sterntülle füllen. Torte aus der Form lösen und mit Sahnetuffs und Konfitüre verzieren",
      "Wartezeit ca. 6 Stunden"
    ],
    notes: ""
  },
  {
    title: "Buttercreme-Mohn-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/buttercreme-mohn-torte-b1,id=09a1cc3a,b=lecker,w=795,rm=sk.webp",
    ingredients: "3 Tassen (270 g)gemahlener Mohn\n2 Tassen (300 g) Weichweizengrieß\n2 Tassen (320 g) Zucker\n50 g Zucker\n50 g Mehl\n1 Pck. Backpulver\n3 Eier (Gr. M)\n180 ml Sonnenblumenöl\nca. 6 Tropfen Bittermandel- oder Zitronenaroma\n1 Päckchen Vanillepuddingpulver\n500 ml Milch\n250 g weiche Butter\n300 g Schlagsahne\n1 Pck. Vanillezucker\n30 g Schoko-Zebraröllchen\nFett und Mehl für die Form",
    steps: [
      "Für den Boden Mohn, Grieß, 2 Tassen Zucker, Mehl und Backpulver mischen. Eier, ½ Tasse (100 ml) Wasser, Öl und Aroma in eine Schüssel geben. Mohnmischung zufügen, glatt verrühren. Teig in eine gefettete, bemehlte Springform (26 cm Ø) geben. Im vorgeheizten Backofen (E-Herd: 180 °C/Umluft: 160 °C) auf der 2. Schiene von unten ca. 45 Minuten backen. Auskühlen lassen. Für den Boden Mohn, Grieß, 2 Tassen Zucker, Mehl und Backpulver mischen. Eier, ½ Tasse (100 ml) Wasser, Öl und Aroma in eine Schüssel geben. Mohnmischung zufügen, glatt verrühren. Teig in eine gefettete, bemehlte Springform (26 cm Ø) geben. Im vorgeheizten Backofen (E-Herd: 180 °C/Umluft: 160 °C) auf der 2. Schiene von unten ca. 45 Minuten backen. Auskühlen lassen.",
      "Für die Buttercreme Puddingpulver, 100 ml Milch und 50 g Zucker glatt rühren. 400 ml Milch aufkochen. ­Angerührtes Puddingpulver einrühren, unter Rühren ca. 1 Minute kochen. In eine Schüssel füllen, direkt mit Folie belegen. Ca. 2 Stunden abkühlen lassen.",
      "Butter mit den Schneebesen des Rührgeräts ca. 5 Minuten weißcremig aufschlagen. Pudding kurz durch­rühren, esslöffelweise unter die Butter rühren. Kuchen aus der Form lösen, Boden waagerecht halbieren. Um den unteren Boden einen Tortenring legen. Ca. die Hälfte der Buttercreme auf den Boden geben, glatt streichen. Oberen Boden daraufsetzen, Rest Creme darauf­streichen. Ca. 2 Stunden kalt stellen.",
      "Zum Verzieren Sahne und Vanillezucker steif schlagen. Hälfte Sahne in einen Spritzbeutel mit großer Sterntülle geben. Torte mit Rest Sahne ein­streichen. Mit Sahnetuffs verzieren. Bis zum Servieren kühlen, dann mit Röllchen verzieren."
    ],
    notes: ""
  },
  {
    title: "Chocolate & Coffee Pudding",
    category: "Desserts",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/chocolate-und-coffee-pudding-mit-pochierter-birne-hof106226101,id=23f76340,b=lecker,w=795,ca=9.80,26.63,93.80,68.58,rm=sk.webp",
    ingredients: "50 g + 12 Stücke Zartbitterschokolade\n500 ml Milch\n40 g Zucker\n3 EL Kakaopulver\n2 TL Instantkaffee\n30 g Speisestärke\n2 kleine Birnen\n150 ml trockener Weißwein\n200 ml Birnensaft\n6 EL Ahornsirup\n1 EL Zitronensaft\n1 Zimtstange\n8 EL Kondensmilch\nca. 2 EL Mandelstifte\nca. 2 TL Kaffeebohnen",
    steps: [
      "50 g Schokolade hacken. Milch, bis auf 5 EL, mit Zucker, Kakao, Schokolade und Kaffeepulver unter Rühren erhitzen, bis die Schokolade geschmolzen ist. Rest Milch mit Stärke glatt rühren, in die heiße Milch rühren und ca. 2 Minuten köcheln, bis der Pudding andickt. In 4 Dessertschalen (à ca. 250 ml) füllen. Puddinge abkühlen lassen, dann im Kühlschrank auskühlen lassen.",
      "Birnen nach Belieben schälen und längs halbieren (Stiel dabei stehen lassen). Kerngehäuse mit einem Kugelausstecher ­herauslösen. Wein und Saft mit 2 EL Ahornsirup, Zitronensaft und Zimtstange aufkochen. Birnen zugeben und bei schwacher Hitze zugedeckt ca. 10 Minuten köcheln. Vom Herd ziehen und im Sud auskühlen lassen. 4 EL Ahornsirup und Kondensmilch in einem kleinen Topf ca. 10 Minuten dicklich einköcheln, ebenfalls auskühlen lassen.",
      "Mandelstifte in einer Pfanne ohne Fett rösten, auskühlen ­lassen. Kaffeebohnen grob ­zerstoßen. Birnen aus dem Sud heben, abtropfen lassen und längs in Scheiben schneiden. Mit den restlichen Schoko­stückchen auf den Puddingen verteilen. Mit Mandeln und ­Kaffeebohnen bestreuen, mit Kondensmilch-Sud beträufeln."
    ],
    notes: ""
  },
  {
    title: "Cremige Schweizer Käsesoße",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/f5625204-vier-mal-anders-schnelle-sosen-2,id=a3b6f022,b=lecker,w=795,ca=5.00,24.80,95.00,78.88,rm=sk.webp",
    ingredients: "1 kleine Knoblauchzehe\n100 g Greyerzer Käse\n100 g Vacherin-Käse\n2-3 Stiele Thymian\n1 TL Butter\n1 TL Mehl\n50 ml Weißwein\n125 ml Gemüsebrühe\n150 ml Milch\nSalz\nMuskat\n1 TL rosa Beeren (pfefferähnliches Gewürz)",
    steps: [
      "Knoblauch schälen, hacken. Käse grob reiben. Thymian waschen und, bis auf etwas zum Garnieren, fein hacken.",
      "Butter in einem Topf erhitzen. Knoblauch und Thymian darin kurz andünsten. Mehl einrühren und hell anschwitzen. Unter Rühren Wein und Brühe angießen. Milch einrühren und alles aufkochen. Soße unter Rühren ca. 5 Minuten ­köcheln. Käse einrühren und bei schwacher Hitze in der Soße schmelzen. Soße mit Salz und Muskat abschmecken. Übrigen Thymian und rosa Beeren darüberstreuen."
    ],
    notes: ""
  },
  {
    title: "Cremiges Himbeer-Dessert",
    category: "Desserts",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/himbeer-baiser-ceme,id=3cc1d33a,b=lecker,w=795,rm=sk.webp",
    ingredients: "250 g TK-Himbeeren\n125 g Zucker\n1 Pck. Sahnefestiger\n400 g Sahnequark (40 % Fett)\n100 g Schlagsahne\n2 Eiweiß (Gr. M)\nSalz",
    steps: [
      "Himbeeren auftauen lassen. 50 g Zucker und Sahnefestiger mischen. Aufgetaute Himbeeren, Quark und Zuckermix verrühren. Sahne sehr steif schlagen und unterheben. In Gläser füllen und mindestens 1 Stunde kalt stellen.",
      "Eiweiß mit 1 Prise Salz steif schlagen, dabei 75 g Zucker einrieseln lassen. So lange schlagen, bis sich der Zucker gelöst hat und die Masse glänzt. In ­einen Spritzbeutel mit großer Lochtülle füllen.",
      "Baisermasse auf die Himbeercreme spritzen. Mit einem Küchengasbrenner oder kurz unter dem vorgeheizten Backofengrill goldbraun abflämmen und servieren."
    ],
    notes: ""
  },
  {
    title: "Crunch-Dessert mit Himbeeren",
    category: "Desserts",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/himbeer-crunch-dessert-b,id=3ea8488b,b=lecker,w=795,rm=sk.webp",
    ingredients: "100 g weiße Schokolade\n50 g Cornflakes\n250 g Himbeeren (frisch oder TK, aufgetaut)\n200 g rote Konfitüre (z. B. Heidelbeer oder Himbeer)\n250 g Schlagsahne\n200 g Schmand\n1 Pck. Vanillezucker\n50 g Zucker",
    steps: [
      "Für den Schoko-Knusper Schoko­lade hacken und im heißen Wasserbad schmelzen. Cornflakes unter die Schokolade rühren. Mischung mithilfe von zwei Teelöffeln in Häufchen auf Backpapier setzen. Ca. 15 Minuten an einem kühlen Ort fest werden lassen.",
      "Für die Himbeeren Beeren verlesen. Konfitüre glatt rühren. Himbeeren und ­Konfitüre vorsichtg mischen.",
      "Für die creme Sahne steif schlagen. Schmand, Vanille­zucker und Zucker cremig rühren. Sahne unterheben.",
      "Ca. 2⁄3 des Schoko-Knuspers in eine große Dessertschale geben. Himbeermischung, bis auf etwa 3 EL, daraufgeben. Die Schmandcreme darauf verteilen. Übrigen Schoko-Knusper grob zerbröckeln. Vor dem Servieren über den Trifle streuen. Mit den restlichen Himbeeren anrichten."
    ],
    notes: ""
  },
  {
    title: "Curry Pan",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.closetcooking.com/wp-content/uploads/2008/03/Kare-Pan-Curry-Bread.jpg",
    ingredients: "Für den Hefeteig:\n200 g Mehl (hier Weizen\n405 )\n2 EL Zucker\n1 TL Salz\n3 g Hefe (hier\nTrockenhefe)\n125 ml Milch\n10 g Butter\n\nFür das vegetarische Curry:\n400 g Kartoffeln\n400 g Möhren\n1 große Zwiebel\n2 EL Ol (zum Beispiel\nSonnenblumenöl)\n500 ml Wasser\n1 Packung Curry\n\nZum Frittieren:\n1 Ei\n100 g Panko\nreichlich Ol (zum\nFrittieren)",
    steps: [
      "Die Zutaten für die selbstgemachten Curry Brötchen oder",
      "Kare Pan bereitlegen. Tipp: Wenn du übriggebliebenes Curry",
      "verwenden möchtest, dieses ggf. über Nacht in den",
      "Kühlschrank stellen und dann vor der Verwendung zu einer",
      "Paste pürieren.",
      "Zu Beginn kümmern wir uns um den Hefeteig: Dazu die",
      "Milch in einen kleinen Topf füllen und die Butter hinzufügen.",
      "Beides langsam erwärmen und sobald die Butter",
      "geschmolzen ist, vom Herd nehmen. Kurz abkühlen lassen.",
      "Währenddessen in eine große Schüssel weiterhin für den",
      "Hefeteig Mehl, Zucker, Salz und Trockenhefe geben und mit",
      "einem Löffel miteinander vermischen.",
      "Anschließend die Milch-Butter-Mischung mit in die Schüssel",
      "zu den trockenen Zutaten geben. Alles zuerst mit dem Löffel",
      "vermischen, dann mit den Händen in der Schüssel und",
      "anschließend auf einer sauberen Arbeitsfläche sorgfältig",
      "und kräftig kneten, sodass ein geschmeidiger Hefeteig",
      "entsteht (circa 5 Minuten kräftig mit den Handballen",
      "kneten). Falls der Teig an den Handflächen kleben bleiben",
      "sollte, nach und nach Mehl mit einkneten.",
      "Den Teig zu einer Kugel formen und in der Schüssel circa 1",
      "Stunde, oder bis er zur doppelten Größe aufgegangen ist,",
      "mit einem leicht feuchten Handtuch zugedeckt an einem",
      "warmen Ort gehen lassen",
      "Währenddessen kümmern wir uns um das vegetarische",
      "Curry, falls du ein frisches Curry kochen möchtest: Dazu",
      "Kartoffeln, Möhren und Zwiebeln schälen bzw. putzen und",
      "in kleine Stücke schneiden.",
      "Öl in einem großen Topf erhitzen und das Gemüse",
      "hineingeben. Alles ungefähr 5 Minuten von allen Seiten",
      "kräftig anbraten. Anschließend mit Wasser übergießen und",
      "gut umrühren. Den Deckel schließen und die Hitze so weit senken, dass das Wasser im Topf",
      "leicht köchelt. Alles circa 15 Minuten garen, bis die Kartoffeln weichgekocht sind.",
      "Sobald das Gemüse gar ist, Hitze abstellen und das ausgepackte und das zerkleinerte Curry",
      "hinzufügen. Die Currywürfel solange unterrühren, bis sie sich aufgelöst haben. Vom Herd",
      "nehmen und 5 Minuten abkühlen lassen. Tipp: Wir brauchen für die Füllung nur etwa 100 g",
      "des zubereiteten Curry. Den Rest kannst du gerne zu Curry Rice weiterverarbeiten oder auch",
      "einfrieren",
      "Dann das Curry entweder pürieren oder mit einem Stampfer etwas zerstampfen, damit eine",
      "gleichmäßigere Masse entsteht, mit der sich die Brötchen dann gut füllen lassen.",
      "Zurück zum Hefeteig: Sobald der Hefeteig die doppelte Größe erreicht hat, diesen aus der",
      "Schüssel heben, kurz durchkneten und zu einer länglichen Rolle formen.",
      "Den Teig jetzt in 8 gleichgroße Stücke schneiden und zu gleichmäßigen Kugeln formen. Dazu",
      "am besten zwischen den Handflächen rundformen und dann auf der Arbeitsfläche glätten.",
      "Alle Stücke so formen und bereitlegen.",
      "Eine Kugel auf der sauberen Arbeitsfläche mit etwas Frischhaltefolie abdecken, dann mit der",
      "Handfläche leicht platt drücken und anschließend mit einem Nudelholz zu einem Kreis",
      "(Durchmesser circa 10 Zentimeter) ausrollen. Die Folie entfernen und zur Seite legen.",
      "Den Teigfladen nochmal etwas mit den Händen dehnen und in die Mitte 1-2 Esslöffel des",
      "Curry platzieren. Bitte achte darauf, das Brötchen nicht zu überfüllen. Pass außerdem auf,",
      "dass du den Teigrand trocken hältst! Nehme mit den Fingern zwei gegenüberliegende Seite",
      "des Teigrands und drücke mit den Fingerspitzen beide Seiten der Länge nach fest zusammen.",
      "Auch die Spitzen gut verschließen und eine länglich-ovale Form anstreben. Alle 8 Brötchen so",
      "vorbereiten und mit der „Naht“ nach unten auf ein Backpapier legen.",
      "Verquirle in einer Schüssel das Ei und stelle das Panko bereit. Dann jedes Currybrötchen",
      "zuerst ins Ei rundherum eintauchen und dann ringsum mit Panko panieren.",
      "Lege die Brötchen zurück auf das Backpapier und lasse sie noch einmal 30 Minuten zugedeckt",
      "(zum Beispiel mit einem Küchenhandtuch) gehen.",
      "Erhitze das Öl zum Frittieren (hier etwa 400 ml) in einem geeigneten Topf mit hohem Rand,",
      "in die die Curry Pan gut reinpassen, auf ungefähr 165–175°C. Du kannst das Öl am besten mit",
      "einem Küchenthermometer kontrollieren. Lege eins der Brötchen vorsichtig in das heiße Öl",
      "und drehe dieses mithilfe einer Zange die ganze Zeit im Kreis herum, damit alle Seiten eine",
      "gleichmäßige Bräunung erhalten. Das Frittieren dauert pro Brötchen zwischen 2–3 Minuten –",
      "warte solange, bis das Panko goldbraun ist. Lege die fertigen Kare Pan zum Abtropfen auf",
      "etwas Küchenpapier.",
      "Nach dem Frittieren die Curry Pan auf einem Rost abkühlen lassen, aber gerne frisch (leicht",
      "warm) servieren. So schmecken sie am besten! Fertig – Itadakimasu! Tipp: Sobald die Curry",
      "Pan vollständig abgekühlt sind, in einen luftdichten Behälter oder Beutel geben und bis zu 3",
      "Tage im Kühlschrank aufbewahren oder bis zu einem Monat einfrieren. Dann auftauen lassen",
      "und im Ofen bei 180ºC kurz aufbacken, bis sie außen knusprig sind"
    ],
    notes: ""
  },
  {
    title: "Dalgona Coffee",
    category: "Getränke",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/973_730/public/2022-07/dalgona_coffee_1.jpeg?h=7aacd27d&itok=TIp2meA0",
    ingredients: "2 EL lösliches Kaffeepulver\n2 EL Zucker\n2 EL heißes Wasser\n200 ml Milch\nEiswürfel",
    steps: [
      "Löslichen Kaffee, Zucker und 2 EL heißes Wasser in eine Schüssel geben und mit dem Handmixer ca. 3 Minuten aufschlagen, bis eine dickcremige, helle Masse entsteht.",
      "Milch nach Belieben erhitzen oder kalt mit Eiswürfel in ein Glas füllen. Die Kaffeecreme darauf geben und servieren."
    ],
    notes: ""
  },
  {
    title: "Einfache Zucchini-Kartoffel-Pfanne",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/zucchini-kartoffel-pfanne-mit-feta,id=0d030a95,b=lecker,w=795,ca=17.20,24.00,83.00,89.87,rm=sk.webp",
    ingredients: "1 kg Kartoffeln\nSalz\n3 mittelgroße Zucchini\n1 mittelgroße Zwiebel\n1 Knoblauchzehe\n3 Zweige Thymian\n2 Zweige Rosmarin\n4 EL Öl\nPfeffer\nEvtl. Feta zum Bestreuen",
    steps: [
      "Kartoffeln gründlich waschen und im kochenden Salzwasser ca. 20 Minuten gar kochen. Inzwischen Zucchini waschen, putzen, längs halbieren und in ca. 2 cm große Stücke schneiden. Zwiebel und Knoblauch schälen und würfeln bzw. fein hacken. Kräuter waschen, trocken schütteln, Blättchen bzw. Nadeln von den Stielen zupfen und fein hacken.",
      "Kartoffeln abgießen, ca. 5 Minuten auskühlen lassen und pellen. Kartoffeln in ca. 1 cm dicke Scheiben schneiden. 2-3 EL Öl in einer großen Pfanne erhitzen. Kartoffelscheiben darin rundherum knusprig anbraten, herausnehmen und auf Küchenpapier legen.",
      "Rest Öl in die noch heiße Pfanne geben. Zwiebeln, Zucchini und Knoblauch darin unter Wenden ca. 5 Minuten braten. Kartoffeln und Kräuter zugeben und für ca. 1 Minute mitbraten. Kräftig mit Salz und Pfeffer abschmecken und servieren."
    ],
    notes: ""
  },
  {
    title: "Erdbeer-Basilikum-Bowle",
    category: "Getränke",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/erdbeer-basilikum-bowle-f7248502-kochen-und-geniessen-06-2024,id=c702d4ef,b=lecker,w=795,rm=sk.webp",
    ingredients: "4 Stiele Basilikum\n500 g Erdbeeren\n50 g Zucker\nSaft von ½ Zitrone\n1 ½ l Prosecco\n500 ml Mineralwasser\nEiswürfel",
    steps: [
      "4 Stiele ­Basilikum waschen. 500 g Erdbeeren waschen, grob würfeln. Mit 50 g Zucker, Saft von 1/2 Zitrone, 500 ml Prosecco und 3 Stielen Basilikum mischen. Ca. 1 Stunde kühlen.",
      "Basilikumstiele entfernen. Bowle kurz vorm Servieren mit 500 ml Mineralwasser mit Kohlensäure und 1 l Prosecco (beides gut gekühlt) auffüllen. Vom übrigen Basilikumstiel Blättchen abzupfen, zugeben. Bowle auf Eiswürfeln servieren."
    ],
    notes: ""
  },
  {
    title: "Erdbeer-Pudding mit Blutorange",
    category: "Desserts",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/erdbeer-pudding-mit-blutorange-,id=b623be38,b=lecker,w=795,ca=29.80,34.09,96.80,67.51,rm=sk.webp",
    ingredients: "250 g TK-Erdbeeren\n300 ml Milch\n2 Eigelbe (Gr. M)\n30 g Zucker\n1 Pck. Vanillezucker\n40 g Speisestärke\n400 g Schlagsahne\n1 Prise Salz\n4 EL Haselnussblättchen\n1 Blutorange\nca. 25 g gefriergetrocknete Erdbeeren\n1 TL Puderzucker\nca. 1 EL Mohn",
    steps: [
      "Gefrorene Erdbeeren auftauen lassen. In einem hohen Rühr­becher mit dem Stabmixer fein pürieren.",
      "5 EL Milch mit Eigelb, Zucker, Vanillezucker und Stärke verrühren. Rest Milch, 200 g Sahne und Salz in einem Topf auf­kochen. Stärke-Mischung unter Rühren zugeben und ca. 2 Minuten köcheln, bis der Pudding andickt. Etwas abkühlen lassen, Erdbeerpüree unterrühren. In 4 Dessertschalen (à ca. 250 ml) füllen und abkühlen lassen. Puddinge im Kühlschrank auskühlen lassen. Nussblättchen in einer Pfanne ohne Fett rösten. Herausnehmen und auskühlen lassen. Blutorange so schälen, dass die weiße Haut entfernt wird. Filets zwischen den Trennhäuten he­rausschneiden. Gefriergetrocknete Erdbeeren zerbröseln, mit den Nüssen mischen.",
      "Nussblättchen in einer Pfanne ohne Fett rösten. Herausnehmen und auskühlen lassen. Blutorange so schälen, dass die weiße Haut entfernt wird. Filets zwischen den Trennhäuten he­rausschneiden. Gefriergetrocknete Erdbeeren zerbröseln, mit den Nüssen mischen.",
      "Zum Servieren 200 g Sahne mit Puderzucker steif schlagen. In einen Spritzbeutel mit Stern­tülle füllen und spiralförmig auf die Puddinge spitzen. Mit Mohn bestreuen. Orangenspalten und Nuss-Erdbeer-Mix jeweils ­daneben verteilen."
    ],
    notes: ""
  },
  {
    title: "Erdbeer-Sahne-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/erdbeer-sahne-torte,id=fbe2a304,b=lecker,w=795,rm=sk.webp",
    ingredients: "Für die Biskuitböden:\n\n3 Eier (Gr. M)\nSalz\n100 g Zucker\n1 Pck. Vanillezucker\n75 g Mehl\n25 g Speisestärke\n2 TL Backpulver\n100 g gemahlene Mandeln\n4 EL Amaretto (alternativ Orangensaft)\n\nFür die Erdbeercreme:\n\n8 Blatt weiße Gelatine\n500 g Erdbeeren\n75 g Zucker\n1 Pck. Vanillezucker\n2 EL Zitronensaft\n500 g Schlagsahne\n\nFür die Deko:\n\n400 g Schlagsahne\n2 Pck. Vanillezucker\n400 g Erdbeeren",
    steps: [
      "Für die Biskuitböden Springform (26 cm Ø) am Boden fetten. Eier trennen. Eiweiß, 3 EL kaltes Wasser und 1 Prise Salz steif schlagen, dabei 100 g Zucker und 1 Pck. Vanillezucker einrieseln lassen. Eigelb einzeln darunterschlagen.",
      "Mehl, Stärke und Backpulver daraufsieben. Mandeln zufügen und alles unter die Eischaummasse heben. In die Form streichen. Im vorgeheizten Ofen (Ober-/Unterhitze: 175°C/Umluft: 150°C) ca. 30 Minuten backen. Auskühlen lassen.",
      "Tortenboden waagerecht so durchschneiden, sodass der untere Boden dicker als der obere ist. Tortenring um den unteren Boden schließen. Beide Böden mit Amaretto beträufeln.",
      "Für die Erdbeercreme Gelatine in kaltem Wasser einweichen. Erdbeeren waschen, putzen. 500 g Erdbeeren, 75 g Zucker und 1 Pck. Vanillezucker pürieren. Gelatine ausdrücken und bei schwacher Hitze auflösen. Zitronensaft und 2 EL Püree löffelweise unterrühren, dann unters übrige Püree rühren. Ca. 10 Minuten kalt stellen, bis es zu gelieren beginnt. 500 g Sahne steif schlagen, Püree portionsweise unterheben.Für die Erdbeercreme Gelatine in kaltem Wasser einweichen. Erdbeeren waschen, putzen. 500 g Erdbeeren, 75 g Zucker und 1 Pck. Vanillezucker pürieren. Gelatine ausdrücken und bei schwacher Hitze auflösen. Zitronensaft und 2 EL Püree löffelweise unterrühren, dann unters übrige Püree rühren. Ca. 10 Minuten kalt stellen, bis es zu gelieren beginnt. 500 g Sahne steif schlagen, Püree portionsweise unterheben.",
      "Eine dünne Schicht Erdbeersahne auf den unteren Tortenboden streichen. Rest geputzte Erdbeeren hochkant daraufstellen. Rest Erdbeersahne in die Zwischenräume geben und zum Schluss glatt streichen. 2. Tortenboden darauflegen. Torte über Nacht kalt stellen.",
      "Für die Deko Tortenring entfernen. 400 g Schlagsahne steif schlagen, dabei 2 Pck. Vanillezucker einrieseln. Torte wellig damit einstreichen, dabei auch den Tortenrand dick bestreichen, damit die Beeren gut daran haften können. 400 g Erdbeeren waschen, putzen, halbieren. Erdbeer-Sahne-Torte rundherum damit verzieren."
    ],
    notes: ""
  },
  {
    title: "Espresso-Martini",
    category: "Getränke",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/espresso-martini-b,id=e1c815be,b=lecker,w=795,rm=sk.webp",
    ingredients: "3 cl Kaffeelikör (z. B. Kahlúa oder selbstgemacht, siehe unten)\n4 cl Wodka\n3 cl abgekühlter Espresso\n½ cl Zuckersirup\n3 Espressobohnen oder geraspelte Schokolade zum Garnieren\n3 Eiswürfel",
    steps: [
      "Martiniglas oder Cocktailschale kalt stellen. Eiswürfel in einen Cocktailshaker geben. Kaffeelikör, Wodka , Espresso und Zuckersirup dazu gießen und ca. 20 Sekunden kräftig shaken, damit der Schaum entsteht.",
      "Espresso-Martini in das Glas abseihen und mit Espressobohnen oder fein geraspelter Schokolade garnieren."
    ],
    notes: ""
  },
  {
    title: "Fantakuchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.malteskitchen.de/wp-content/uploads/2023/08/fantakuchen-00-1440x680.jpg",
    ingredients: "3 Tassen Mehl\n1 Pck. Backpulver\n1 ½ Tassen Zucker\n1 Pck. Vanillezucker\n1 Prise Salz\n5 Eier (Gr. M)\n1 Tasse Öl\n1 Tasse + etwas Orangenlimonade\n1 Pck. (250 g) Puderzucker\nbunte Zuckerstreusel, Schokolinsen oder Gummibärchen zum Verzieren",
    steps: [
      "Mehl, Backpulver, Zucker, Vanillezucker und Salz in einer Schüssel gründlich vermengen. Eier und Öl hinzugeben und mit den Schneebesen des Handmixers unterrühren. Limonade dazugeben und zu einem glatten Teig verrühren.",
      "Ein tiefes Backblech (40 cm x 25 cm x 5 cm) mit Backpapier auslegen. Teig daraufgeben und glattstreichen. Im vorgeheizten Backofen (E-Herd: 180 °C/Umluft: 160 °C) auf mittlerer Schiene ca. 20 Minuten backen, bis der Kuchen goldgelb ist. Aus dem Ofen nehmen und auf einem Kuchengitter vollständig abkühlen lassen.Ein tiefes Backblech (40 cm x 25 cm x 5 cm) mit Backpapier auslegen. Teig daraufgeben und glattstreichen. Im vorgeheizten Backofen (E-Herd: 180 °C/Umluft: 160 °C) auf mittlerer Schiene ca. 20 Minuten backen, bis der Kuchen goldgelb ist. Aus dem Ofen nehmen und auf einem Kuchengitter vollständig abkühlen lassen.",
      "Für den Zuckerguss Puderzucker mit 4-5 EL Limonade zu einem geschmeidigen Guss verrühren und gleichmäßig auf den Kuchen verstreichen. Sofort mit bunten Zuckerstreuseln, Schokolinsen oder Gummibärchen verzieren."
    ],
    notes: ""
  },
  {
    title: "Feierabend-Hähnchen",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/hof104723906-feierabend-hahnchen,id=a948f41b,b=lecker,w=795,ca=11.60,22.68,95.40,73.90,rm=sk.webp",
    ingredients: "4 Hähnchenfilets (à ca. 150 g)\nSalz\nPfeffer\n1-2 EL Öl\n1 EL Butter\n1 Zwiebel\n1 Knoblauchzehe\n1 TL geräuchertes Paprikapulver\n350 g Hühnerbrühe\n200 g Schlagsahne\n100 g getrocknete Softtomaten\n300 g (roh) Nudeln (z. B. Tagliatelle)\n300 g Brokkolini",
    steps: [
      "Hähnchenfilets trocken tupfen. Mit Salz und Pfeffer würzen. Öl und Butter in einer tiefen Pfanne oder einem flachem Bräter erhitzen. Hähnchenfilets darin pro Seite 3–4 Minuten braten.",
      "Zwiebel und Knoblauch schälen und fein würfeln. Hähnchen aus der Pfanne nehmen. Zwiebel und Knoblauch im heißen Bratfett ca. 1 Minute dünsten. Paprikapulver darüberstäuben und kurz anschwitzen. Brühe und Sahne unter Rühren angießen und aufkochen. Softtomaten klein schneiden. Mit dem Hähnchen in die Soße geben. Alles ca. 10 Minuten köcheln.",
      "Nudeln in kochendem Salzwasser nach Packungsanweisung garen. ­Brokkolini waschen, ca. 3 Minuten vor Ende der Garzeit zu den Nudeln geben und mitgaren. Nudeln samt Brokkolini abgießen. Brokkolini zum Hähnchen geben und darin erhitzen. Petersilie waschen und hacken. Hähnchen mit Soße und Nudeln anrichten. Hähnchenpfanne mit Petersilie bestreuen."
    ],
    notes: ""
  },
  {
    title: "Fruchtiger Eierlikör-Cocktail",
    category: "Getränke",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/fruchtiger-eierlikoer-cocktail-f11122203,id=81587823,b=lecker,w=795,rm=sk.webp",
    ingredients: "100 g Himbeeren\n2 TL brauner Zucker\n4 TL Rum\n200 ml Orangensaft\n150 ml Ananassaft\n200 ml Eierlikör\n12 Eiswürfel",
    steps: [
      "Himbeeren waschen, verlesen und ca. die Hälfte mit dem Zucker auf 4 Gläser verteilen. Mit je 1 TL Rum beträufeln und die Beeren mit einer Gabel grob zerdrücken.",
      "Eiswürfel auf die Gläser verteilen. Säfte und Eierlikör zugießen, umrühren und mit restlichen Himbeeren verzieren."
    ],
    notes: ""
  },
  {
    title: "Gyros-Chili One-Pot",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/f11147403-gyros-chili-aus-4-mach-1,id=9a2ff7d9,b=lecker,w=795,ca=6.80,47.38,78.80,87.86,rm=sk.webp",
    ingredients: "2 Zwiebeln\n2 Knoblauchzehen\n2 Dosen Texas-Mix (à 425 ml; rote Bohnen, Mais, Paprika)\n2 EL Öl\n500 g gewürztes Gyrosfleisch (Fleischtheke oder Kühlregal)\n1 EL Tomatenmark\n1 Dose (425 ml)stückige Tomaten\nSalz\nPfeffer\nca. 1 TL Chiliflocken\n150 g Crème fraîche\nPetersilie zum Garnieren",
    steps: [
      "Zwiebeln und Knoblauch schälen, fein hacken. Texas-Mix kalt abspülen. Öl in einem Bräter erhitzen. Fleisch darin ca. 5 ­Minuten anbraten. Zwiebeln und Knoblauch kurz mitbraten. ­Tomatenmark unterrühren. Die stückigen Tomaten zugeben, aufkochen. Bohnen-Mix zufügen und ca. 5 Minuten köcheln.",
      "Gyros-Chili mit Salz, Pfeffer und Chiliflocken abschmecken. Zum Servieren je 1 Klecks Crème fraîche daraufgeben. Mit Chiliflocken und Petersilie bestreuen."
    ],
    notes: ""
  },
  {
    title: "Himbeer-Baiser-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.edeka.de/uploads/rezepte/rez_edeka-himbeer-baiser-torte-rezept-e-h.jpg?cwidth=720&cheight=405&x=360&y=202",
    ingredients: "1 Packung Beerenfrüchte\n4 Eier (Gr. M)\n125 g Butter oder Margarine\n1 Prise Salz\n3 Pck. Vanillin-Zucker\n325 g Zucker\n150 g Mehl\n1 Pck. Safran-Backpulver\n5 EL Milch\n100 g Mandelblättchen\n1 Pck. Sahnefestiger\n400 g Schlagsahne\n250 g Schmand\n1-2 EL Puderzucker",
    steps: [
      "Früchte bei Zimmertemperatur antauen lassen. Eier trennen. Fett, Salz, 1 Päckchen Vanillin-Zucker und 125 g Zucker mit den Schneebesen des Handrührgerätes cremig rühren. Eigelbe einzeln unterrühren. Mehl und Backpulver mischen und abwechselnd mit der Milch unterrühren. Ca. die Hälfte des Teiges in eine gefettete Springform (26 cm Ø) geben, glatt streichen",
      "2 Eiweiß mit den Schneebesen des Handrührgerätes steif schlagen, dabei 100 g Zucker einrieseln lassen. Eischnee locker auf den Teig streichen, dabei rundherum einen ca. 0,5 cm breiten Rand frei lassen. Mit 50 g Mandeln bestreuen. Im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) 20–25 Minuten backen. Herausnehmen, auf ein Kuchengitter setzen, vorsichtig aus der Form lösen und auskühlen lassen. Springform säubern, trocknen und fetten. Aus übrigem Teig und Eiweiß einen 2. Boden ebenso herstellen",
      "2 Päckchen Vanillin-Zucker und Sahnefestiger mischen. Sahne und Schmand mit den Schneebesen des Handrührgerätes steif schlagen, Zuckermischung dabei einrieseln lassen. Früchte unterheben. Einen Boden auf eine Tortenplatte setzen. Fruchtsahne darauf verteilen und zweiten Boden darauflegen. Mit Puderzucker bestäuben",
      "Wartezeit ca. 1 Stunde"
    ],
    notes: ""
  },
  {
    title: "Himbeer-Quark-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/himbeer-quark-torte,id=d8ef3db8,b=lecker,w=795,rm=sk.webp",
    ingredients: "3 Eier (Gr. M)\n270 g Zucker\n2 EL Zucker\n120 g Mehl\n½ TL Backpulver\n4 Blatt rote Gelatine\n300 g Himbeeren (frischer oder aufgetaute TK-Beeren)\n8 Blatt weiße Gelatine\n500 g Magerquark\n2 Pck. Vanillin-Zucker\n2 EL Himbeergeist\n700 g Schlagsahne",
    steps: [
      "Eier trennen. Eiweiß steif schlagen. Eigelb, 3 EL Wasser und 120 g Zucker mit den Schneebesen des Handrührgerätes cremig rühren. Eischnee auf die Eigelbmasse geben. Mehl und Backpulver darübersieben.",
      "Eiweiß und Mehlmischung vorsichtig unterheben. Teig in eine gefettete Springform (26 cm Ø) geben. Im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) 20–25 Minuten backen. Herausnehmen und auf einem Kuchengitter auskühlen lassen.",
      "Rote Gelatine in kaltem Wasser einweichen. Himbeeren verlesen, bis auf einige zum Verzieren, pürieren und durch ein Sieb streichen. Himbeerpüree mit 2 EL Zucker verrühren. Gelatine auflösen und mit dem Himbeerpüree verrühren.",
      "Weiße Gelatine in kaltem Wasser einweichen. Quark, 150 g Zucker, Vanillin-Zucker und Himbeergeist verrühren. 600 g Sahne steif schlagen. Gelatine auflösen. 5 EL der Quarkmasse einrühren, unter den übrigen Quark rühren. Sahne unterheben.Weiße Gelatine in kaltem Wasser einweichen. Quark, 150 g Zucker, Vanillin-Zucker und Himbeergeist verrühren. 600 g Sahne steif schlagen. Gelatine auflösen. 5 EL der Quarkmasse einrühren, unter den übrigen Quark rühren. Sahne unterheben.",
      "Boden vorsichtig aus der Form lösen, auf eine Tortenplatte legen und mit einem Tortenring umschließen. Ca. die Hälfte der Quarkmasse auf den Boden streichen. Etwa die Hälfte der Himbeermasse darauf verteilen und mit einer Gabel in der Quarkmasse verstrudeln. Übrige Quarkmasse daraufgeben, übrige Himbeermasse daraufgeben und wieder verstrudeln. Torte mindestens 4 Stunden kalt stellen.",
      "100 g Sahne steif schlagen, in einen Spritzbeutel mit mittlerer Sterntülle füllen. Torte vorsichtig aus dem Ring lösen, mit Sahnetuffs und übrigen Himbeeren verzieren."
    ],
    notes: ""
  },
  {
    title: "Himmelstorte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/himmelstorte,id=2daea0cf,b=lecker,w=795,ca=2.20,3.19,92.20,92.82,rm=sk.webp",
    ingredients: "190 g weiche Butter\n335 g Zucker\n6 Eier (Gr. M)\n225 g Mehl\n1 EL Backpulver\n150 g Mandelblättchen\n1 Glas Sauerkirschen (720 ml)\n½ Pck. roter Tortenguss\n2 Becher (à 250 g) Schlagsahne\n1 Pck. Vanillin-Zucker\n1 Pck. Sahnefestiger",
    steps: [
      "Für den Teig: Böden von zwei Springformen (26 cm Ø) mit Backpapier auslegen. Butter und 120 g Zucker mit den Schneebesen des Handrührgerätes schaumig schlagen. Eier trennen, Eigelbe nacheinander unterrühren. Mehl und Backpulver mischen, unter den Teig rühren. Jeweils die Hälfte des Teiges in eine Springform geben und gleichmäßig verstreichen.",
      "Für den Baiser: Eiweiße mit 225 g Zucker steif schlagen. Je die Hälfte der Masse auf den Rührteigen verteilen und mit je 75 g Mandelblättchen bestreuen. Im vorgeheizten Backofen (E-Herd: 175 °C/Umluft: 150 °C/Gas: s. Hersteller) 25–30 Minuten backen, herausnehmen und kurz abkühlen lassen. Springform jeweils am Kuchenrand lösen und Böden vollständig auf einem Kuchengitter auskühlen lassen.",
      "Für die Füllung: Kirschen abtropfen lassen und den Saft dabei auffangen. Die Hälfte des Saftes in einem Topf zum Kochen bringen, mit Tortenguss abbinden, die Kirschen wieder hinzufügen und kalt stellen. Sahne, Vanillin-Zucker und Sahnefestiger verrühren, mit den Schneebesen des Handrührgerätes steif schlagen.",
      "Himmelstorte zusammensetzen: Einen der beiden Böden auf eine Tortenplatte setzen. Eine dünne Schicht Sahne darauf geben. Mit Kirschen bedecken, die restliche Sahne darauf verteilen und den zweiten Kuchenboden daraufsetzen."
    ],
    notes: ""
  },
  {
    title: "Japanisches Curry",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://cdn.1mal1japan.de/wp-content/uploads/2020/02/Kare-Raisu-Rezeptbild.webp",
    ingredients: ["450 g Schweinefleisch", "370 g Zwiebeln", "140 g Kartoffeln", "90 g Möhren", "1 EL Öl ( Rapsöl )", "540 ml Wasser", "Curry", "5 Portionen Reis"],
    steps: [
      "Zutaten für das hausgemachte Kare Raisu bereitlegen und den Reis vorbereiten bzw. kochen (zum Rezept im Reiskocher oder im Topf).",
      "Möhren, Kartoffeln und Zwiebeln schälen und in mundgerechte Stücke schneiden. Die Möhren werden dazu in 1 cm breite Kreise geschnitten. Die Kartoffeln werden grob gewürfelt. Die Zwiebeln werden halbiert und in Spalten geschnitten.",
      "Öl in einem großen Topf erhitzen und gewürfelten Schweinegulasch hineingeben. Das Fleisch ungefähr 5 Minuten von allen Seiten kräftig anbraten.",
      "Die klein geschnittenen Zwiebeln mit zum angebratenen Fleisch in den Topf geben und für kurze Zeit (circa 1 Minute) mit anbraten.",
      "Das restliche Gemüse, also Kartoffeln und Möhren, mit in den Topf geben. Alles für weitere 5 Minuten unter gelegentlichem Umrühren kräftig anbraten.",
      "Anschließend mit Wasser übergießen und gut umrühren. Den Deckel schließen und die Hitze so weit senken, dass das Wasser im Topf leicht köchelt. Alles circa 15 Minuten garen, bis die Kartoffeln weichgekocht sind.",
      "Sobald das Gemüse gar ist, Hitze abstellen und das ausgepackte und zerkleinerte Golden Curry hinzufügen. Die Currywürfel solange unterrühren, bis sie sich aufgelöst haben",
      "Zum Schluss alles noch einmal für 5 Minuten leicht und unter Rühren aufkochen. Das fertige Curry zusammen mit dem bereits vorbereiteten Reis heiß servieren. Fertig – Itadakimasu!"
    ],
    notes: ""
  },
  {
    title: "Kalte Kräutermayonnaise",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/f5625203-vier-mal-anders-schnelle-sosen-1,id=3d03bef3,b=lecker,w=795,ca=4.80,24.00,94.80,78.08,rm=sk.webp",
    ingredients: "2 TL Kapern (Glas)\n½ Bund Schnittlauch\n6 Stiele Petersilie\n50 ml Gemüsebrühe\n2 frische Eigelbe (Gr. M)\n1-2 TL Senf\n1 Prise Zucker\n2-3 EL Zitronensaft\n8 EL Öl\nSalz\nPfeffer",
    steps: [
      "Kapern abtropfen lassen, dabei 2 TL Flüssigkeit auffangen. Kapern fein hacken. Kräuter waschen. Schnittlauch in feine Röllchen schneiden. Petersilie fein hacken.",
      "Kapern und Kapernflüssigkeit, Brühe, Eigelb, Senf, Zucker und Zitronensaft in einem hohen Rührbecher mit dem Stabmixer 1–2 Minuten pürieren. Das Öl im dünnen Stahl zugießen und dabei den Stabmixer langsam hochziehen. Kräuter unterrühren. Mayonnaise mit Salz und Pfeffer abschmecken."
    ],
    notes: ""
  },
  {
    title: "Karaage",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://image.essen-und-trinken.de/13843618/t/7L/v2/w960/r1/-/karaage.jpg",
    ingredients: "450 g Hühnchenbrust\n50 ml Sojasauce\n50 ml Mirin\n1 große Knoblauchzehe\n75 g Weizenmehl\n75 g Katakuriko\n(Kartoffelstärke)\n1 TL Salz\n1/2 TL Pfeffer\n500 ml Öl (zum Beispiel\nSonnenblumen- oder\nRapsöl)\n\nFür den Mayonnaise Dip:\n200 g Mayonnaise\n1 kleine Zwiebel\n1 TL Reisessig\n1 TL Zucker\n1/4 TL Pfeffer\n1 TL Sesam",
    steps: [
      "Zutaten für das Karaage mit Mayonnaise-Dip bereitlegen",
      "und ggf. als traditionelle Beilage für jede Portion 1 Schüssel",
      "Reis vorbereiten",
      "Als erstes die Hühnchenbrust unter fließendem Wasser",
      "abwaschen und mit einem Küchenpapier gründlich",
      "abtupfen. Dann in kleinere, mundgerechte Stücke (circa 3 –",
      "4 cm große Würfel) schneiden.",
      "Die Hühnchenwürfel in einen verschließbaren Behälter legen",
      "und mit Salz sowie Pfeffer würzen.",
      "Den Knoblauch mit dem Messerrücken leicht andrücken,",
      "anschließend die Haut entfernen und direkt in den Behälter",
      "mit dem Hühnchen fein reiben (zum Beispiel mit einer",
      "feinen Küchenreibe). Außerdem Sojasauce und Mirin",
      "hinzufügen. Alles miteinander verrühren (das Hühnchen",
      "sollte gut bedeckt sein – bei Bedarf mit Sojasauce und Mirin",
      "zu gleichen Teilen auffüllen), den Behälter schließen und das",
      "Hühnchen für 1 Stunde im Kühlschrank marinieren.",
      "In der Zwischenzeit für den leckeren Dip die Mayonnaise,",
      "klein gehackte Zwiebeln, Reisessig, Zucker, Pfeffer und",
      "Sesam in einer Schüssel mischen und bis zum Servieren",
      "ebenfalls in den Kühlschrank stellen.",
      "Nach der Marinierzeit in einer Schüssel das Weizenmehl mit",
      "der Kartoffelstärke (es funktioniert auch mit anderer Stärke,",
      "allerdings wird die Panade mit 100%iger Kartoffelstärke",
      "knuspriger) vermischen. Das Hühnchen aus dem",
      "Kühlschrank nehmen und die einzelnen Teile (leicht",
      "abgetropft) in die Mehlmischung legen. Mit den Händen das",
      "Hühnchen gut mit dem Mehl vermischen, sodass jedes Stück",
      "von der Panade ummantelt ist.",
      "In einem tieferen Topf das Öl auf 175°C erhitzen. Das Öl",
      "während des Frittierens mit einem Küchenthermometer",
      "kontrollieren, da das Öl stets zwischen 160-180°C heiß sein",
      "sollte für ein perfektes Ergebnis. Sobald das Öl die richtige Temperatur erreicht hat jeweils 6",
      "Hühnchenstücke vorsichtig in den Topf gleiten lassen und für 4 Minuten frittieren (ggf.",
      "währenddessen etwas wenden, damit alle Seite schön braun werden).",
      "Dann vorsichtig aus dem Öl heben und auf ein bereitgelegtes Küchenpapier zum Abtropfen",
      "legen. Das Frittieren solange wiederholen, bis das Hühnchen aufgebraucht ist – zwischen den",
      "Frittierrunden die Öltemperatur kontrollieren und mindestens wieder auf 160°C steigen",
      "lassen",
      "Das fertige Karaage zusammen mit dem Mayonnaise-Dip und frisch gekochtem Reis",
      "servieren. Fertig – Itadakimasu!"
    ],
    notes: ""
  },
  {
    title: "Kartoffel-Salat mit Joghurt-Dressing",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/kartoffel-salat-mit-joghurt-dressing,id=4a5d6d5f,b=lecker,w=795,rm=sk.webp",
    ingredients: "1,3 kg festkochende Kartoffeln\n125 ml Gemüsebrühe\n1 ½ EL Weißwein-Essig\nZucker\nSalz\nPfeffer\n100 g TK-Erbsen\n1 Dose (425 ml) Kidneybohnen\n1 kleine Stange Porree (Lauch)\n100 g Schinken\n1 Bund Schnittlauch\n150 g Mayonnaise\n300 g Vollmilchjoghurt",
    steps: [
      "Die Kartoffeln in Wasser ca. 20 ­Minuten garen. Abgießen, abschrecken, pellen und abkühlen lassen.",
      "Brühe aufkochen, mit Essig, Zucker und Pfeffer würzen. Kartoffeln in Scheiben schneiden, mit Brühe übergießen und ca. 30 Minuten ziehen lassen.",
      "Die Erbsen auftauen lassen. Bohnen abgießen, abspülen und abtropfen ­lassen. Porree putzen, waschen und in feine Ringe schneiden. Schinken in Würfel und den Schnittlauch in feine Röllchen schneiden.",
      "Mayonnaise und Joghurt verrühren, mit Salz, Pfeffer und Zucker würzen. Kartoffeln, Bohnen, Porree, Erbsen, Schinken, Schnittlauch und Joghurtsoße heben. Abschmecken."
    ],
    notes: ""
  },
  {
    title: "Kartoffelgratin mit Gemüse",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-i-p/rez-edeka-kartoffelauflauf-mit-gemuese-rezept-i-p.jpg?imwidth=1024&imdensity=1",
    ingredients: "500 g Kartoffeln\n3 Möhren\n1 Brokkoli\n1 Knoblauchzehe\n200 g Sahne\n200 g Crème fraîche\nSalz\nPfeffer\n½ TL getrockneter Thymian\nMuskat\nButter für die Form\n150 g geriebener Käse",
    steps: [
      "Kartoffeln und Möhren schälen, beides in feine Scheiben hobeln. Brokkoli waschen und in kleine Röschen teilen. Knoblauch schälen und fein hacken.",
      "Sahne, Crème fraîche und Knoblauch verrühren. Großzügig mit Salz, Pfeffer, Thymian und frisch geriebener Muskatnuss würzen. Gemüse in einer großen Schüssel mit der Sahne-Mischung vermengen. Eine Auflaufform (ca. 20 x 30 cm) mit Butter einfetten. Gemüse-Mix in die Form geben und gleichmäßig verteilen. Mit geriebenem Käse bestreuen.",
      "Kartoffelgratin mit Gemüse im vorgeheizten Backofen (Ober-/Unterhitze: 200 °C/Umluft: 180 °C) 45-50 Min. backen, bis die Kartoffeln gar sind. Gratin aus dem Ofen nehmen und vor dem Servieren ca. 10 Minuten ruhen lassen."
    ],
    notes: ""
  },
  {
    title: "Kartoffelsuppe",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.gaumenfreundin.de/wp-content/uploads/2025/03/Kartoffelsuppe-Rezept-1-680x453.jpg",
    ingredients: "2 Zwiebeln\n1 kg mehligkochende Kartoffeln\n4 Möhren\n400 g Knollensellerie\n1 Stange Lauch\n3 EL Öl\nSalz, Pfeffer, Rosenpaprika, geriebene Muskatnuss\n1 l Gemüsebrühe (instant)\n4 Wiener Würstchen\n4 Stiele Majoran (alternativ getrocknet)\n2 Stiele Petersilie\n2 EL Sahne",
    steps: [
      "Zwiebeln schälen und in kleine Würfel schneiden. Kartoffeln, Möhren und Sellerie schälen, waschen und in kleine Würfel schneiden. Porree putzen, waschen und in Ringe schneiden.",
      "Öl in einem Topf erhitzen und Zwiebeln darin glasig dünsten. Kartoffeln zugeben, kurz anschwitzen, mit Salz, Pfeffer und Rosenpaprika würzen und mit Gemüsebrühe ablöschen. Möhren und Sellerie dazugeben. Suppe bei mittlerer Hitze ca. 15 Minuten garen.",
      "In der Zwischenzeit Würstchen in Stücke schneiden. Majoran und Petersilie waschen, trocken schütteln, Blättchen abzupfen und fein hacken. Würstchen und Porree in die Suppe geben. Sahne und Hälfte der Kräuter dazugeben, nochmals kurz aufkochen und mit Salz, Pfeffer und Muskat abschmecken. Kartoffelsuppe mit restlichen Kräutern garnieren und servieren."
    ],
    notes: ""
  },
  {
    title: "Kernige Kohl-Hack-­Pfanne",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/f9234801-rosenkohl-hackpfanne-mit-walnussen-an-kartoffelpuree,id=fc0081c4,b=lecker,w=795,ca=2.40,16.19,98.80,42.16,rm=sk.webp",
    ingredients: "1 kg Rosenkohl\nSalz\n750 g mehligkochende Kartoffeln\n75 g Walnüsse\n75 g geräucherter, durchwachsener Speck\n500 g gemischtes Hackfleisch\nPfeffer\n150 ml körnige Brühe\n100 ml Milch\n1-2 EL Butter\nMuskat\nevtl. Kerbel oder Petersilie zum Garnieren",
    steps: [
      "Rosenkohl waschen und in kochendem Salzwasser ca. 8 Minuten vorgaren. Abgießen und abtropfen lassen. ­Kartoffeln schälen, waschen, vierteln und in Salzwasser ca. 20 Minuten kochen.",
      "Walnüsse grob hacken. Speck fein würfeln. Nüsse in einer großen Pfanne ohne Fett anrösten und herausnehmen. Speck in der Pfanne ohne Fett knusprig braten. Herausnehmen. Hack im heißen Speckfett krümelig anbraten. Mit Salz und Pfeffer würzen. Rosenkohl zugeben und ca. 5 Minuten kräftig weiterbraten. Brühe angießen, ­aufkochen und ca. 5 Minuten köcheln. Nüsse und Speck in die Pfanne geben und unterrühren. Rosenkohl-Hack-­Pfanne mit Salz und Pfeffer abschmecken.",
      "Milch und Butter erhitzen. Kartoffeln abgießen. Milch und Butter zugeben und alles zu Püree stampfen. Püree mit Salz und Muskat abschmecken. Rosenkohl-Hack-­Pfanne evtl. mit Kerbel oder Petersilie garnieren. Kartoffelpüree dazu servieren."
    ],
    notes: ""
  },
  {
    title: "Kinder-Pingui-Torte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.simply-yummy.de/files/styles/tec_frontend_large/public/images/recipes/kinder-pingui-torte.jpeg",
    ingredients: "5 Eier (Gr. M)\n180 g Zucker\n1 Prise Salz\n100 g Mehl\n2 EL Backkakao\n500 g Mascarpone\n2 EL Puderzucker\n500 ml Sahne\n200 g gezuckerte Kondensmilch\n2 Pck. Sahnesteif\n3 EL Milch\n1 EL Butter\n100 g Zartbitterschokolade\n200 g Zartbitterkuvertüre\n3 Riegel Kinder Pingui",
    steps: [
      "Für die Tortenböden Eier mit Zucker und Salz ca. 4 Minuten mit den Schneebesen des Handmixers auf höchster Stufe schlagen. Mehl und Kakao kurz unterrühren.",
      "Den Boden einer Springform (Ø 26 cm) mit Backpapier auslegen, Springformrand einspannen. Teig in die Form füllen und im vorgeheizten Backofen bei 180°C (Ober-/Unterhitze) im unteren Drittel ca. 35 Minuten backen. Biskuit direkt aus der Form lösen, vollständig auskühlen lassen.",
      "In der Zwischenzeit für die Milchcreme-Füllung Mascarpone, Puderzucker und Kondensmilch glattrühren. Sahnesteif mit Sahne steif schlagen, anschließend unter die Mascarpone-Creme heben.",
      "Für die Schokoschicht Milch und Butter in einem Topf erwärmen. Kuvertüre hacken, zugeben und darin auflösen. Beiseitestellen.",
      "Biskuit einmal waagerecht halbieren, Biskuitboden auf eine Tortenplatte setzen und einen Tortenring darumlegen.",
      "Hälfte der Milchcreme auf dem Biskuitboden verteilen. Lauwarme Schokoschicht darauf geben und mit einem Esslöffel vorsichtig verteilen. Mit der übrigen Milchcreme bedecken, zweiten Biskuitboden auflegen. Torte mind. 2 Stunden kalt stellen.",
      "Für den Guss Kuvertüre grob hacken. 150 g Schlagsahne in einem Topf aufkochen. Kuvertüre zugeben und bei niedriger Hitze schmelzen. Rest Sahne mit den Schneebesen des Handmixers steif schlagen und beiseitestellen. Kinder Pingui-Riegel in das Gefrierfach legen. Torte mit einem scharfen Messer vom Tortenrand lösen, Torte aus dem Tortenring lösen.",
      "2/3 der Schoko-Sahne-Mischung über die Torte gießen und gleichmäßig verteilen, dabei über den Rand der Torte hinauslaufen lassen. Mit übrigem Schoko-Guss den Rand einstreichen.",
      "Geschlagene Sahne in einen Spritzbeutel mit Sterntülle füllen und 12 Tuffs auf die Torte spritzen. Kinder Pingui-Riegel halbieren, Hälften jeweils diagonal in Dreiecke schneiden und mit der Schnittkante nach oben auf die Sahnetuffs setzen. Kinder-Pingui-Torte bis zum Servieren kaltstellen.Geschlagene Sahne in einen Spritzbeutel mit Sterntülle füllen und 12 Tuffs auf die Torte spritzen. Kinder Pingui-Riegel halbieren, Hälften jeweils diagonal in Dreiecke schneiden und mit der Schnittkante nach oben auf die Sahnetuffs setzen. Kinder-Pingui-Torte bis zum Servieren kaltstellen.",
      "Wartezeit: ca. 2 Stunden"
    ],
    notes: ""
  },
  {
    title: "Kirschtorte mit Streuseln",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/kirschtorte-mit-streuseln,id=c6d05a1f,b=lecker,w=795,ca=0.40,0,100.00,99.73,rm=sk.webp",
    ingredients: "375 g Mehl\n250 g Zucker\n225 g Butter\n1 Pck. Vanillin-Zucker\nSalz\n150 g Zartbitterkuvertüre\n400 g Süßkirschen\n500 g Joghurt (3,5 % Fett)\n500 g Schlagsahne\n10 Blatt Gelatine\n100 g Kirschkonfitüre",
    steps: [
      "Springform (26 cm Ø) und ein Backblech am Boden mit Backpapier auslegen. Mehl, 150 g Zucker, Butter, Vanillin-Zucker und 1 Prise Salz zu einem Streußelteig verkneten. Hälfte des Teiges auf den Boden der Sringform drücken, die andere Hälfte als große Streußel auf dem Backblech verteilen. Im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) 30–40 Minuten backen. Aus dem Ofen nehmen, Kuchenboden aus der Form lösen und auskühlen lassen.",
      "80 g Kuvertüre über einem warmen Wasserbad schmelzen. 70 g Kuvertüre hacken. Den Kuchenboden mit der flüssigen Schokolade bestreichen und kalt stellen.",
      "Kirschen waschen, halbieren und entsteinen. Joghurt, 100 g Zucker und 50 g gehackte Schokolade verrühren. Sahne mit den Schneebesen des Handrührgerätes steif schlagen. Gelatine in kaltem Wasser einweichen, Gelatine ausdrücken, vorsichtig auflösen. 2–3 EL Creme unterrühren, dann alles unter die restliche Creme rühren. Sahne und 300 g halbierte Kirschen unterheben. Tortenring um den Kuchenboden spannen, Masse auf den Boden geben, glatt streichen und für ca. 2 Stunden in den Kühlschrank stellen.",
      "Konfitüre in einem Topf erhitzen und durch ein feines Sieb streichen. 100 g halbierte Kirschen dazugeben. Streußel mit 20 g gehackter Schokolade mischen. Kuchen aus dem Kühlschrank nehmen, Streußel und die restlichen Kirschen darauf verteilen. In Stücke schneiden und servieren."
    ],
    notes: ""
  },
  {
    title: "Klassischer Gemüseeintopf",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/klassischer-gemuseeintopf,id=f9a4bea4,b=lecker,w=795,ca=7.40,0,96.60,100.00,rm=sk.webp",
    ingredients: "1 Bund (à 600–750 g) Suppengrün\n1 Tomate\n1 Bund Petersilie\n1-2 Zwiebeln\n2 Lorbeerblätter\nSalz\nPfeffer\n1 TL schwarze Pfefferkörner\n4 Gewürznelken\n600 g festkochende Kartoffeln\n500 g Möhren\n450 g Porree (Lauch)\n250 g tiefgefrorene Erbse",
    steps: [
      "Suppengrün putzen, waschen und in grobe Stücke schneiden. Tomate waschen und halbieren. Petersilienblätter abzupfen, Stiele beiseite legen. Zwiebeln waschen und halbieren. Zwiebeln ohne Fett, mit den Schnittflächen nach unten, in einem großen Topf rösten. 2 l Wasser angießen, Suppengrün, Petersilienstiele, Tomate, Lorbeerblätter, 1 TL Salz, Pfefferkörner und Gewürznelken zugeben. Aufkochen und zugedeckt ca. 30 Minuten köcheln lassen.",
      "Kartoffeln schälen, waschen und würfeln. Möhren waschen, schälen und in Scheiben schneiden. Porree putzen, waschen und in Ringe schneiden. Petersilie hacken. Gemüsebrühe durch ein Sieb gießen und in einen großen Topf geben.",
      "Brühe erneut aufkochen. Kartoffel, Möhren und Porree zufügen und zugedeckt ca. 15 Minuten garen. Ca. 3 Minuten vor Ende der Garzeit, tiefgefrorene Erbsen zufügen und mitköcheln. Petersilie, bis auf etwas zum Bestreuen in die Suppe geben und mit Salz und Pfeffer abschmecken. Mit übriger Petersilie bestreuen."
    ],
    notes: ""
  },
  {
    title: "KÄSESAHNETORTE MIT MANDARINEN",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/kasesahnetorte-mit-mandarinen,id=59d4671e,b=lecker,w=795,rm=sk.webp",
    ingredients: "3 Eier (Gr. M)\n225 g Zucker\n2 Pck. Vanillin-Zucker\n100 g Mehl\n25 g Speisestärke\n2 TL Backpulver\n1 Dose (à 175 g) Mandarin-Orangen\n8 Blatt Gelatine\n750 g Magerquark\n1 Bio-Zitrone\n400 g Schlagsahne\n4 EL Puderzucker",
    steps: [
      "Für die Biskuitböden Eier trennen. Eiweiß mit 3 Esslöffel Wasser steif schlagen, 100 g Zucker und 1 Päckchen Vanillezucker einrieseln lassen. Eigelbe nach und nach unterrühren.",
      "Mehl, Stärke und Backpulver mischen, auf die Eischaummasse sieben und unterheben. Boden einer Springform (26 cm Ø) mit Backpapier auslegen. Biskuitmasse einfüllen, glatt streichen. Im vorgeheizten Backofen bei 175 °C (Ober-/Unterhitze) 20-25 Minuten backen. Auskühlen lassen.",
      "Biskuit waagerecht halbieren, um den unteren Boden einen Springformrand oder Tortenring legen. Den oberen Tortenboden in 12 gleichgroße Tortenstücke teilen.",
      "Für die Käsesahne Mandarin-Orangen auf einem Sieb abtropfen lassen. Gelatine in kaltem Wasser einweichen. Zitrone heiß waschen, trocken tupfen. Schale abreiben, Saft auspressen. Quark, Zitronensaft und -schale, 125 g Zucker und 1 Päckchen Vanillezucker glatt rühren. Sahne steif schlagen. Gelatine ausdrücken, auflösen und mit 2 Esslöffel Quarkmasse verrühren. Unter den übrigen Quark rühren, Sahne und Mandarinen unterheben. Für die Käsesahne Mandarin-Orangen auf einem Sieb abtropfen lassen. Gelatine in kaltem Wasser einweichen. Zitrone heiß waschen, trocken tupfen. Schale abreiben, Saft auspressen. Quark, Zitronensaft und -schale, 125 g Zucker und 1 Päckchen Vanillezucker glatt rühren. Sahne steif schlagen. Gelatine ausdrücken, auflösen und mit 2 Esslöffel Quarkmasse verrühren. Unter den übrigen Quark rühren, Sahne und Mandarinen unterheben.",
      "Creme auf den unteren Boden geben und glatt streichen. Die Tortenstücke nach und nach auf der Creme im Tortenring platzieren und leicht andrücken. Mindestens 6 Stunden, besser über Nacht, kalt stellen. Torte mit einem Messer vom Formrand lösen, Tortenring entfernen. Käsesahnetorte mit Puderzucker bestäuben und servieren.",
      "Wartezeit 6 1/2 Stunden"
    ],
    notes: ""
  },
  {
    title: "Melonpan",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://asianinspirations.com.au/wp-content/uploads/2021/04/R01529-Melon-Pan-1500w-619x412.jpg",
    ingredients: "Für den Hefeteig:\n250 g Mehl (zum\nBeispiel Weizen Typ\n550)\n5 g Kartoffelstärke\n1/2 TL Salz\n4 EL Zucker\n4 g Hefe (Trockenhefe)\n100 ml Milch\n35 g Butter\n1 Ei\n\nFür den Biskuitteig:\n60 g Butter (bei\nZimmertemperatur)\n100 g Zucker\n1 Ei\n200 g Mehl (zum\nBeispiel Weizen Typ\n550)\n5 g Kartoffelstärke\n1/2 TL Backpulver\n\nFür das Topping:\n4 EL Zucker",
    steps: [
      "Zutaten für die selbstgemachte Melonpan bereitlegen.",
      "Zu Beginn kümmern wir uns um den Hefeteig: Dazu die",
      "Milch in einen kleinen Topf füllen und die Butter hinzufügen.",
      "Beides langsam erwärmen und sobald die Butter.",
      "geschmolzen ist, vom Herd nehmen. Kurz abkühlen lassen",
      "Währenddessen in eine große Schüssel weiterhin für den",
      "Hefeteig Mehl, Kartoffelstärke, Zucker, Salz, Trockenhefe",
      "geben und mit einem Löffel miteinander vermischen.",
      "Anschließend das Ei in die Milch-Butter-Mischung",
      "hineinschlagen, miteinander verquirlen und mit in die",
      "Schüssel zu den trockenen Zutaten geben.",
      "Alles zuerst mit dem Löffel vermischen, dann mit den",
      "Händen in der Schüssel und anschließend auf einer",
      "sauberen Arbeitsfläche sorgfältig und kräftig kneten, sodass",
      "ein geschmeidiger Hefeteig entsteht (circa 5 Minuten kräftig",
      "mit den Handballen kneten). Falls der Teig an den",
      "Handflächen kleben bleiben sollte, nach und nach Mehl mit",
      "einkneten.",
      "Den Teig zu einer Kugel formen und in der Schüssel circa 1",
      "Stunde, oder bis er zur doppelten Größe aufgegangen ist,",
      "mit einem leicht feuchten Handtuch zugedeckt an einem",
      "warmen Ort gehen lassen.",
      "In der Zwischenzeit den Biskuitteig zubereiten: Dazu in einer",
      "Schüssel die weiche Butter mit dem Zucker mithilfe eines",
      "Mixers vermischen. Anschließend das Ei hineinschlagen und",
      "untermixen, sodass die Masse cremig wird.",
      "Jetzt für den Biskuitteig Mehl, Kartoffelstärke und",
      "Backpulver (ggf. durch ein Sieb) hinzufügen. Den Teig",
      "wiederum mit den Händen solange kneten bis daraus ein",
      "geschmeidiger Ball geformt werden kann (circa 3 Minuten",
      "mit den Handballen kneten).",
      "Mit den Händen den Biskuitteig auf der Arbeitsfläche zu einem länglichen Zylinder rollen und",
      "in 10 gleichgroße Stücke teilen.",
      "Die Teigstücke jeweils zwischen den Handflächen zu Kugeln formen, auf einen Teller legen",
      "und in den Kühlschrank stellen.",
      "Zurück zum Hefeteig: Sobald der Hefeteig die doppelte Größe erreicht hat, diesen aus der",
      "Schüssel heben und kurz durchkneten.",
      "Auch diesen Teig jetzt in 10 gleichgroße Stücke schneiden und zu gleichmäßigen Kugeln",
      "formen. Dazu am besten zwischen den Handflächen rundformen und dann auf der",
      "Arbeitsfläche glätten. Auf ein mit Backpapier ausgelegtes Blech mit ausreichend Abstand",
      "zueinander setzen.",
      "Nun eine Schüssel mit dem Zucker für das Topping bereitstellen. Den Biskuitteig aus dem",
      "Kühlschrank holen. Eine Biskuitteigkugel auf der sauberen Arbeitsfläche mit etwas",
      "Frischhaltefolie abdecken, dann mit der Handfläche leicht platt drücken und anschließend",
      "mit einem Nudelholz zu einem Kreis (Durchmesser circa 10 Zentimeter) ausrollen. Die Folie",
      "entfernen und zur Seite legen.",
      "Anschließend den ausgerollten Biskuitteig um eine Hefeteigkugel legen: Dazu den Biskuitteig",
      "in die flache Hand legen und in die Mitte den Hefeteig setzen. Jetzt den Biskuitteig sorgfältig",
      "um den Hefeteig streichen – der Biskuitteig muss NICHT vollständig herumgestrichen",
      "werden.",
      "Die geformten Kugeln mit dem Biskuitteig voran in den vorbereiteten Zucker tauchen und auf",
      "das Blech zurücklegen (Zuckerseite nach oben). Alle 10 Melonpan auf diese Art und Weise",
      "zusammenfügen.",
      "Die Oberfläche jedes Melonpan mit einem Messer vorsichtig als Gittermuster einschneiden.",
      "Dabei den Biskuitteig nicht durchschneiden, sondern nur leicht einritzen.",
      "Die Melonpan für weitere 30 Minuten an einem warmen Ort zugedeckt gehen lassen.",
      "Währendessen den Ofen auf 180°C (Umluft) vorheizen.",
      "Die Melonpan nach der Ruhezeit in den Ofen schieben und für 13 – 15 Minuten backen",
      "lassen, sodass der Biskuitteig leicht gebräunt ist.",
      "Nach dem Backen die Melonpan auf einem Rost abkühlen lassen, aber gerne frisch (leicht",
      "warm) servieren. So schmecken sie am besten! Fertig – Itadakimasu!",
      "Tipp: Sobald die Melonpan vollständig abgekühlt sind, in einen luftdichten Behälter oder",
      "Beutel geben und bis zu 3 Tage im Kühlschrank aufbewahren oder bis zu einem Monat",
      "einfrieren. Dann auftauen lassen und im Ofen bei 180ºC kurz aufbacken, bis sie außen",
      "knusprig sind."
    ],
    notes: ""
  },
  {
    title: "Muffins mit Schokostückchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.oma-kocht.de/wp-content/uploads/2020/09/muffins-schokostueckchen-1.jpg.webp",
    ingredients: "4 Eier (Gr. M)\n250 g weiche Butter\n200 g Zucker\n1 Pck. Vanillezucker\n1 Prise Salz\n120 ml Milch\n300 g Mehl\n1 Pck. Backpulver\n200 g Schokotropfen",
    steps: [
      "Eier schaumig rühren. Butter, Zucker, Vanillezucker und Salz dazugeben und mit den Schneebesen des Handmixers cremig rühren. Milch hinzugeben, verrühren.",
      "In einer Schüssel Mehl und Backpulver vermischen, zügig unter die Ei-Butter-Masse rühren, bis ein glatter Teig entsteht. Schokotropfen, bis auf ca. 20 g zum Bestreuen, unter den Teig rühren.",
      "Die Mulden eines Muffinblechs mit Papierförmchen auslegen. Mit einem Esslöffel den Teig gleichmäßig in die Muffinförmchen geben und mit restlichen Schokotröpfen bestreuen.",
      "Muffins im vorgeheizten Backofen bei 200 °C (Ober-/Unterhitze) für 15 Minuten backen. Muffins aus dem Ofen nehmen, aus dem Muffinblech lösen und auf einem Kuchengitter auskühlen lassen."
    ],
    notes: ""
  },
  {
    title: "Nudelsalat mit Fleischwurst",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://www.malteskitchen.de/wp-content/uploads/2024/09/nudelsalat-fleischwurst-9-1440x680.webp",
    ingredients: "Für den Nudelsalat:\n\n500 g Nudeln (z. B. Spirelli)\nSalz\n200 g TK-Erbsen\n200 g Fleischwurst\n1 Dose Mais\n6 kleine Gewürzgurken (oder Cornichons)\n1 rote Paprika\n\nFür die Salatsoße:\n\n250 g Mayonnaise\n1 EL Senf\n3-4 EL Gurkenwasser\nSalz\nPfeffer\nfrische Petersilie nach Belieben",
    steps: [
      "Nudeln nach Packungsanweisung in gesalzenem Wasser kochen, während der letzten 2-3 Minuten Kochzeit Erbsen zugeben und mit garen. Nudeln abgießen und auskühlen lassen.",
      "In der Zwischenzeit Fleischwurst, Gewürzgurken und Paprika in kleine Würfel schneiden. Mais abgießen und abtropfen lassen. Alle Zutaten mit den Nudeln in eine große Schüssel geben.",
      "Für die Salatsoße Mayonnaise, Senf und Gurkenwasser in eine Schale geben und glattrühren. Mit Salz und Pfeffer würzen.",
      "Soße zu den Nudeln geben und unterheben, bis alle Zutaten gleichmäßig vermengt sind. Nudelsalat bis zum Servieren im Kühlschrank durchziehen lassen. Vor dem Servieren ggf. nochmal mit Salz und Pfeffer abschmecken. Nudelsalat nach Belieben mit frischer gehackter Petersilie bestreuen."
    ],
    notes: ""
  },
  {
    title: "Omas Käsekuchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/kasekuchen-a-la-oma,id=1438b71b,b=lecker,w=795,rm=sk.webp",
    ingredients: "200 g Mehl\n75 g Puderzucker\nSalz\n200 g Butter\n7 Eier (Gr. M)\n1 kg Magerquark\n250 g Zucker\n1 Pck. Vanillepuddingpulver (zum Kochen)\n1 Bio-Zitrone",
    steps: [
      "Für den Mürbeteig Mehl, Puderzucker, 1 Prise Salz, 1 Ei und 100 g Butter in Stückchen zunächst mit den Knethaken des ­Handmixers, dann mit den Händen glatt ver­kneten. Springform (26 cm Ø) fetten, Teig hineingeben und zu einem flachen Boden drücken, dabei Teig am Formrand ca. 3 cm hochdrücken. 30 Minuten kalt stellen.",
      "Für die Käsemasse 100 g Butter schmelzen und etwas abkühlen lassen. 6 Eier trennen. Eiweiß und 1 Prise Salz steif schlagen. Zitrone heiß waschen, trockenreiben und halbieren. Zitronenschale einer halben Zitrone fein abreiben (Rest anderweitig verwenden). Quark, Eigelb, ­Zucker, Puddingpulver und Zitronenschale glatt rühren. Flüssige Butter unterrühren. Eischnee portionsweise unter die Quarkcreme heben.",
      "Quarkmasse auf dem Mürbeteig verteilen. Käsekuchen im vorgeheizten Ofen (E-Herd: 175 °C/Umluft: 150 °C) auf der unteren Schiene ca. 1 Stunde backen. Damit der Käsekuchen nicht reißt, nach ca. 30 Minuten mit einem scharfen Messer zwischen Quarkmasse und Teigrand ca. 3 cm tief entlangschneiden, dann Kuchen zu Ende backen. Kuchen zunächst im ausgeschalteten Ofen ca. 30 Minuten ruhen lassen, dann herausnehmen und auskühlen lassen. Dazu schmeckt Schlagsahne.",
      "Omas Tipps zum Käsekuchen-Rezept: Besonders gut schmeckt der Kuchen, wenn du ihn nach dem Abkühlen über Nacht im Kühlschrank durchziehen lässt. Du magst es fruchtig-herb? Dann 200 g Wildpreiselbeeren (Glas) glatt rühren und vor dem Backen auf den Mürbeteig streichen. Die Quarkmasse anschließend besonders vorsichtig darauf verteilen. Den Käsekuchen kannst du übrigens gut stückweise einfrieren. Dafür die gekühlten Stücke mit Backpapier voneinander trennen, um sie später gut einzeln entnehmen zu können, in eine Gefrierdose geben und einfrieren. So hält sich der Kuchen mindestens 1 Monat."
    ],
    notes: ""
  },
  {
    title: "Rasanter Salat mit Ei und Feta",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/rasanter-salat-mit-ei-und-feta,id=4dba2952,b=lecker,w=795,rm=sk.webp",
    ingredients: "4 Eier (Gr. M)\n100 g Salatmix\n250 g bunte Kirschtomaten\n½ Salatgurke\n1 rote Paprika\n1 rote Zwiebel\n5 Stiel Kerbel\n4 EL Essig\nSalz\nPfeffer\n3 EL Olivenöl\n75 g schwarze Oliven\n150 g Feta",
    steps: [
      "Eier ca. 8 Minuten hart kochen, abschrecken, schälen. Salat verlesen, waschen und trocken schleudern. Tomaten und Gurke waschen. Tomaten halbieren. Gurke in Stifte schneiden. Paprika putzen, waschen und in Streifen schneiden. Zwiebel schälen und in Ringe schneiden. Kerbel waschen, trocken schütteln und die Blättchen abzupfen.",
      "Essig, Salz und Pfeffer verrühren. Öl darunterschlagen. Vorbereitete Salatzutaten, Oliven und Vinaigrette mischen. Feta darüberbröckeln und kurz unterheben. Eier in Spalten schneiden auf dem Salat anrichten."
    ],
    notes: ""
  },
  {
    title: "Russischer Zupfkuchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/russischer-zupfkuchen,id=583367ee,b=lecker,w=795,ca=16.20,26.57,81.60,100.00,rm=sk.webp",
    ingredients: "300 g Mehl \n450 g Zucker\n2 Pck. Vanillezucker\n30 g Kakao\n2 gestr. TL Backpulver\n1 Prise Salz\n550 g Butter + etwas zum Einfetten\n6 Eier (Gr. M)\n1 kg Magerquark\n1 Pck. Vanillepuddingpulver\nevtl. Puderzucker zum Bestäuben",
    steps: [
      "Mehl, 150 g Zucker, 1 Pck. Vanillezucker, Kakao, Backpulver und Salz in einer Schüssel mischen. 150 g Butter in kleinen Stückchen, 1 Ei und 3 EL kaltes Wasser zufügen und zu einem glatten Mürbeteig verkneten. In Folie wickeln und ca. 30 Minuten kalt stellen.",
      "400 g Butter in einem Topf schmelzen. Quark, 300 g Zucker, 1 Pck. Vanillezucker, 5 Eier und Puddingpulver zu einer glatten Creme verrühren. Geschmolzene Butter zum Schluss gut unterrühren.",
      "Einen großen Bogen Backpapier leicht mit Mehl bestäuben. 600 g Teig auf dem Backpapier zu einem Kreis von ca. 38 cm Ø ausrollen. Eine gefettete Springform (26 cm Ø) mit dem Teig auslegen und an den Formrand drücken. Überstehenden Teig gleichmäßig, bis auf einen 4–5 cm hohen Rand, rundherum abschneiden.",
      "Quarkmasse in die Form geben und glatt streichen. Teigabschnitte mit den restlichen Teig zusammenkneten, in Stücke zupfen und flach drücken. Teig auf die Creme legen und im vorgeheizten Backofen, unterste Schiene (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) ca. 1 1/4 backen.",
      "Zupfkuchen nach 45–60 Minuten mit Pergamentpapier zudecken. 5–10 Minuten im ausgeschaltetem Backofen ruhen lassen. Dann in der Form, auf einem Kuchengitter auskühlen lassen. Russischen Zupfkuchen aus der Form lösen, auf eine Tortenplatte heben und nach Belieben mit Puderzucker bestäuben."
    ],
    notes: ""
  },
  {
    title: "Sarti Spritz",
    category: "Getränke",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/sarti-spritz-b,id=bc10f4c0,b=lecker,w=795,rm=sk.webp",
    ingredients: "1 Bio-Limette oder Blutorange\n60 ml Sarti Rosa (siehe unten)\n90 ml Prosecco\n10 ml Soda- oder Mineralwasser\nEiswürfel",
    steps: [
      "Limette heiß abspülen, trocken reiben und in Scheiben schneiden. Ein großes Weinglas mit Eiswürfeln füllen. Sarti Rosa angießen, mit Prosecco und einem Schuss Sodawasser auffüllen. Sarti Spritz mit einer Limettenscheibe garnieren."
    ],
    notes: ""
  },
  {
    title: "Schneewittchen-Kuchen",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/schneewittchen-kuchen,id=702784fc,b=lecker,w=795,rm=sk.webp",
    ingredients: "2 Pck. Vanille-­Puddingpulver\n100 g Zucker\n+ 250 g Zucker\n800 ml Milch\n+ 8 EL Milch\n1 Glas (720 ml) Kirschen\n300 g weiche Butter + etwas zum Einfetten\n+ 300 g weiche Butter\n1 Pck. Vanillezucker\n5 Eier (Gr. M)\n300 g Mehl + etwas zum Bestäuben\n4 gestr. TL Backpulver\n3 TL Kakao\n300 g Zartbitterkuvertüre\n25 g weißes Kokosfett (z. B. Palmin)",
    steps: [
      "Für die Creme Puddingpulver, 100 g Zucker und 100 ml Milch glatt rühren. 700 ml Milch auf­kochen und vom Herd ziehen. Puddingpulver einrühren und auf dem Herd unter Rühren 1 Mi­nute köcheln. In eine Schüssel füllen und abdecken, dabei die Folie direkt auf die Oberfläche legen.Bei Zimmertemperatur auskühlen lassen.",
      "Bei Zimmertemperatur auskühlen lassen.",
      "Kirschen gut abtropfen lassen. Eine Fettpfanne (tiefes Backblech; ca. 32 x 39 cm) fetten und mit Mehl ausstäuben. Back­ofen vorheizen (E-Herd: 175°C/Umluft: 150°C/Gas: Stufe 2). 300 g Butter, 250 g Zucker und Vanillezucker mit den Schneebesen des Rührgeräts cremig rühren.",
      "Eier einzeln unterrühren. Mehl und Backpulver mischen und abwechselnd mit 5 EL Milch unterrühren.",
      "Hälfte Teig auf die Fettpfanne streichen. Unter die andere Hälfte Kakao und 3 EL Milch rühren, auf den hellen Teig streichen. Die Kirschen gleichmäßig darauf verteilen. Im heißen Ofen ca. 25 Minuten backen.",
      "Auskühlen lassen.",
      "300 g Butter mit den Schnee-besen des Rührgeräts 4–5 Minuten weißcremig aufschlagen. Pudding glatt rühren und löffelweise unter die Butter rühren (Butter und Pudding müssen die gleiche Temperatur haben, damit sie sich gut verbinden).",
      "Die Buttercreme auf den Kuchen streichen und an einem kühlen Ort mind. 3 Stunden fest werden lassen.",
      "Kuvertüre und Kokosfett grob hacken, im heißen Wasserbad schmelzen. Die Kuvertüre ca. 15 Minuten abkühlen lassen – sie muss noch streichfähig sein! Dann zügig auf den Kuchen streichen und evtl. etwas trocknen lassen.",
      "Evtl. mit ei­nem Tortenkamm wellenartige Streifen durch die Kuvertüre ziehen. Mind. 1 Stunde kühl stellen, bis die Kuvertüre fest ist."
    ],
    notes: ""
  },
  {
    title: "Schoko-Karamell-Eistorte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/schoko-karamell-eistorte-f9695001,id=ad8c86fb,b=lecker,w=795,rm=sk.webp",
    ingredients: "150 g Zartbitterschokolade\n250 g weiche Butter\n400 g Zucker\n4 Eier (Gr. M)\n150 g Mehl\n100 g Kakaopulver\n2 TL Backpulver\n800 g Creme double (ersatzweise Schlagsahne)\n300 g gezuckerte Kondensmilch\n100 g Schokoladentröpfchen",
    steps: [
      "Eine Springform (24 cm Ø) fetten. 100 g Schokolade hacken. Butter mit den Schneebesen des Handrührgerätes cremig aufschlagen. 250 g Zucker dabei einrieseln lassen. Eier nach und nach zufügen. Mehl, Kakao und Backpulver mischen, kurz unterrühren. Gehackte Schokolade zufügen und ebenfalls kurz unterrühren. Teig in die Form geben, glatt streichen. Im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) 50–55 Minuten backen. Herausnehmen und auskühlen lassen.",
      "Für die Karamellsoße 150 g Zucker mit 100 ml Wasser in einem Topf erhitzen, bis der Zucker sich aufgelöst hat. Kochen lassen, bis der Sirup goldgelb karamellisiert ist. Vom Herd ziehen und 100 g Creme double unterrühren. In eine Schüssel füllen und auskühlen lassen.",
      "Kuchen aus der Form lösen und einmal quer halbieren. Um den unteren Boden einen Tortenring stellen. 500 g Creme double mit Kondensmilch in eine Rührschüssel geben. Mit den Schneebesen des Handrührgerätes steif schlagen. Hälfte der Creme auf den Boden geben und glatt streichen. Mit Schokoladen-Plättchen bestreuen und mit ca. der Hälfte der Karamellsoße beträufeln. Restliche Creme darauf geben und glatt streichen. Oberen Boden darauf setzen.",
      "200 g Creme double steif schlagen, auf der Torte verstreichen. Über Nacht einfrieren. 50 g Schokolade hacken und über einem heißen Wasserbad schmelzen lassen. Torte 30 Minuten vor dem Servieren herausnehmen. Aus der Form lösen und auf eine Tortenplatte setzen. Mit restlicher Karamellsoße beträufeln und geschmolzene Schokolade darauf verteilen."
    ],
    notes: ""
  },
  {
    title: "Schokoladentorte",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/schokoladentorte,id=996e671c,b=lecker,w=795,rm=sk.webp",
    ingredients: "200 g Zartbitter-Kuvertüre\n3 Eier (Gr. M)\n100 g Zucker\n1 Pck. Vanillin-Zucker\n1 Prise Salz\n50 g Mehl\n50 g Speisestärke\n15 g Kakaopulver\n2 TL Backpulver\n500 g Zartbitterschokolade\n750 g Schlagsahne",
    steps: [
      "Für die Biskuitböden 100 g Kuvertüre grob hacken und in einer Schüssel über einem warmen Wasserbad schmelzen. 10 Minuten abkühlen lassen. Eier trennen. Eiweiß und 4 Esslöffel kaltes Wasser mit den Schneebesen des Handrührgerätes steif schlagen, dabei Zucker, Vanillezucker und Salz einrieseln lassen. Eigelbe nacheinander unterrühren. Flüssige Kuvertüre unter Rühren zugießen.",
      "Mehl, Stärke, Kakao und Backpulver mischen, in 2 Portionen auf die Eischaummasse sieben und vorsichtig mit einem Teigschaber unterrühren. Masse in eine Springform (26 cm Ø) füllen. Im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: Stufe 2) ca. 25 Minuten backen. Biskuit vom Rand lösen und auf einem Kuchengitter auskühlen lassen.",
      "Inzwischen für die Füllüng Schokolade grob hacken. Sahne in einem Topf erhitzen und von der Herdplatte ziehen. Schokolade in die heiße Sahne geben und unter Rühren darin schmelzen, bis eine glatte gleichmäßige Creme entsteht. Gleichmäßig in zwei Rührschüsseln verteilen, abkühlen lassen und mindestens 3 Stunden kalt stellen (am besten über Nacht).",
      "100 g Kuvertüre hacken und in einer Schüssel über einem warmen Wasserbad schmelzen. Kuvertüre als dünne Schicht auf ein Marmorbrett oder Backblech streichen und an einem kühlen Ort (oder kurz im Kühlschrank) anziehen lassen. Mit einem Spachtel lange Schokoladenröllchen/-späne schaben, auf einen großen Teller geben und kalt stellen.",
      "Biskuitboden waagerecht halbieren. Unteren Boden auf eine Platte legen und mit einem Tortenring umschließen. 1 Portion Schokoladencreme mit den Schneebesen des Handrührgerätes ca. 1 Minute cremig aufschlagen. Auf den unteren Boden streichen. Mit dem zweiten Boden bedecken und ca. 1 Stunde kalt stellen.",
      "Restliche Schokoladencreme mit den Schneebesen des Handrührgerätes ca. 1 Minute cremig aufschlagen. Torte aus dem Tortenring lösen und mit Creme einstreichen. Schokoladentorte ca. 2 Stunden kalt stellen. Kurz vor dem Servieren Schokoröllchen auf die Torte geben."
    ],
    notes: ""
  },
  {
    title: "Spekulatius-Dessert im Glas",
    category: "Desserts",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/spekulatius-nougat-trifle-b,id=ed42f56f,b=lecker,w=795,rm=sk.webp",
    ingredients: "100 g Mandeln ohne Haut\n250 g Doppelrahmfrischkäse\n2 EL brauner Zucker\n250 g Schlagsahne\n½ TL Kakao\n½ TL Spekulatiusgewürz\n80 g Zartbitterschokolade\n80 g Nougat\n100 g Spekulatius",
    steps: [
      "Mandeln in einer Pfanne ohne Fett goldbraun rösten und abkühlen lassen. 2/3 davon fein hacken. Frischkäse mit 1 EL Zucker glatt rühren, Sahne zugeben und steif schlagen. Die Masse halbieren, auf 2 Schüsseln verteilen. Unter die eine Hälfte den restlichen Zucker und fein gehackte Mandeln rühren, unter die andere Hälfte Kakao und Spekulatiusgewürz. Beide Massen kalt stellen.",
      "Inzwischen beide Schokoladensorten, bis auf etwas Zartbitterschokolade, grob hacken. Über einem warmen Wasserbad schmelzen. 8 Spekulatius zerbröseln und in 4 Gläser (à ca. 250 ml) verteilen. Hälfte der geschmolzenen Schokolade daraufgeben. Erst die Kakao-Frischkäsemasse, dann die Mandel-Frischkäsemasse darauf verteilen. Mit der restlichen geschmolzenen Schokolade abschließen.",
      "Restliche Mandeln grob hacken und auf die Gläser verteilen. Restliche Schokolade darüberhoblen und das Dessert ca. 3 Stunden kalt stellen. Restlichen Spekulatius in 4 Stücke teilen, je 1 Stück ins Trifle stecken und servieren."
    ],
    notes: ""
  },
  {
    title: "Strammer Süßkartoffel-Max",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/f9399201-strammer-suskartoffel-max-mit-bacon-und-spiegelei-1,id=3e363544,b=lecker,w=795,ca=13.20,42.34,85.40,78.43,rm=sk.webp",
    ingredients: "2 große Süßkartoffeln\n3 EL Olivenöl\nSalz\nPfeffer\n125 g Bacon\n8 Eier (Gr. M)\n150 g Babyspinat",
    steps: [
      "Süßkartoffeln gründlich ­waschen, in ca. 1,5 cm dicke Scheiben schneiden. Mit Öl, etwas Salz und Pfeffer mischen und auf einem Blech verteilen. Im heißen Backofen (E-Herd: 200 °/Umluft: 180 °C) ca. 15 Minuten backen, dabei einmal wenden.",
      "Inzwischen Bacon in einer Pfanne ohne Fett knusprig ­braten, herausnehmen. Nacheinander jeweils 4 Eier im Speckfett braten. Mit Salz und Pfeffer würzen. Spinat ­waschen, trocken schleudern. Jeweils 3–4 Scheiben Süßkartoffeln mit Bacon, Spinat und je 2 Spiegeleiern anrichten."
    ],
    notes: ""
  },
  {
    title: "Tamago-Sando",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://cdn.1mal1japan.de/wp-content/uploads/2023/05/Tamago-Sando-Rezeptbild.webp",
    ingredients: "8 Scheiben weiches\nToastbrot (große\nScheiben)\n4 EL gesalzene Butter\n4 Eier (M)\n4 EL Mayonnaise\n2 EL Milch\n1/2 TL Senf\n1/2 TL Salz\netwas Pfeffer\netwas Schnittlauch",
    steps: [
      "Zutaten für Tamago Sando bereitlegen",
      "Einen mittelgroßen Kochtopf mit Wasser füllen und zum",
      "Kochen bringen. Sobald es kocht, die Eier hineingeben und",
      "für 10 Minuten fest kochen.",
      "Nach Ende der Kochzeit die Eier in eiskaltem Wasser",
      "abschrecken, um den Kochvorgang zu stoppen. Vollständig",
      "abkühlen lassen (das dauert etwa 5 Minuten) und",
      "anschließend die Eierschalen schälen. Die geschälten Eier in",
      "eine Schüssel geben und mit einer Gabel zerdrücken.",
      "Versuche am besten, alles in gleich große Stücke zu",
      "zerdrücken.",
      "Salz und etwas frisch gemahlenen Pfeffer hinzufügen.",
      "Außerdem die Milch, Senf und Mayonnaise hinzugeben. Den",
      "Schnittlauch kurz abspülen, trocken schütteln und mit einer",
      "Schere in kleinen Ringen direkt zum Eiersalat schneiden.",
      "Alles gut miteinander vermengen. Tipp: Unbedingt",
      "abschmecken und bei Bedarf mehr Salz und Pfeffer",
      "hinzugeben.",
      "Lege auf eine saubere Arbeitsplatte die Hälfte der Scheiben",
      "Toastbrot aus. Bestreiche sie mit der Butter. Gebe dann",
      "jeweils esslöffelweise den Eiersalat aufs Brot.",
      "Auf jede bestrichene Scheibe Brot eine weitere",
      "unbestrichene Toastbrot Scheibe legen und das Sandwich",
      "leicht zusammendrücken. Mit irgendetwas beschweren (z.",
      "B. einer Auflaufform) und für 5 Minuten stehen lassen. Dann",
      "das Gewicht entfernen und jeweils die Kruste der",
      "Sandwiches abschneiden. Tipp: Am besten immer die",
      "gegenüberliegenden Seiten abschneiden, dann wird es nicht",
      "krumm und schief ;).",
      "Schneide jedes Sandwich in zwei Hälften. Jetzt ist es",
      "servierfertig. Fertig – Itadakimasu!"
    ],
    notes: ""
  },
  {
    title: "Tiramisu im Glas",
    category: "Desserts",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/cream-n-crunch-schoko-tiramisu,id=d2097628,b=lecker,w=795,rm=sk.webp",
    ingredients: "100 g Zartbitterschokolade\n200 g Schlagsahne\n500 g Mascarpone\n1 Pck. Vanillezucker\n50 g Puderzucker\n3 EL Espresso\n6 Löffelbiskuits",
    steps: [
      "Schokolade grob hacken und über einem warmen Wasserbad schmelzen. Sahne mit den Schneebesen des Handrührgeräts steif schlagen. Mascarpone mit Vanillezucker und Puderzucker ebenfalls ca. 4 Minuten cremig rühren. Sahne vorsichtig unter die Mascarponecreme heben. Creme kalt stellen.",
      "Espresso tropfenweise ­unter die geschmolzene Schoko­lade rühren und ca. 10 Minuten abkühlen lassen. Schoko-­Kaffee-Mischung vorsichtig unter die Creme swirlen. Creme in 6 Gläser (à ca. 200 ml) verteilen. Dazu die­ Löffelbiskuits essen."
    ],
    notes: ""
  },
  {
    title: "Tonkatsu",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://cdn.1mal1japan.de/wp-content/uploads/2023/01/Tonkatsu-Rezeptbild.webp",
    ingredients: "2 Schweinekoteletts\n(mit oder ohne\nKnochen)\netwas Salz & Pfeffer\n50 ml Sahne\n1 Ei\n50 g Mehl\n100 g Panko\nreichlich Ol (zum\nBeispiel Rapsöl)\nreichlich Tonkatsu Sauce\n\nBeilagen:\n2 Portionen Reis\n2 Portionen japanischer\nKrautsalat\n2 Portionen Miso Suppe\n2 Zitronenspalten -\noptional",
    steps: [
      "Zutaten für Tonkatsu bereitlegen und die Beilagen",
      "vorbereiten. Das bedeutet, den Reis kochen, die Miso Suppe",
      "zubereiten und den Krautsalat zurechtmachen!",
      "Als erstes kümmern wir uns um das Fleisch: Die",
      "Schweinekoteletts ggf. jeweils vom Knochen schneiden",
      "(Tipp: der Knochen kann möglicherweise für eine Brühe für",
      "Ramen weiterverwendet werden). Dann etwas",
      "Frischhaltefolie (oder Backpapier) über die Koteletts legen",
      "und mit einem Nudelholz oder einem Fleischklopfer etwas",
      "flachklopfen, um das Fleisch zart zu machen. Die Koteletts",
      "sollten etwa 2 cm dick sein.",
      "Die Koteletts danach mit Salz und Pfeffer von beiden würzen",
      "und kurz einreiben.",
      "Danach bauen wir uns eine Panierstation mit 3 Behältern",
      "auf: Dazu in einer kleinen Schüssel das Ei mit der Sahne",
      "verquirlen. Außerdem benötigen wir ein Gefäß mit Mehl",
      "und ein weiteres, flaches Gefäß mit Panko Semmelbröseln.",
      "Das Schweinefleisch von beiden Seiten im Mehl wenden.",
      "Dann von beiden Seiten in die Eier-Sahne-Masse tauchen.",
      "Als nächstes in die Panko-Semmelbrösel legen und ringsum",
      "damit panieren. Tipp: Am besten das Kotelett mit der",
      "flachen Hand etwas in das Panko nach unten drücken, damit",
      "die Panade gut am Fleisch haftet.",
      "Reichlich Öl in eine Pfanne geben, sodass die Koteletts darin",
      "schwimmen (Tipp: Alternativ kannst du sehr gerne auch eine",
      "Fritteuse verwenden! Dann wird die Panade gleichmäßig",
      "braun und das Fleisch noch saftiger). Das Öl auf 170°C",
      "erhitzen und die panierten Schweinekoteletts darin jeweils 4",
      "Minuten von beiden Seiten braten.",
      "Die fertig gebratenen Tonkatsu Koteletts auf ein",
      "Küchenpapier zum Abtropfen legen und danach mit einem",
      "großen, scharfen Messer in etwa 2 cm breite Streifen schneiden. Tipp: Beim Schneiden gerne",
      "das Fleisch ruckartig durchtrennen, damit die Panade nicht zerkrümelt. Das Tonkatsu auf",
      "einem Teller zusammen mit dem Krautsalat und ggf. mit etwas Zitrone anrichten.",
      "Hinzu kommen in Schälchen etwas gekochter Reis und die Miso Suppe. Kurz vor dem",
      "Servieren das Tonkatsu mit reichlich Tonkatsu Sauce übergießen. Fertig – Itadakimasu!"
    ],
    notes: ""
  },
  {
    title: "Vegetarischer Spargel-Eintopf",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/vegetarischer-spargel-eintopf-b,id=d4ffbe0c,b=lecker,w=795,rm=sk.webp",
    ingredients: "2 Zwiebeln\nca. 900 g weißer Spargel\n250 g Zuckerschoten\n1 (ca. 400 g)großer Kohlrabi\n2 EL Öl\n1,2 l Gemüsebrühe\n1 ½ TL Zucker\n1 Bund Radieschen\nSalz, Pfeffer\n½ Zitrone\n50 g Baby-Spinat",
    steps: [
      "Zwiebeln schälen und grobe Würfel schneiden. Spargel waschen, schälen und die holzigen Enden abschneiden. Die Spargelstangen in ca. 5 cm große Stücke schneiden. Zuckerschoten putzen, waschen und leicht schräg quer halbieren. Kohlrabi schälen, waschen und in mundgerechte Stücke schneiden.",
      "Das Öl in einem großen Topf erhitzen. Zwiebelwürfel zufügen und glasig dünsten. Gemüsebrühe angießen und aufkochen. Zucker, Spargel und Kohlrabi zufügen, aufkochen. Alles zugedeckt ca. 10 Minuten köcheln.",
      "In der Zwischenzeit Radieschen putzen, waschen und in dünne Scheiben hobeln oder schneiden. Babyspinat waschen und verlesen. Zitrone auspressen. Den Eintopf mit Salz, Pfeffer und Zitronensaft abschmecken und in Schalen anrichten. Mit Radieschen und Babyspinat garnieren. Dazu schmeckt Baguette mit Butter."
    ],
    notes: ""
  },
  {
    title: "Weihnachtsbraten",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://cdn.veggies.de/wp-content/uploads/2023/12/01120150/Weihnachtsbraten_vegan_Titel-1024x768.png",
    ingredients: "2 Knoblauchzehe\n5 Mandarinen\n5 Stiele Zitronenthymian\n3 Scheiben (à ca. 600 g) Rinderhüfte\n2 EL Honig\nSalz\nPfeffer\n2 EL Butterschmalz\n1 Glas (400 ml) Rinderfond\n1 TL Stärke",
    steps: [
      "Knoblauch schälen und fein hacken. Thymian waschen und die Blätter abstreifen. 4 Mandarinen schälen und quer in Scheiben schneiden. Fleisch trocken tupfen, mit Salz und Pfeffer würzen. Butterschmalz in einer großen Pfanne erhitzen. Fleischstücke darin rundherum bei starker Hitze ca. 4 Minuten anbraten. Knoblauch zugeben, kurz mitbraten.",
      "Fleisch auf ein Backblech legen. Mit 2 EL Honig bepinseln und mit Thymian bestreuen. Mandarinenscheiben um das Fleisch verteilen. Im vorgeheizten Backofen (E-Herd: 150 °C/ Umluft: 130 °C) ca. 15 Minuten weiter garen (dann ist es medium; Kerntemperatur 56 °C).",
      "Für die Soße den Bratsatz in der Pfanne mit Fond ablöschen. 1 Mandarine quer halbieren und den Saft dazupressen. Aufkochen und ca. 4 Minuten köcheln. 1 TL Stärke mit 2 EL Wasser glatt rühren und in die Soße rühren, 1 Minuten köcheln, mit Salz und Pfeffer abschmecken, warmhalten. Fleisch aufschneiden, mit Mandarinen und Soße anrichten. Dazu schmecken Rotkohl und Kartoffelknödel."
    ],
    notes: ""
  },
  {
    title: "YOGURETTE-TORTE",
    category: "Kuchen",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/yogurette-torte,id=e877d205,b=lecker,w=795,rm=sk.webp",
    ingredients: "2 helle Wiener Böden (à ca. 130 g)\n400 g Schlagsahne\n3 Pck. Sahnefestiger\n400 g Schmand\n850 g Erdbeeren\n21 Joghurt-Erdbeer-Schokoriegel (z. B. Yogurette)\n150 g Raspelschokolade",
    steps: [
      "Für die Creme Sahne mit Sahnefestiger steif schlagen. Schmand glatt rühren. Sahne unterheben. Erdbeeren waschen, putzen und 6 hübsche Beeren zum Verzieren beiseitelegen. Restliche Erdbeeren fein würfeln. Erdbeerwürfel unter die Schmandcreme rühren. 16 Schokoriegel sehr fein hacken und unter die Erdbeercreme heben.",
      "Einen Wiener Boden auf eine Tortenplatte legen. Hälfte der Erdbeer-Schmand-Creme darauf verstreichen. Zweiten Boden darauflegen. Kuchen rundherum mit der übrigen Erdbeer-Creme einstreichen.",
      "Für die Verzierung eine Erdbeere zur Seite legen, den Rest halbieren. Übrige Schokoriegel längs halbieren und mit der Schnittfläche nach oben im Kreis auf die Torte legen. Erdbeerhälften mit der Schnittfläche nach unten zwischen die Riegel, die ganze Erdbeere mit der Spitze nach oben in die Tortenmitte setzen.",
      "Torte mit Hälfte der Raspelschokolade bestreuen. Übrige Raspel mit einer Teigkarte oder mit den Händen vorsichtig an den Rand drücken. Yogurette-Torte mindestens 3 Stunden kalt stellen."
    ],
    notes: ""
  },
  {
    title: "Zucchini-Auflauf",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://images.lecker.de/goldener-zucchini-reis-auflauf,id=418de988,b=lecker,w=795,rm=sk.webp",
    ingredients: "3 Zucchini\n2 Zwiebeln\n2 EL Öl\n600 g gemischtes Hackfleisch\n1 TL Oregano\n2 Dosen (à 425 ml) stückige Tomaten\nSalz\nPfeffer\nZucker\n75 g geriebener Käse (z. B. Emmentaler)",
    steps: [
      "Zucchini putzen, waschen und in Scheiben schneiden. Zwiebeln schälen, fein würfeln.",
      "Öl in einer Pfanne erhitzen. Hack darin unter Wenden ca. 5 Minuten krümelig braten. Zwiebeln, Oregano und Tomaten zugeben, ca. 5 Minuten köcheln lassen. Mit Salz, Pfeffer und Zucker würzen. Zuletzt 3/4 des Käses darin schmelzen.",
      "Hacksoße in eine Auflaufform geben. Zucchinischeiben und übrige Hacksoße in jeweils 2 weiteren Schichten daraufgeben, dabei mit einer Schicht Hacksoße abschließen. Mit übrigem Käse bestreuen. Im vorgeheizten Backofen (E-Herd: 200 °C/ Umluft: 175 °C ca. 20 Minuten backen. Zucchini-Auflauf herausnehmen, kurz abkühlen lassen. Dazu schmeckt Brot."
    ],
    notes: ""
  },
  {
    title: "Zucchini-Rolle mit Feta und Tomaten",
    category: "Gerichte",
    portions: 4,
    time_minutes: null,
    difficulty: "",
    tags: [],
    image: "https://magazin.klarstein.de/wp-content/uploads/2022/03/KS_Magazine_0222_Zucchini-Rollchen-mit-Feta_1300x1300px-1024x1024.jpg",
    ingredients: "2 mittelgroße Zucchini\n8 Eier\nSalz\nPfeffer\nMuskat\n200 g Kräuterfrischkäse\n3 große Tomaten\nca. 100 g getrocknete Tomaten in Öl (Glas)\n3 Stiele Basilikum\n200 g Feta",
    steps: [
      "Zucchini in feine Scheiben schneiden. Auf ein Küchenbrett legen und mit Salz bestreuen. 10 Minuten stehen lassen und die ausgetretene Feuchtigkeit mit einem Papier-Küchentuch abtupfen.",
      "Ein Backblech mit Backpapier auslegen, darauf die Zucchinischeiben gleichmäßig verteilen. Eier in eine Schüssel aufschlagen. Mit wenig Salz, Pfeffer und frisch geriebener Muskatnuss würzen und mit dem Handmixer 3-5 Minuten schaumig aufschlagen. Eiermasse vorsichtig über die Zucchini verteilen. Im vorgeheizten Backofen (E-Herd: 180 °C/Umluft: 160 °C) ca. 20 Minuten backen. Auf die Arbeitsplatte ziehen und leicht abkühlen lassen.",
      "Währenddessen frische Tomaten waschen, Stielansatz entfernen und in feine Stücke schneiden. Getrocknete Tomaten abtropfen lassen und hacken. Basilikumblättchen von den Stielen zupfen und grob hacken.",
      "Getrocknete Tomaten und Basilikum unter den Frischkäse rühren und auf die Zucchiniplatte verstreichen. Tomaten darüber streuen, Feta gleichmäßig darüberbröckeln. Mit Hilfe des Backpapiers fest einrollen und weitere 15 Minuten goldbraun backen."
    ],
    notes: ""
  },
];
