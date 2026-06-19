const scenarios = [
  {
    id: "everyday", title: "Everyday Japanese", icon: "👋", accent: "#5ce7d7", level: "START HERE", description: "Greetings, thanks, and the small words you’ll use everywhere.",
    words: [["Konnichiwa", "こんにちは", "Hello"], ["Ohayou gozaimasu", "おはようございます", "Good morning"], ["Konbanwa", "こんばんは", "Good evening"], ["Arigatou gozaimasu", "ありがとうございます", "Thank you very much"], ["Sumimasen", "すみません", "Excuse me / sorry"], ["Hai", "はい", "Yes"], ["Iie", "いいえ", "No"], ["Daijoubu desu", "大丈夫です", "It’s okay"]],
    phrases: [["Sumimasen", "Excuse me — also useful to get someone’s attention", "すみません"], ["Arigatou gozaimasu", "Thank you very much", "ありがとうございます"], ["Onegaishimasu", "Please / a polite request", "お願いします。"], ["Daijoubu desu", "I’m okay / it’s fine", "大丈夫です。"], ["Wakarimashita", "I understand", "わかりました。"]],
    scene: { place: "A small shop in Tokyo", speaker: "Shopkeeper", line: "Konnichiwa!", lineJa: "こんにちは！", question: "The shopkeeper greets you. What is the natural reply?", choices: ["Konnichiwa", "Iie", "Arigatou gozaimasu", "Omizu o onegaishimasu"], answer: 0, note: "Konnichiwa is the standard daytime greeting and a natural reply here." }
  },
  {
    id: "essentials", title: "Tourist Essentials", icon: "🗺️", accent: "#a685ff", level: "ESSENTIAL", description: "The signs and survival words that keep a trip moving.",
    words: [["Eigo", "英語", "English"], ["Toire", "トイレ", "Toilet"], ["Mizu", "水", "Water"], ["Eki", "駅", "Station"], ["Hoteru", "ホテル", "Hotel"], ["Pasupooto", "パスポート", "Passport"], ["Kippu", "切符", "Ticket"], ["Deguchi", "出口", "Exit"]],
    phrases: [["Toire wa doko desu ka?", "Where is the toilet?", "トイレはどこですか？"], ["Eigo wa hanasemasu ka?", "Do you speak English?", "英語は話せますか？"], ["Kono chikaku ni eki wa arimasu ka?", "Is there a station nearby?", "この近くに駅はありますか？"], ["Tasukete moraemasu ka?", "Could you help me?", "助けてもらえますか？"], ["Kore wa nan desu ka?", "What is this?", "これは何ですか？"]],
    scene: { place: "Inside a busy station", speaker: "You see two signs", line: "Deguchi", lineJa: "出口", question: "Which sign have you found?", choices: ["The platform", "The exit", "The toilet", "The ticket desk"], answer: 1, note: "出口 (deguchi) means exit. The kanji literally suggest going out." }
  },
  {
    id: "restaurant", title: "Restaurants", icon: "🍜", accent: "#ff8d7a", level: "3 OF 6", description: "Order confidently, ask for water, and settle the bill.",
    words: [["Menyuu", "メニュー", "Menu"], ["Mizu", "水", "Water"], ["Okaikei", "お会計", "Bill / check"], ["Oishii", "おいしい", "Delicious"], ["Hashi", "箸", "Chopsticks"], ["Osusume", "おすすめ", "Recommendation"]],
    phrases: [["Eigo no menyuu wa arimasu ka?", "Do you have an English menu?", "英語のメニューはありますか？"], ["Kore onegaishimasu", "This one, please", "これ、お願いします。"], ["Oishii!", "Delicious!", "おいしい！"], ["Okaikei onegaishimasu", "The bill, please", "お会計、お願いします。"], ["Omizu o onegaishimasu", "Water, please", "お水をお願いします。"]],
    scene: {
      place: "A cosy ramen shop", speaker: "Waiter", line: "Irasshaimase!", lineJa: "いらっしゃいませ！",
      rounds: [
        { speaker: "Waiter", line: "Menyuu wa kochira desu.", lineJa: "メニューはこちらです。", meaning: "Here is the menu.", question: "The menu is only in Japanese. How do you ask for an English one?", target: 0, note: "Eigo no menyuu wa arimasu ka? politely asks whether an English menu is available." },
        { speaker: "Waiter", line: "Gochuumon wa?", lineJa: "ご注文は？", meaning: "What would you like to order?", question: "You point to the dish you want. What do you say?", target: 1, note: "Kore onegaishimasu means ‘This one, please’—perfect when you can point at the item." },
        { speaker: "Waiter", line: "Oaji wa ikaga desu ka?", lineJa: "お味はいかがですか？", meaning: "How does it taste?", question: "The waiter asks how the food tastes. How do you say it’s delicious?", target: 2, note: "Oishii! is a natural, enthusiastic way to say the food is delicious." },
        { speaker: "Waiter", line: "Hoka ni gochuumon wa arimasu ka?", lineJa: "ほかにご注文はありますか？", meaning: "Would you like anything else?", question: "You’re finished and ready to pay. What do you ask for?", target: 3, note: "Okaikei onegaishimasu asks for the bill politely." },
        { speaker: "Waiter", line: "Onomimono wa ikaga desu ka?", lineJa: "お飲み物はいかがですか？", meaning: "Would you like a drink?", question: "You’d like some water. What do you ask for?", target: 4, note: "Omizu o onegaishimasu is a natural, polite way to ask for water." }
      ]
    }
  },
  {
    id: "hotel", title: "Hotels", icon: "🏨", accent: "#ffd166", level: "NEW", description: "Check in, show your passport, and ask about your room.",
    words: [["Yoyaku", "予約", "Reservation"], ["Namae", "名前", "Name"], ["Heya", "部屋", "Room"], ["Pasupooto", "パスポート", "Passport"], ["Kagi", "鍵", "Key"], ["Waifai", "ワイファイ", "Wi-Fi"]],
    phrases: [["Chekku-in o onegaishimasu", "I’d like to check in, please", "チェックインをお願いします。"], ["Yoyaku shiteimasu", "I have a reservation", "予約しています。"], ["Namae wa Jaydan desu", "My name is Jaydan", "名前はジェイダンです。"], ["Waifai wa arimasu ka?", "Is Wi-Fi available?", "ワイファイはありますか？"], ["Chekku-auto wa nanji desu ka?", "What time is check-out?", "チェックアウトは何時ですか？"]],
    scene: { place: "Your hotel reception", speaker: "Receptionist", line: "Pasupooto o onegaishimasu.", lineJa: "パスポートをお願いします。", question: "What is the receptionist asking for?", choices: ["Your name", "Your room key", "Your passport", "Your payment"], answer: 2, note: "They’re politely asking for your passport, which is normal at hotel check-in." }
  },
  {
    id: "trains", title: "Trains & Stations", icon: "🚅", accent: "#67e88d", level: "NEW", description: "Find the right station, ticket, platform, and exit.",
    words: [["Eki", "駅", "Station"], ["Densha", "電車", "Train"], ["Kippu", "切符", "Ticket"], ["Deguchi", "出口", "Exit"], ["Noriba", "乗り場", "Platform / boarding area"], ["Kaisatsu", "改札", "Ticket gate"]],
    phrases: [["Shibuya eki wa doko desu ka?", "Where is Shibuya Station?", "渋谷駅はどこですか？"], ["Kono densha wa Shibuya ni ikimasu ka?", "Does this train go to Shibuya?", "この電車は渋谷に行きますか？"], ["Kippu wa doko de kaemasu ka?", "Where can I buy a ticket?", "切符はどこで買えますか？"], ["Nanban sen desu ka?", "Which platform is it?", "何番線ですか？"], ["Tsugi wa Shibuya desu ka?", "Is Shibuya the next stop?", "次は渋谷ですか？"]],
    scene: { place: "Shinjuku Station", speaker: "Station staff", line: "Shibuya wa ni-ban sen desu.", lineJa: "渋谷は二番線です。", question: "They point to platform 2. What should you look for?", choices: ["A taxi rank", "Platform number 2", "Exit number 2", "Carriage number 2"], answer: 1, note: "Ni-ban means number two, and sen refers to the platform or track here." }
  },
  {
    id: "taxi", title: "Taxis", icon: "🚕", accent: "#ffd166", level: "QUICK", description: "Tell the driver where you’re going and confirm the stop.",
    words: [["Takushii", "タクシー", "Taxi"], ["Eki", "駅", "Station"], ["Koko", "ここ", "Here"], ["Onegaishimasu", "お願いします", "Please"], ["Juusho", "住所", "Address"], ["Ryoukin", "料金", "Fare / charge"]],
    phrases: [["Shibuya eki onegaishimasu", "Shibuya Station, please", "渋谷駅、お願いします。"], ["Koko de daijoubu desu", "Here is fine", "ここで大丈夫です。"], ["Kono juusho onegaishimasu", "This address, please", "この住所、お願いします。"], ["Ikura desu ka?", "How much is it?", "いくらですか？"], ["Kurejitto kaado wa tsukaemasu ka?", "Can I use a credit card?", "クレジットカードは使えますか？"]],
    scene: { place: "Inside a Tokyo taxi", speaker: "Driver", line: "Doko made desu ka?", lineJa: "どこまでですか？", question: "The driver asks where you’re going. Choose your reply.", choices: ["Shibuya eki onegaishimasu", "Oishii desu", "Eigo no menyuu wa?", "Hajimemashite"], answer: 0, note: "Destination + onegaishimasu is a simple, polite way to tell a driver where you want to go." }
  },
  {
    id: "jdm", title: "JDM Car Meets", icon: "🏎️", accent: "#ff6d85", level: "YOUR PICK", description: "Compliment the build, meet owners, and ask for a photo.",
    words: [["Kuruma", "車", "Car"], ["Kakkoii", "かっこいい", "Cool / stylish"], ["Shashin", "写真", "Photo"], ["Sugoi", "すごい", "Amazing"], ["Enjin", "エンジン", "Engine"], ["Kaizou", "改造", "Modification / customisation"]],
    phrases: [["Kakkoii!", "That’s so cool!", "かっこいい！"], ["Kono kuruma sugoi!", "This car is amazing!", "この車、すごい！"], ["Shashin o totte mo ii desu ka?", "May I take a photo?", "写真を撮ってもいいですか？"], ["Nan-nen shiki desu ka?", "What model year is it?", "何年式ですか？"], ["Enjin o mite mo ii desu ka?", "May I see the engine?", "エンジンを見てもいいですか？"]],
    scene: { place: "A night car meet in Daikoku", speaker: "GT-R owner", line: "Konnichiwa! Kuruma ga suki desu ka?", lineJa: "こんにちは！車が好きですか？", question: "You want to compliment their car. What do you say?", choices: ["Kono kuruma sugoi!", "Okaikei onegaishimasu", "Toire wa doko desu ka?", "Iie, daijoubu desu"], answer: 0, note: "Kono kuruma sugoi! is an enthusiastic, friendly compliment: ‘This car is amazing!’" }
  },
  {
    id: "gaming", title: "Gaming Cafés", icon: "🎮", accent: "#a685ff", level: "YOUR PICK", description: "Get set up, join a game, and connect with other players.",
    words: [["Geemu", "ゲーム", "Game"], ["Pasokon", "パソコン", "PC"], ["Issho ni", "一緒に", "Together"], ["Purei", "プレイ", "Play"], ["Seki", "席", "Seat"], ["Aiteimasu", "空いています", "Available / unoccupied"]],
    phrases: [["Issho ni purei shite mo ii desu ka?", "Can I play with you?", "一緒にプレイしてもいいですか？"], ["Kono geemu wa hajimete desu", "This is my first time playing this game", "このゲームは初めてです。"], ["Kono seki wa aiteimasu ka?", "Is this seat free?", "この席は空いていますか？"], ["Nani o purei shiteimasu ka?", "What are you playing?", "何をプレイしていますか？"], ["Mou ikkai yarimasen ka?", "Shall we play one more round?", "もう一回やりませんか？"]],
    scene: { place: "A gaming café in Akihabara", speaker: "Player", line: "Issho ni yarimasu ka?", lineJa: "一緒にやりますか？", question: "They’re inviting you to play together. How do you accept?", choices: ["Hai, onegaishimasu!", "Iie, wakarimasen", "Okaikei onegaishimasu", "Deguchi desu"], answer: 0, note: "Hai, onegaishimasu is a warm ‘Yes, please!’ and works nicely here." }
  },
  {
    id: "people", title: "Meeting People", icon: "🤝", accent: "#5ce7d7", level: "SOCIAL", description: "Introduce yourself and keep a simple conversation going.",
    words: [["Namae", "名前", "Name"], ["Sukottorando", "スコットランド", "Scotland"], ["Nihongo", "日本語", "Japanese language"], ["Hajimemashite", "はじめまして", "Nice to meet you"], ["Shusshin", "出身", "Hometown / origin"], ["Tomodachi", "友達", "Friend"]],
    phrases: [["Hajimemashite", "Nice to meet you", "はじめまして。"], ["Watashi wa Sukottorando kara kimashita", "I am from Scotland", "私はスコットランドから来ました。"], ["Onamae wa?", "What is your name?", "お名前は？"], ["Nihongo wa mada benkyou-chuu desu", "I am still learning Japanese", "日本語はまだ勉強中です。"], ["Nihon wa hajimete desu", "It’s my first time in Japan", "日本は初めてです。"]],
    scene: { place: "A friendly izakaya", speaker: "Local", line: "Doko kara kimashita ka?", lineJa: "どこから来ましたか？", question: "They ask where you’re from. Choose your answer.", choices: ["Watashi wa Sukottorando kara kimashita", "Namae wa Jaydan desu", "Nihongo wa mada benkyou-chuu desu", "Omizu o onegaishimasu"], answer: 0, note: "Sukottorando kara kimashita means ‘I came from Scotland’—a natural way to say where you’re from." }
  },
  {
    id: "emergency", title: "Help & Emergencies", icon: "🛟", accent: "#ff6d85", level: "MUST KNOW", description: "Slow things down, ask again, and get help when you need it.",
    words: [["Wakarimasen", "わかりません", "I don’t understand"], ["Yukkuri", "ゆっくり", "Slowly"], ["Mou ichido", "もう一度", "One more time"], ["Tasukete", "助けて", "Help me"], ["Keisatsu", "警察", "Police"], ["Byouin", "病院", "Hospital"]],
    phrases: [["Wakarimasen", "I don’t understand", "わかりません。"], ["Mou ichido onegaishimasu", "Please say that again", "もう一度お願いします。"], ["Motto yukkuri onegaishimasu", "Please speak more slowly", "もっとゆっくりお願いします。"], ["Eigo wa hanasemasu ka?", "Do you speak English?", "英語は話せますか？"], ["Tasukete kudasai", "Please help me", "助けてください。"]],
    scene: { place: "You’re receiving fast directions", speaker: "Passer-by", line: "...hidari ni magatte, tsugi no kousaten de...", lineJa: "左に曲がって、次の交差点で……", question: "You can’t follow. What is the most helpful response?", choices: ["Oishii!", "Motto yukkuri onegaishimasu", "Kore onegaishimasu", "Kakkoii!"], answer: 1, note: "Motto yukkuri onegaishimasu politely asks them to speak more slowly." }
  }
];

const pronunciationGuides = {
  "konnichiwa": "ko · n · ni · chi · wa", "ohayou gozaimasu": "o · ha · yo · u / go · za · i · ma · su", "konbanwa": "ko · n · ba · n · wa",
  "arigatou gozaimasu": "a · ri · ga · to · u / go · za · i · ma · su", "sumimasen": "su · mi · ma · se · n", "hai": "ha · i", "iie": "i · i · e",
  "daijoubu desu": "da · i · jo · u · bu / de · su", "eigo": "e · i · go", "toire": "to · i · re", "mizu": "mi · zu", "eki": "e · ki",
  "hoteru": "ho · te · ru", "pasupooto": "pa · su · po · o · to", "kippu": "ki · [pause] · pu", "deguchi": "de · gu · chi",
  "menyuu": "me · nyu · u", "okaikei": "o · ka · i · ke · i", "oishii": "o · i · shi · i", "hashi": "ha · shi", "osusume": "o · su · su · me",
  "yoyaku": "yo · ya · ku", "namae": "na · ma · e", "heya": "he · ya", "kagi": "ka · gi", "waifai": "wa · i · fa · i",
  "densha": "de · n · sha", "noriba": "no · ri · ba", "kaisatsu": "ka · i · sa · tsu", "takushii": "ta · ku · shi · i", "koko": "ko · ko",
  "onegaishimasu": "o · ne · ga · i · shi · ma · su", "juusho": "ju · u · sho", "ryoukin": "ryo · u · ki · n", "kuruma": "ku · ru · ma",
  "kakkoii": "ka · [pause] · ko · i · i", "shashin": "sha · shi · n", "sugoi": "su · go · i", "enjin": "e · n · ji · n", "kaizou": "ka · i · zo · u",
  "geemu": "ge · e · mu", "pasokon": "pa · so · ko · n", "issho ni": "i · [pause] · sho / ni", "purei": "pu · re · i", "seki": "se · ki",
  "aiteimasu": "a · i · te · i · ma · su", "sukottorando": "su · ko · [pause] · to · ra · n · do", "nihongo": "ni · ho · n · go",
  "hajimemashite": "ha · ji · me · ma · shi · te", "shusshin": "shu · [pause] · shi · n", "tomodachi": "to · mo · da · chi",
  "wakarimasen": "wa · ka · ri · ma · se · n", "yukkuri": "yu · [pause] · ku · ri", "mou ichido": "mo · u / i · chi · do",
  "tasukete": "ta · su · ke · te", "keisatsu": "ke · i · sa · tsu", "byouin": "byo · u · i · n"
};

const phraseGlosses = {
  sumimasen: "excuse me / sorry", arigatou: "thank you", gozaimasu: "polite ending", onegaishimasu: "please", daijoubu: "okay / all right",
  desu: "is / polite ending", wakarimashita: "understood", toire: "toilet", wa: "topic marker", doko: "where", ka: "question marker",
  eigo: "English", hanasemasu: "can speak", kono: "this", chikaku: "nearby", ni: "to / in / with", eki: "station", arimasu: "there is",
  tasukete: "help", moraemasu: "can receive", kore: "this", nan: "what", no: "of / linking particle", menyuu: "menu",
  oishii: "delicious", okaikei: "bill / check", mizu: "water", omizu: "water (polite)", chekkuin: "check-in", yoyaku: "reservation", shiteimasu: "have / am doing",
  namae: "name", jaydan: "Jaydan", waifai: "Wi-Fi", chekkuauto: "check-out", nanji: "what time", shibuya: "Shibuya",
  densha: "train", ikimasu: "goes", kippu: "ticket", de: "at / by", kaemasu: "can buy", nanban: "which number", sen: "platform / line",
  tsugi: "next", koko: "here", juusho: "address", ikura: "how much", kurejitto: "credit", kaado: "card", tsukaemasu: "can use",
  kakkoii: "cool", kuruma: "car", sugoi: "amazing", shashin: "photo", totte: "take (a photo)", ii: "okay / good", nannen: "what year", shiki: "model year",
  enjin: "engine", o: "object marker", mite: "see / look", mo: "even if (after -te)", issho: "together", purei: "play", shite: "do / doing", geemu: "game", hajimete: "first time",
  seki: "seat", aiteimasu: "is free", nani: "what", mou: "one more", ikkai: "time / round", yarimasen: "shall we do / play",
  hajimemashite: "nice to meet you", watashi: "I / me", scotland: "Scotland", sukottorando: "Scotland", kara: "from", kimashita: "came", onamae: "name (polite)",
  nihongo: "Japanese", mada: "still", benkyouchuu: "currently studying", nihon: "Japan", wakarimasen: "do not understand", ichido: "one time",
  motto: "more", yukkuri: "slowly", kudasai: "please give / please do"
};

const phraseUseCases = {
  everyday: ["Getting a stranger’s attention or apologising for a small bump.", "Thanking hotel staff, a driver, or anyone who helps you.", "Adding a polite ‘please’ after an item or destination.", "Reassuring someone that you are okay or politely declining help.", "Confirming that you understood an instruction."],
  essentials: ["Asking in a station, shop, café, or public building.", "Finding someone who can switch the conversation to English.", "Getting your bearings when maps or signs are unclear.", "Asking a staff member or passer-by for assistance.", "Pointing at an unfamiliar sign, machine option, or item."],
  restaurant: ["Before ordering when the menu has no English.", "Pointing at a menu photo or display model.", "Responding when staff ask how the meal is.", "When you have finished and are ready to pay.", "Asking for water at any point during the meal."],
  hotel: ["Opening the conversation at reception.", "Confirming that your room was booked in advance.", "Answering when reception asks for your name.", "Checking internet access before heading to your room.", "Planning your departure the night before."],
  trains: ["Finding a station entrance from street level.", "Double-checking before boarding an unfamiliar train.", "Finding a ticket machine or staffed ticket office.", "Confirming the correct track with station staff.", "Checking the next stop when announcements are fast."],
  taxi: ["Giving a famous destination clearly and quickly.", "Telling the driver where it is safe to stop.", "Showing a saved hotel or venue address on your phone.", "Confirming the fare before or after the ride.", "Checking payment options before arriving."],
  jdm: ["Giving a friendly first compliment to an owner.", "Showing genuine enthusiasm about someone’s build.", "Asking permission before photographing someone’s car.", "Starting a simple conversation about the vehicle.", "Asking permission before looking under the bonnet."],
  gaming: ["Politely asking to join other players.", "Setting expectations when learning an unfamiliar game.", "Checking before taking a nearby chair or station.", "Starting a conversation with another player.", "Inviting the group to play another round."],
  people: ["The standard phrase when meeting someone for the first time.", "Answering the common question about where you are from.", "Politely asking the other person’s name.", "Explaining why your Japanese is limited.", "Sharing an easy conversation starter about your trip."],
  emergency: ["When directions or an explanation make no sense.", "Asking someone to repeat an important instruction.", "Slowing down a conversation without sounding abrupt.", "Finding English support in a stressful moment.", "For an urgent situation where you need immediate assistance."]
};

const scenarioPrompts = {
  everyday: [
    { speaker: "Passer-by", line: "Shitsurei shimashita.", lineJa: "失礼しました。", meaning: "I’m sorry.", question: "You also bumped into them. What do you say?", target: 0, note: "Sumimasen is the everyday all-purpose apology and attention-getter." },
    { speaker: "Shopkeeper", line: "O-wasuremono desu yo.", lineJa: "お忘れ物ですよ。", meaning: "You forgot this.", question: "They return something you left behind. Which phrase explicitly thanks them?", target: 1, note: "Arigatou gozaimasu is a warm, polite thank-you." },
    { speaker: "Clerk", line: "Fukuro wa irimasu ka?", lineJa: "袋はいりますか？", meaning: "Do you need a bag?", question: "You would like a bag. What polite request do you use?", target: 2, note: "Onegaishimasu politely accepts the offer: ‘Yes, please.’" },
    { speaker: "Passer-by", line: "Daijoubu desu ka?", lineJa: "大丈夫ですか？", meaning: "Are you okay?", question: "You are fine and want to reassure them. What do you say?", target: 3, note: "Daijoubu desu tells them you are okay or that everything is fine." },
    { speaker: "Staff member", line: "Koko de matte kudasai.", lineJa: "ここで待ってください。", meaning: "Please wait here.", question: "How do you confirm that you understood?", target: 4, note: "Wakarimashita is a polite ‘Understood.’" }
  ],
  essentials: [
    { speaker: "Station staff", line: "Nanika osagashi desu ka?", lineJa: "何かお探しですか？", meaning: "Are you looking for something?", question: "You need the toilet. What do you ask?", target: 0, note: "Toire wa doko desu ka? asks directly and politely where the toilet is." },
    { speaker: "Local", line: "Nihongo de daijoubu desu ka?", lineJa: "日本語で大丈夫ですか？", meaning: "Is Japanese okay?", question: "You need to switch to English. What do you ask?", target: 1, note: "Eigo wa hanasemasu ka? asks whether they can speak English." },
    { speaker: "Passer-by", line: "Dochira e ikimasu ka?", lineJa: "どちらへ行きますか？", meaning: "Where are you going?", question: "You are trying to find a nearby station. What do you ask?", target: 2, note: "Kono chikaku means ‘near here’ or ‘nearby’." },
    { speaker: "Staff member", line: "Dou shimashita ka?", lineJa: "どうしましたか？", meaning: "What happened?", question: "You need assistance but lack the words. What do you say?", target: 3, note: "Tasukete moraemasu ka? is a polite request for help." },
    { speaker: "Market seller", line: "Kore wa ninki desu yo.", lineJa: "これは人気ですよ。", meaning: "This is popular.", question: "You do not know what the item is. What do you ask?", target: 4, note: "Kore wa nan desu ka? means ‘What is this?’" }
  ],
  hotel: [
    { speaker: "Receptionist", line: "Irasshaimase.", lineJa: "いらっしゃいませ。", meaning: "Welcome.", question: "You want to say specifically that you would like to check in. Which phrase do you use?", target: 0, note: "Chekku-in o onegaishimasu clearly opens the check-in conversation." },
    { speaker: "Receptionist", line: "Go-yoyaku wa arimasu ka?", lineJa: "ご予約はありますか？", meaning: "Do you have a reservation?", question: "You booked in advance. How do you answer?", target: 1, note: "Yoyaku shiteimasu means ‘I have a reservation.’" },
    { speaker: "Receptionist", line: "Onamae o onegaishimasu.", lineJa: "お名前をお願いします。", meaning: "Your name, please.", question: "How do you give your name?", target: 2, note: "Namae wa … desu is the simple pattern for giving your name." },
    { speaker: "Receptionist", line: "Nanika go-shitsumon wa gozaimasu ka?", lineJa: "何かご質問はございますか？", meaning: "Do you have any questions?", question: "You need internet access. What do you ask?", target: 3, note: "Waifai wa arimasu ka? asks whether Wi-Fi is available." },
    { speaker: "Receptionist", line: "Hoka ni nanika gozaimasu ka?", lineJa: "ほかに何かございますか？", meaning: "Is there anything else?", question: "You need to plan tomorrow morning. What do you ask?", target: 4, note: "Chekku-auto wa nanji desu ka? asks what time check-out is." }
  ],
  trains: [
    { speaker: "Station staff", line: "Dochira e ikitai desu ka?", lineJa: "どちらへ行きたいですか？", meaning: "Where would you like to go?", question: "You are trying to find Shibuya Station. What do you ask?", target: 0, note: "Destination + eki wa doko desu ka? asks where that station is." },
    { speaker: "Passenger", line: "Kono densha wa Shibuya houmen desu.", lineJa: "この電車は渋谷方面です。", meaning: "This train is heading toward Shibuya.", question: "You want to double-check before boarding. What do you ask?", target: 1, note: "Kono densha wa … ni ikimasu ka? confirms a train’s destination." },
    { speaker: "Station staff", line: "Kippu o omochi desu ka?", lineJa: "切符をお持ちですか？", meaning: "Do you have a ticket?", question: "You still need to buy one. What do you ask?", target: 2, note: "Doko de kaemasu ka? means ‘Where can I buy it?’" },
    { speaker: "Station staff", line: "Shibuya wa san-ban sen desu.", lineJa: "渋谷は三番線です。", meaning: "Shibuya is on platform three.", question: "You did not catch the platform number. What do you ask?", target: 3, note: "Nanban sen desu ka? asks which numbered platform or track." },
    { speaker: "Announcement", line: "Harajuku ni touchaku shimashita.", lineJa: "原宿に到着しました。", meaning: "We have arrived at Harajuku.", question: "You need to check whether Shibuya is the next stop. What do you ask?", target: 4, note: "Tsugi wa … desu ka? checks whether a place is the next stop." }
  ],
  taxi: [
    { speaker: "Driver", line: "Dochira made desu ka?", lineJa: "どちらまでですか？", meaning: "Where are you going?", question: "You need to go to Shibuya Station. What do you say?", target: 0, note: "A destination followed by onegaishimasu is all you need." },
    { speaker: "Driver", line: "Kono hen de yoroshii desu ka?", lineJa: "この辺でよろしいですか？", meaning: "Is around here okay?", question: "This is close enough. What do you say?", target: 1, note: "Koko de daijoubu desu tells the driver that here is fine." },
    { speaker: "Driver", line: "Juusho o misete kudasai.", lineJa: "住所を見せてください。", meaning: "Please show me the address.", question: "You have the address on your phone. What do you say?", target: 2, note: "Kono juusho onegaishimasu means ‘This address, please.’" },
    { speaker: "Driver", line: "Touchaku shimashita.", lineJa: "到着しました。", meaning: "We have arrived.", question: "You need to know the fare. What do you ask?", target: 3, note: "Ikura desu ka? is the standard ‘How much is it?’" },
    { speaker: "Driver", line: "Oshiharai wa dou shimasu ka?", lineJa: "お支払いはどうしますか？", meaning: "How would you like to pay?", question: "You want to use your card. What do you ask?", target: 4, note: "Tsukaemasu ka? asks whether something can be used." }
  ],
  jdm: [
    { speaker: "Car owner", line: "Konnichiwa.", lineJa: "こんにちは。", meaning: "Hello.", question: "You want the short one-word compliment meaning ‘cool’. What do you say?", target: 0, note: "Kakkoii is a natural compliment meaning cool or stylish." },
    { speaker: "Car owner", line: "Kono kuruma, mite mimasu ka?", lineJa: "この車、見てみますか？", meaning: "Would you like to take a look at this car?", question: "You want to say specifically that this car is amazing. Which phrase do you use?", target: 1, note: "Kono kuruma sugoi! means ‘This car is amazing!’" },
    { speaker: "Car owner", line: "Shashin desu ka?", lineJa: "写真ですか？", meaning: "A photo?", question: "You want to ask permission clearly. What do you say?", target: 2, note: "Shashin o totte mo ii desu ka? clearly asks permission to take a photo." },
    { speaker: "Car owner", line: "Furui kuruma desu yo.", lineJa: "古い車ですよ。", meaning: "It is an old car.", question: "You want to know its model year. What do you ask?", target: 3, note: "Nan-nen shiki asks what year or model year something is." },
    { speaker: "Car owner", line: "Enjin mo kaizou shiteimasu.", lineJa: "エンジンも改造しています。", meaning: "The engine is modified too.", question: "You would like to see it. What do you ask?", target: 4, note: "…o mite mo ii desu ka? asks permission to look at something." }
  ],
  gaming: [
    { speaker: "Player", line: "Hitori de purei shiteimasu ka?", lineJa: "一人でプレイしていますか？", meaning: "Are you playing alone?", question: "You want to join them. What do you ask?", target: 0, note: "Issho ni means ‘together’." },
    { speaker: "Player", line: "Kono geemu o shitteimasu ka?", lineJa: "このゲームを知っていますか？", meaning: "Do you know this game?", question: "It is your first time playing. What do you say?", target: 1, note: "Hajimete desu means ‘It is my first time.’" },
    { speaker: "Staff member", line: "Seki o osagashi desu ka?", lineJa: "席をお探しですか？", meaning: "Are you looking for a seat?", question: "You see a nearby seat and want to check whether it is free. What do you ask?", target: 2, note: "Aiteimasu ka? asks whether a seat is open or unoccupied." },
    { speaker: "Player", line: "Kono geemu wa omoshiroi desu yo.", lineJa: "このゲームは面白いですよ。", meaning: "This game is fun.", question: "You do not recognise it and want to know what they are playing. What do you ask?", target: 3, note: "Nani o purei shiteimasu ka? asks what someone is playing." },
    { speaker: "Player", line: "Kore de owarimasu ka?", lineJa: "これで終わりますか？", meaning: "Are we stopping here?", question: "You would like one more round. What do you ask?", target: 4, note: "Mou ikkai means ‘one more time’ or ‘one more round.’" }
  ],
  people: [
    { speaker: "Local", line: "Konnichiwa, Yuki desu.", lineJa: "こんにちは、ユキです。", meaning: "Hello, I’m Yuki.", question: "You are meeting for the first time. What do you say?", target: 0, note: "Hajimemashite is used only when meeting someone for the first time." },
    { speaker: "Local", line: "Doko kara kimashita ka?", lineJa: "どこから来ましたか？", meaning: "Where are you from?", question: "How do you say you came from Scotland?", target: 1, note: "…kara kimashita means ‘I came from …’" },
    { speaker: "Local", line: "Hajimemashite.", lineJa: "はじめまして。", meaning: "Nice to meet you.", question: "You would like to ask their name politely. What do you say?", target: 2, note: "Onamae wa? is a short, polite way to ask someone’s name." },
    { speaker: "Local", line: "Nihongo ga jouzu desu ne.", lineJa: "日本語が上手ですね。", meaning: "Your Japanese is good.", question: "You want to explain that you are still learning. What do you say?", target: 3, note: "Benkyou-chuu means currently in the middle of studying." },
    { speaker: "Local", line: "Nihon wa nankai-me desu ka?", lineJa: "日本は何回目ですか？", meaning: "Which visit to Japan is this?", question: "It is your first visit. What do you say?", target: 4, note: "Nihon wa hajimete desu means ‘It is my first time in Japan.’" }
  ],
  emergency: [
    { speaker: "Passer-by", line: "Tsugi wa migi ni magatte kudasai.", lineJa: "次は右に曲がってください。", meaning: "Turn right next.", question: "Which phrase directly says ‘I don’t understand’?", target: 0, note: "Wakarimasen clearly says that you do not understand." },
    { speaker: "Passer-by", line: "Eki wa achira desu.", lineJa: "駅はあちらです。", meaning: "The station is over there.", question: "You did not hear them properly. What do you ask?", target: 1, note: "Mou ichido onegaishimasu asks for one more repetition." },
    { speaker: "Passer-by", line: "Mazu, kono michi o massugu…", lineJa: "まず、この道をまっすぐ…", meaning: "First, go straight along this road…", question: "They are speaking too quickly. What do you ask?", target: 2, note: "Motto yukkuri onegaishimasu asks them to speak more slowly." },
    { speaker: "Staff member", line: "Dou shimashita ka?", lineJa: "どうしましたか？", meaning: "What happened?", question: "You urgently need someone who speaks English. What do you ask?", target: 3, note: "Eigo wa hanasemasu ka? asks whether they speak English." },
    { speaker: "Passer-by", line: "Daijoubu desu ka?", lineJa: "大丈夫ですか？", meaning: "Are you okay?", question: "You need immediate help. What do you say?", target: 4, note: "Tasukete kudasai is a direct urgent request: ‘Please help me.’" }
  ]
};

function pronunciationGuide(word) {
  return pronunciationGuides[word.toLowerCase()] || word.toLowerCase().replaceAll(" ", " / ");
}

function phraseBreakdownMarkup(romaji) {
  return romaji.split(/\s+/).map(rawToken => {
    const key = rawToken.toLowerCase().replace(/[^a-z-]/g, "").replaceAll("-", "");
    const gloss = phraseGlosses[key] || "name / key word";
    return `<span><b>${rawToken.replace(/[?.!,]/g, "")}</b><small>${gloss}</small></span>`;
  }).join("");
}

// Native recordings are the most accurate option for a learning app. Add reviewed
// files here as they become available; Japanese SpeechSynthesis is the safe fallback.
const nativeAudioManifest = Object.freeze({
  // "restaurant.vocabulary.0": "audio/restaurant/vocabulary-01.mp3",
  // "restaurant.phrase.0": "audio/restaurant/phrase-01.mp3",
  // "restaurant.scene": "audio/restaurant/scene.mp3"
});

const japaneseSpeech = {
  voice: null,
  status: "loading",
  warningShown: false,
  currentRecording: null
};

function normaliseLanguageCode(code = "") {
  return code.replace("_", "-").toLowerCase();
}

function isJapaneseVoice(voice) {
  const language = normaliseLanguageCode(voice.lang);
  return language === "ja" || language === "ja-jp" || language.startsWith("ja-");
}

function japaneseVoiceScore(voice) {
  const language = normaliseLanguageCode(voice.lang);
  const name = voice.name.toLowerCase();
  let score = language === "ja-jp" ? 100 : 70;
  if (/natural|neural|premium|enhanced/.test(name)) score += 45;
  if (/nanami|keita|kyoko|otoya|haruka|sayaka/.test(name)) score += 30;
  if (/google.*日本語|google.*japanese/.test(name)) score += 25;
  if (voice.localService) score += 10;
  if (voice.default) score += 2;
  return score;
}

function selectBestJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  return speechSynthesis.getVoices()
    .filter(isJapaneseVoice)
    .sort((a, b) => japaneseVoiceScore(b) - japaneseVoiceScore(a))[0] || null;
}

function refreshJapaneseVoice(markMissing = false) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    japaneseSpeech.voice = null;
    japaneseSpeech.status = "unsupported";
  } else {
    japaneseSpeech.voice = selectBestJapaneseVoice();
    if (japaneseSpeech.voice) japaneseSpeech.status = "ready";
    else if (markMissing) japaneseSpeech.status = "missing";
  }
  updateVoiceStatusUI();
  return japaneseSpeech.voice;
}

function voiceStatusMessage() {
  if (japaneseSpeech.status === "ready") return {
    className: "voice-status ready",
    text: `Japanese voice · ${japaneseSpeech.voice.name}`
  };
  if (japaneseSpeech.status === "missing") return {
    className: "voice-status warning",
    text: "No Japanese voice is installed. English voices are blocked to protect pronunciation."
  };
  if (japaneseSpeech.status === "unsupported") return {
    className: "voice-status warning",
    text: "This browser cannot provide Japanese speech. English voices will not be used."
  };
  return { className: "voice-status loading", text: "Finding the best Japanese voice…" };
}

function voiceStatusMarkup() {
  const status = voiceStatusMessage();
  return `<div class="${status.className}" data-voice-status role="status" aria-live="polite"><span aria-hidden="true">${japaneseSpeech.status === "ready" ? "●" : "⚠"}</span><span>${status.text}</span></div>`;
}

function updateVoiceStatusUI() {
  const status = voiceStatusMessage();
  document.querySelectorAll("[data-voice-status]").forEach(element => {
    element.className = status.className;
    element.replaceChildren();
    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = japaneseSpeech.status === "ready" ? "●" : "⚠";
    const label = document.createElement("span");
    label.textContent = status.text;
    element.append(icon, label);
  });
}

function showJapaneseVoiceWarning(force = false) {
  if (!force && japaneseSpeech.warningShown) return;
  japaneseSpeech.warningShown = true;
  const message = japaneseSpeech.status === "unsupported"
    ? "Japanese speech is unavailable in this browser. English voices are blocked."
    : "No Japanese voice is installed. English voices are blocked to prevent incorrect pronunciation.";
  showToast(message);
}

function initialiseJapaneseSpeech() {
  refreshJapaneseVoice(false);
  if (japaneseSpeech.status === "unsupported") {
    setTimeout(() => showJapaneseVoiceWarning(), 300);
    return;
  }
  speechSynthesis.addEventListener?.("voiceschanged", () => refreshJapaneseVoice(false));
  setTimeout(() => {
    if (!refreshJapaneseVoice(true)) showJapaneseVoiceWarning();
  }, 1800);
}

async function waitForJapaneseVoice() {
  const immediate = refreshJapaneseVoice(false);
  if (immediate) return immediate;
  if (japaneseSpeech.status === "unsupported") return null;

  return new Promise(resolve => {
    let settled = false;
    const finish = voice => {
      if (settled) return;
      settled = true;
      speechSynthesis.removeEventListener?.("voiceschanged", onVoicesChanged);
      resolve(voice);
    };
    const onVoicesChanged = () => {
      const voice = refreshJapaneseVoice(false);
      if (voice) finish(voice);
    };
    speechSynthesis.addEventListener?.("voiceschanged", onVoicesChanged);
    setTimeout(() => finish(refreshJapaneseVoice(true)), 1400);
  });
}

async function playNativeRecording(audioKey) {
  const source = nativeAudioManifest[audioKey];
  if (!source) return false;
  try {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    japaneseSpeech.currentRecording?.pause();
    const audio = new Audio(source);
    japaneseSpeech.currentRecording = audio;
    await audio.play();
    return true;
  } catch {
    return false;
  }
}

const defaultState = { xp: 320, streak: 7, completed: { restaurant: 50 }, lastScenario: "restaurant", sound: true };
let state = loadState();
let currentView = "learn";
let lesson = null;
let toastTimer;

const root = document.querySelector("#view-root");

function loadState() {
  try { return { ...defaultState, ...JSON.parse(localStorage.getItem("tabi-state") || "{}") }; }
  catch { return { ...defaultState }; }
}

function saveState() {
  localStorage.setItem("tabi-state", JSON.stringify(state));
  updateChrome();
}

function overallProgress() {
  const total = scenarios.reduce((sum, s) => sum + (state.completed[s.id] || 0), 0);
  return Math.round(total / scenarios.length);
}

function updateChrome() {
  document.querySelector("#xp-count").textContent = `${state.xp} XP`;
  document.querySelector("#streak-count").textContent = state.streak;
  const progress = overallProgress();
  document.querySelector("#sidebar-progress").style.width = `${progress}%`;
  document.querySelector("#sidebar-progress-label").textContent = `${progress}% trip ready`;
  document.querySelector("#sound-toggle").classList.toggle("muted", !state.sound);
  document.querySelector("#sound-toggle span").textContent = state.sound ? "♪" : "×";
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function scenarioCard(s) {
  const progress = state.completed[s.id] || 0;
  const status = progress === 100 ? "READY" : progress ? `${progress}%` : s.level;
  return `<article class="scenario-card" data-scenario="${s.id}" style="--accent:${s.accent}" tabindex="0" role="button" aria-label="Open ${s.title}">
    <div class="scenario-top"><span class="scenario-icon">${s.icon}</span><span class="level">${status}</span></div>
    <h3>${s.title}</h3><p>${s.description}</p>
    <span class="content-count">${s.words.length} words · ${s.phrases.length} phrases · ${s.phrases.length * 2} questions</span>
    <div class="card-footer"><div class="card-progress"><span style="width:${progress}%"></span></div><small>${progress ? progress + "%" : "BEGIN"}</small></div>
  </article>`;
}

function renderLearn() {
  const progress = overallProgress();
  const recent = scenarios.find(s => s.id === state.lastScenario) || scenarios[2];
  root.innerHTML = `<div class="page-enter">
    <section class="welcome">
      <div><span class="eyebrow">${new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(new Date()).toUpperCase()}</span><h1>Ready for your next <span>adventure?</span></h1><p>Ten useful minutes now. A calmer moment in Japan later.</p></div>
      <div class="confidence-ring" style="--progress:${progress * 3.6}deg"><span>${progress}%<small>TRIP READY</small></span></div>
    </section>
    <section class="continue-card">
      <div class="continue-copy"><span class="continue-label">✦ CONTINUE YOUR JOURNEY</span><h2>${recent.icon} ${recent.title}</h2><p>${recent.description}</p>
        <div class="lesson-progress-label"><span>Scenario progress</span><strong>${state.completed[recent.id] || 0}%</strong></div><div class="progress-track"><span style="width:${state.completed[recent.id] || 0}%"></span></div>
        <button class="primary-button" data-start="${recent.id}">${(state.completed[recent.id] || 0) === 100 ? "Practise again" : "Continue lesson"}<span class="arrow">→</span></button>
      </div><div class="scene-illustration"><div class="plate"><span>${recent.icon}</span></div></div>
    </section>
    <div class="section-head"><div><h2>Choose your situation</h2><p>Learn for the moments you’re actually going to have.</p></div><button class="text-button" id="shuffle-scenario">SURPRISE ME ↗</button></div>
    <section class="scenario-grid">${scenarios.map(scenarioCard).join("")}</section>
    <div class="section-head"><div><h2>Quick confidence drills</h2><p>Short practice for high-pressure moments.</p></div></div>
    <section class="quick-grid">
      <button class="quick-card" data-start="emergency"><span class="quick-card-icon">🛟</span><span><h3>I need help</h3><p>Practise slowing a conversation down and asking for help.</p></span><span class="go">›</span></button>
      <button class="quick-card" data-start="everyday"><span class="quick-card-icon" style="color:var(--cyan);background:rgba(92,231,215,.08)">⚡</span><span><h3>60-second warm-up</h3><p>Refresh your essentials.</p></span><span class="go">›</span></button>
    </section>
  </div>`;
  bindCards();
  document.querySelector("#shuffle-scenario").addEventListener("click", () => startLesson(scenarios[Math.floor(Math.random() * scenarios.length)].id));
}

function renderPractice() {
  root.innerHTML = `<div class="page-enter"><section class="practice-hero"><span class="eyebrow">PRACTICE LAB</span><h1>Turn recognition into instinct.</h1><p>Pick the skill you want to sharpen. No school bells, no red pen.</p></section>
    <div class="practice-list">
      <button class="practice-item" data-random><span class="practice-item-icon">⚡</span><span><h3>Rapid-fire survival mix</h3><p>Random questions from every real-world scenario.</p></span><span class="tag">2–3 MIN</span></button>
      <button class="practice-item" data-start="emergency"><span class="practice-item-icon">🛟</span><span><h3>Pressure-proof phrases</h3><p>Ask people to repeat, slow down, or speak English.</p></span><span class="tag">ESSENTIAL</span></button>
      <button class="practice-item" data-start="people"><span class="practice-item-icon">💬</span><span><h3>Conversation starter</h3><p>Introduce yourself and keep a friendly chat moving.</p></span><span class="tag">SOCIAL</span></button>
      <button class="practice-item" data-start="trains"><span class="practice-item-icon">🎧</span><span><h3>Station listening</h3><p>Hear the words that matter when the platform is busy.</p></span><span class="tag">AUDIO</span></button>
    </div></div>`;
  bindCards();
  document.querySelector("[data-random]").addEventListener("click", () => startLesson(scenarios[Math.floor(Math.random() * scenarios.length)].id));
}

function renderProgress() {
  const ready = scenarios.filter(s => (state.completed[s.id] || 0) === 100).length;
  root.innerHTML = `<div class="page-enter"><section class="progress-hero"><span class="eyebrow">YOUR JOURNEY</span><h1>Small steps. Real confidence.</h1><p>You’re building the Japanese that will make your trip feel easier.</p></section>
    <div class="stats-grid"><article class="stat-card"><span>TRIP READINESS</span><strong>${overallProgress()}%</strong></article><article class="stat-card"><span>TOTAL XP</span><strong>${state.xp}</strong></article><article class="stat-card"><span>SCENARIOS READY</span><strong>${ready}/10</strong></article></div>
    <div class="section-head"><div><h2>Scenario confidence</h2><p>Tap any situation to practise it again.</p></div></div>
    <section class="scenario-breakdown">${scenarios.map(s => `<div class="breakdown-row" data-start="${s.id}" role="button" tabindex="0"><div class="breakdown-name"><span>${s.icon}</span><strong>${s.title}</strong></div><div class="breakdown-bar"><span style="width:${state.completed[s.id] || 0}%"></span></div><small>${state.completed[s.id] || 0}%</small></div>`).join("")}</section></div>`;
  bindCards();
}

function renderProfile() {
  root.innerHTML = `<div class="page-enter empty-profile"><span class="avatar">JM</span><h1>Jaydan’s Japan journey</h1><p>Scotland → Japan · Survive, thrive, and find the good ramen.</p><button class="secondary-button" id="reset-progress">Reset prototype progress</button></div>`;
  document.querySelector("#reset-progress").addEventListener("click", () => { state = structuredClone(defaultState); saveState(); renderProfile(); showToast("Progress reset"); });
}

function bindCards() {
  document.querySelectorAll("[data-scenario], [data-start]").forEach(el => {
    const id = el.dataset.scenario || el.dataset.start;
    el.addEventListener("click", () => startLesson(id));
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startLesson(id); } });
  });
}

function navigate(view) {
  currentView = view;
  lesson = null;
  document.querySelectorAll("[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  ({ learn: renderLearn, practice: renderPractice, progress: renderProgress, profile: renderProfile }[view] || renderLearn)();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildScenarioRounds(scenario) {
  const sourceRounds = scenario.scene.rounds || scenarioPrompts[scenario.id] || scenario.phrases.map((phrase, index) => ({
    speaker: "Local",
    line: phrase[0],
    lineJa: phrase[2],
    meaning: phrase[1],
    question: `You need to say “${phrase[1]}”. Which Japanese reply is correct?`,
    target: index,
    note: `${phrase[0]} means “${phrase[1]}”.`
  }));

  return sourceRounds.map((round, roundIndex) => {
    const phraseCount = scenario.phrases.length;
    const phraseOffset = (roundIndex * 2) % phraseCount;
    const phraseOrder = Array.from({ length: phraseCount }, (_, position) => (position + phraseOffset) % phraseCount);
    const choices = phraseOrder.map(phraseIndex => ({
      romaji: scenario.phrases[phraseIndex][0],
      japanese: scenario.phrases[phraseIndex][2],
      phraseIndex
    }));
    const meaningCount = sourceRounds.length;
    const meaningOffset = (roundIndex * 2 + 1) % meaningCount;
    const meaningOrder = Array.from({ length: meaningCount }, (_, position) => (position + meaningOffset) % meaningCount);
    const meaningChoices = meaningOrder.map(sourceIndex => ({
      text: sourceRounds[sourceIndex].meaning,
      sourceIndex
    }));
    return {
      ...round,
      place: round.place || scenario.scene.place,
      choices,
      answer: choices.findIndex(choice => choice.phraseIndex === round.target),
      meaningChoices,
      meaningAnswer: meaningChoices.findIndex(choice => choice.sourceIndex === roundIndex)
    };
  });
}

function startLesson(id) {
  const scenario = scenarios.find(s => s.id === id);
  if (!scenario) return;
  state.lastScenario = id;
  saveState();
  const rounds = buildScenarioRounds(scenario);
  lesson = { scenario, step: 0, word: 0, round: 0, phase: "meaning", rounds, meaningResults: Array(rounds.length).fill(null), results: Array(rounds.length).fill(null), answered: false, xpEarned: 0 };
  renderLesson();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function lessonPercent() {
  if (lesson.step === 2) {
    const completedUnits = lesson.round * 2 + (lesson.phase === "reply" ? 1 : 0) + 1;
    return Math.round(64 + (completedUnits / (lesson.rounds.length * 2)) * 26);
  }
  return [12, 42, 0, 100][lesson.step] || 0;
}

function renderLesson() {
  const s = lesson.scenario;
  root.innerHTML = `<div class="lesson-shell page-enter"><div class="lesson-top"><button class="close-lesson" aria-label="Close lesson">×</button><div class="progress-track"><span style="width:${lessonPercent()}%"></span></div><small>${lessonPercent()}%</small></div><div id="lesson-stage"></div></div>`;
  document.querySelector(".close-lesson").addEventListener("click", () => navigate(currentView));
  renderLessonStage();
}

function renderLessonStage() {
  const stage = document.querySelector("#lesson-stage");
  const s = lesson.scenario;
  if (lesson.step === 0) {
    const word = s.words[lesson.word];
    stage.innerHTML = `<section class="lesson-stage"><span class="stage-kicker">VOCABULARY · ${lesson.word + 1} OF ${s.words.length}</span><h1>Meet the words that matter.</h1><p class="stage-subtitle">Listen, say it out loud, then move on when it feels familiar.</p>
      ${voiceStatusMarkup()}
      <article class="word-card"><div class="word-emoji">${s.icon}</div><div class="japanese-word">${word[0]}</div><div class="word-kana">${word[1]}</div><div class="word-meaning">${word[2]}</div><div class="pronunciation-guide"><span>PRONOUNCE</span><strong>${pronunciationGuide(word[0])}</strong><small>Each dot marks one beat. Hold consecutive vowels and pause at [pause].</small></div><button class="listen-button" data-speak="${word[1]}" data-audio-key="${s.id}.vocabulary.${lesson.word}">🔊 Hear it in Japanese</button></article>
      <div class="lesson-actions">${lesson.word > 0 ? '<button class="secondary-button" id="word-back">Back</button>' : ""}<button class="primary-button" id="word-next">${lesson.word === s.words.length - 1 ? "Useful phrases" : "Next word"} →</button></div></section>`;
    bindSpeak();
    document.querySelector("#word-next").addEventListener("click", () => {
      if (lesson.word < s.words.length - 1) lesson.word++;
      else lesson.step = 1;
      renderLesson();
      if (lesson.step === 1) window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelector("#word-back")?.addEventListener("click", () => { lesson.word--; renderLessonStage(); });
  } else if (lesson.step === 1) {
    stage.innerHTML = `<section class="lesson-stage"><span class="stage-kicker">USEFUL PHRASES</span><h1>Keep these in your pocket.</h1><p class="stage-subtitle">You don’t need perfect grammar. You need phrases people understand. <span class="lesson-count">${s.phrases.length} phrases · ${s.phrases.length * 2} scenario questions</span></p>${voiceStatusMarkup()}<div class="phrase-list">${s.phrases.map((p, index) => `<article class="phrase-card"><div class="phrase-copy"><strong>${p[0]}</strong><span class="phrase-japanese">${p[2]}</span><p>${p[1]}</p><details class="phrase-breakdown"><summary>Break it down</summary><div class="breakdown-tokens">${phraseBreakdownMarkup(p[0])}</div><div class="use-example"><span>USE IT</span>${phraseUseCases[s.id]?.[index] || "Use this when the situation matches the meaning above."}</div></details></div><button class="mini-listen" data-speak="${p[2]}" data-audio-key="${s.id}.phrase.${index}" aria-label="Listen to ${p[0]} in Japanese">♪</button></article>`).join("")}</div><div class="lesson-actions"><button class="secondary-button" id="stage-back">Back</button><button class="primary-button" id="stage-next">Try ${lesson.rounds.length}-moment scenario →</button></div></section>`;
    bindSpeak();
    document.querySelector("#stage-back").addEventListener("click", () => { lesson.step = 0; lesson.word = s.words.length - 1; renderLesson(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    document.querySelector("#stage-next").addEventListener("click", () => { lesson.step = 2; renderLesson(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  } else if (lesson.step === 2) {
    const round = lesson.rounds[lesson.round];
    const isMeaningPhase = lesson.phase === "meaning";
    const isLastRound = lesson.round === lesson.rounds.length - 1;
    const question = isMeaningPhase ? "What does this phrase mean?" : round.question;
    const answerMarkup = isMeaningPhase
      ? round.meaningChoices.map((choice, index) => `<button class="answer" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span class="answer-copy meaning-choice"><strong>${choice.text}</strong></span></button>`).join("")
      : round.choices.map((choice, index) => `<button class="answer" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span class="answer-copy"><strong>${choice.romaji}</strong><small>${choice.japanese}</small></span></button>`).join("");
    stage.innerHTML = `<section class="lesson-stage"><span class="stage-kicker">${isMeaningPhase ? "LISTEN & UNDERSTAND" : "CHOOSE YOUR REPLY"} · MOMENT ${lesson.round + 1} OF ${lesson.rounds.length}</span><h1>${isMeaningPhase ? "What did they say?" : "How do you respond?"}</h1><p class="stage-subtitle">${isMeaningPhase ? "Listen and read the Japanese, then choose its meaning." : "Now choose the Japanese reply that keeps the conversation moving."}</p>
      <div class="scenario-moments" aria-label="Scenario progress">${lesson.rounds.map((_, index) => `<span class="moment-pill ${index < lesson.round ? "done" : ""} ${index === lesson.round ? "current" : ""}">${index < lesson.round ? "✓" : index + 1}</span>`).join("")}</div>${voiceStatusMarkup()}
      <div class="round-phases" aria-label="Two-part test"><span class="${isMeaningPhase ? "current" : "done"}"><b>${isMeaningPhase ? "1" : "✓"}</b> Understand</span><i>→</i><span class="${!isMeaningPhase ? "current" : ""}"><b>2</b> Reply</span></div>
      <article class="dialogue-card"><div class="scene-header"><span>${s.icon}</span><div><h3>${round.place}</h3><p>${isMeaningPhase ? "First: understand what you hear" : "Second: choose your reply"}</p></div></div><div class="speech"><div class="speech-copy"><small>${round.speaker}</small><strong>“${round.line}”</strong><span class="speech-japanese">${round.lineJa}</span></div><button class="dialogue-listen" data-speak="${round.lineJa}" data-audio-key="${s.id}.scene.${lesson.round}" aria-label="Listen to the Japanese dialogue">🔊</button></div></article>
      <p class="question-copy">${question}</p><div class="answer-grid">${answerMarkup}</div><div class="feedback" id="answer-feedback"></div>
      <div class="lesson-actions"><button class="secondary-button" id="stage-back">${isMeaningPhase ? "Back to phrases" : "Review meaning"}</button><button class="primary-button" id="scenario-next" disabled>${isMeaningPhase ? "Choose your reply" : isLastRound ? "Finish scenario" : "Next moment"} →</button></div></section>`;
    bindSpeak();
    if (isMeaningPhase) speak(round.lineJa, `${s.id}.scene.${lesson.round}`);
    document.querySelector("#stage-back").addEventListener("click", () => {
      if (isMeaningPhase) lesson.step = 1;
      else lesson.phase = "meaning";
      lesson.answered = false;
      renderLesson();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelectorAll("[data-answer]").forEach(btn => btn.addEventListener("click", () => answerQuestion(Number(btn.dataset.answer))));
    document.querySelector("#scenario-next").addEventListener("click", () => {
      if (isMeaningPhase) {
        lesson.phase = "reply";
        lesson.answered = false;
        renderLesson();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (!isLastRound) {
        lesson.round++;
        lesson.phase = "meaning";
        lesson.answered = false;
        renderLesson();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        lesson.step = 3;
        completeLesson();
        renderLesson();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  } else {
    const correctAnswers = lesson.meaningResults.filter(Boolean).length + lesson.results.filter(Boolean).length;
    const totalQuestions = lesson.rounds.length * 2;
    stage.innerHTML = `<section class="lesson-stage complete-card"><div class="complete-badge">✓</div><span class="stage-kicker">SCENARIO COMPLETE</span><h1>${s.title}: one step closer.</h1><p>You understood and replied to all ${lesson.rounds.length} moments, scoring <strong>${correctAnswers} of ${totalQuestions}</strong> first time.</p><div class="xp-earned">${lesson.xpEarned ? `✦ +${lesson.xpEarned} XP` : "✓ Practice complete"}</div><div><button class="primary-button" id="return-home">Back to my journey →</button></div></section>`;
    document.querySelector("#return-home").addEventListener("click", () => navigate("learn"));
  }
}

function answerQuestion(index) {
  if (lesson.answered) return;
  lesson.answered = true;
  const round = lesson.rounds[lesson.round];
  const isMeaningPhase = lesson.phase === "meaning";
  const correct = isMeaningPhase ? round.meaningAnswer : round.answer;
  document.querySelectorAll("[data-answer]").forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
  });
  const feedback = document.querySelector("#answer-feedback");
  const success = index === correct;
  if (isMeaningPhase) lesson.meaningResults[lesson.round] = success;
  else lesson.results[lesson.round] = success;
  feedback.className = `feedback show ${success ? "success" : "error"}`;
  feedback.innerHTML = isMeaningPhase
    ? `<strong>${success ? "Exactly — you understood them." : `Not quite — it means “${round.meaning}”`}</strong><br>Now use that meaning to choose your reply.`
    : `<strong>${success ? "Nice — that’s the right reply." : "Not quite — the correct phrase is highlighted."}</strong><br>${round.note}`;
  document.querySelector("#scenario-next").disabled = false;
  if (success) softChime();
}

function completeLesson() {
  const id = lesson.scenario.id;
  const old = state.completed[id] || 0;
  state.completed[id] = Math.max(100, old);
  lesson.xpEarned = old < 100 ? 25 : 0;
  state.xp += lesson.xpEarned;
  saveState();
}

function bindSpeak() {
  document.querySelectorAll("[data-speak]").forEach(button => button.addEventListener("click", () => speak(button.dataset.speak, button.dataset.audioKey)));
}

async function speak(japaneseText, audioKey) {
  if (!state.sound) { showToast("Sound is muted"); return; }
  if (nativeAudioManifest[audioKey] && await playNativeRecording(audioKey)) return;

  const voice = japaneseSpeech.voice || selectBestJapaneseVoice() || await waitForJapaneseVoice();
  if (!voice) {
    showJapaneseVoiceWarning(true);
    return;
  }

  japaneseSpeech.currentRecording?.pause();
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(japaneseText);
  utterance.voice = voice;
  utterance.lang = "ja-JP";
  utterance.rate = .82;
  utterance.pitch = 1;
  utterance.onerror = event => {
    if (event.error !== "interrupted" && event.error !== "canceled") showToast("The Japanese voice could not play on this device.");
  };
  speechSynthesis.speak(utterance);
}

function softChime() {
  if (!state.sound || !("AudioContext" in window || "webkitAudioContext" in window)) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  const ctx = new Ctx();
  [523.25, 659.25, 783.99].forEach((freq, i) => {
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.frequency.value = freq; gain.gain.setValueAtTime(.0001, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.06, ctx.currentTime + .02 + i*.06); gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .3 + i*.06); osc.connect(gain).connect(ctx.destination); osc.start(ctx.currentTime + i*.06); osc.stop(ctx.currentTime + .4 + i*.06);
  });
}

document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
document.querySelector(".profile-button").addEventListener("click", () => navigate("profile"));
document.querySelector("#sound-toggle").addEventListener("click", () => { state.sound = !state.sound; saveState(); showToast(state.sound ? "Sound on" : "Sound muted"); });

updateChrome();
initialiseJapaneseSpeech();
renderLearn();
