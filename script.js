const vowels = ["َ", "ِ", "ُ", "ا", "و", "ي", "ْ", "", "", "", "َ", "ِ", "ُ"];
const consonants = ["ض", "ص",  "ث",  "ق",  "ف",  "ف",  "غ",  "ع",  "ه",  "خ",  "ح",  "ج",  "د",  "ش",  "س",  "ب",  "ل",  "ت",  "ن",  "م",  "ك",  "ط",  "ر",  "ذ",  "ز",  "ظ"];
const letters = [];
const createAlphabet = () => {
  consonants.forEach(element => {
    for (let i = 0; i < vowels.length; i++) {
      letters.push(element + vowels[i]);
    }
  });
};
createAlphabet();
const questions = [
  ["My father", "اَبي"],
  ["Mountain", "خَبَل"],
  ["Door", "باب"],
  ["Duck", "بَطَّة"],
  ["House", "بَيْت"],
  ["Girl", "بِنْت"],
  ["Write", "اَكْتُبُ"],
  ["I", "انا"],

  ["My mother", "اُمي"],
  ["My brother", "اَخي"],
  ["My sister", "اُخْتي"],
  ["Grandfather", "خَدي"],
  ["Grandmother", "خَدَّتي"],
  ["Dates", "تَمْرٌ"],
  ["Crocodile", "تِمْساحٌ"],
  ["Apple", "تُفاحٌ"],
  ["Figs", "تينٌ"],
  ["Notebook", "دَفْتَرٌ"],

  ["Big (male)", "كَبير"],
  ["Small (male)", "صَغيرٌ"],
  ["Tall (male)", "طَويلٌ"],
  ["Short (male)", "قَصيرٌ"],
  ["Big (female)", "كَبيرَةٌ"],
  ["Small (female)", "صَغيرَةٌ"],
  ["Tall (female)", "طَويلَةٌ"],
  ["Short (female)", "قَصيرَةٌ"],
  ["Fox", "ثَعْلَبٌ"],
  ["Snake", "ثُعْبانٌ"],
  ["Fruits (harvest)", "ثِمارٌ"],
  ["Eat", "اَكُلُ"],

  ["Like", "اُحِبُ"],
  ["Red", "اَحْمَر"],
  ["Yellow", "اَصْفَر"],
  ["Green", "اَخْضَر"],
  ["Blue", "اَزْرَق"],
  ["Color", "لَوْنٌ"],
  ["Camel", "جَمَل"],
  ["Cheese", "جُبْنٌ"],
  ["Bridge", "جِسْرٌ"],
  ["Hen (Chicken)", "دَجاجَةٌ"],
  ["Neighbors", "جيرانٌ"],
  ["Stars", "نُجومٌ"],

  ["Want", "اُريدُ"],
  ["Black", "اَسْوَد"],
  ["White", "اَبْيَض"],
  ["Book", "كِتاب"],
  ["Chair", "كُرْسِي"],
  ["Pen", "قَلَم"],
  ["Flag", "عَلَم"],
  ["Horse", "حِصان"],
  ["Seeds", "حُبوب"],
  ["Milk", "حَليب"],
  ["Bus", "حافِلَة"],
  ["Whale", "حوت"],
  ["Drink", "اشْرَب"],
  ["Board", "سَبورَةٌ"],

  ["Write", "يَكْتُنُ"],
  ["Pink", "وَرْدِي"],
  ["Orange", "بُرْتُقالِي"],
  ["Brown", "بُنِّي"],
  ["Purple", "بَنَفْسَجِي"],
  ["Bag", "حَقيبَةٌ"],
  ["He", "هو"],
  ["Sheep", "خَروفٌ"],
  ["Peach", "خَوْخٌ"],
  ["Bread", "خُبْزٌ"],
  ["Cucumber", "خِيارٌ"],
  ["Ring", "خاتَمٌ"],
  ["Incense", "بَخورٌ"],
  ["Palms", "نَخيلٌ"],

  ["Hand", "يَدٌ"],
  ["School", "مَدْرَسَةٌ"],
  ["Classroom", "صَفٌ"],
  ["Go", "اذهَبُ"],
  ["to (direction)", "إلى"],
  ["Beautiful", "خَميلُ"],
  ["Bear", "دُبٌ"],
  ["Dirham", "دِرْهَمٌ"],
  ["Study", "أَدْرُسُ"],
  ["Worm", "دودَةٌ"],
  ["Garden", "حَديقَةٌ"],

  ["Ruler", "مِسْطَرَةٌ"],
  ["Scissors", "مِقَصٌ"],
  ["Don't want", "لا أُريدُ"],
  ["Island", "ججَزيرَةٌ"],
  ["What", "ماذا"],
  ["Giraffe", "زَرافَةٌ"],
  ["Flowers", "زُهورُ"],
  ["Button", "زِرٌ"],
  ["Deer", "غَزالٌ"],
  ["Visit", "أَزورُ"],

  ["Sun", "شَمْسٌ"],
  ["Honey", "عَسَلٌ"],
  ["Eraser", "مِمحاةٌ"],
  ["Sharpener", "مِبْراةٌ"],
  ["I have", "عِنْدي"],
  ["I don't have", "ليس عِنْدي"],
  ["Fish", "سَمَكَةٌ"],
  ["Draw", "أَرْسُمُ"],
  ["Curtain", "سَتارَةٌ"],
  ["Clock", "ساعَةٌ"],
  ["Market", "سوقٌ"],
  ["Laundry", "غَسيلٌ"],

  ["Bird", "عُصْفورٌ"],
  ["Glue", "صَمْغ"],
  ["Prefer", "أُفَضل"],
  ["Grapes", "عِنَب"],
  ["Falcon", "صَقْر"],
  ["Box", "صُنْدوق"],
  ["Zero", "صِفْر"],
  ["Soap", "صابون"],
  ["Chick", "صوص"],
  ["Juice", "عَصير"],
  ["Pineapple", "أَناناس"],

  ["Candy", "حَلْوى"],
  ["Delicious", "لَذيذٌ"],
  ["Cold", "بارِدٌ"],
  ["Hot", "ساخِنٌ"],
  ["Because (male)", "لأَنَهُ"],
  ["Tea", "شايٌ"],
  ["Light (bulb)", "ضَوْءٌ"],
  ["Frog", "ضِفْدَعٌ"],
  ["Molars", "َُضُروسٌ"],
  ["Vegetables", "خُضارٌ"],
  ["Eggs", "بَيْضٌ"],
  ["Earth", "أَرْضٌ"],
  ["Water", "ماءٌ"],

  ["Carpet", "بِساطٌ"],
  ["Breakfast", "فَطورٌ"],
  ["Cat", "قِطٌ"],
  ["Drink", "أَشْرَبُ"],
  ["Doctor", "طَبيبٌ"],
  ["Beach", "شاطئٌ"],
  ["Birds", "طُيورٌ"],
  ["Airplane", "طائِرَةٌ"],
  ["Watermelon", "بِطيخٌ"],

  ["Wake up", "أَسْتَيْقِظُ"],
  ["Lunch", "غَداءٌ"],
  ["Dinner", "عَشاءٌ"],
  ["Rice", "أَرُزٌ"],
  ["Sandwich", "شَطيرَةٌ"],
  ["Reindeer", "ظَبْيٌ"],
  ["Look", "أَنْظُرُ"],
  ["Shadow", "ظِلُ"],
  ["Glasses", "نَظّارَةٌ"],
  ["Clean", "نَظيفٌ"],

  ["Near", "قَريبٌ"],
  ["Far from", "بَعيدٌ"],
  ["Bigger than", "أَكْبَرُ من"],
  ["Smaller than", "أَصْغَرُ من"],
  ["Playground", "مَلْعَبٌ"],
  ["Restaurant", "مطْعَمٌ"],
  ["Airport", "مَطارٌ"],

  ["Butterfly", "فَراشَةٌ"],
  ["Policeman", "شُرْطِيٌ"],
  ["Principal", "مُديرٌ"],
  ["Police station", "مرْكَزُ الشُرْطَةِ"],
  ["Dress", "فُسْتانٌ"],
  ["Jump", "أَقْفِزُ"],
  ["Apple", "تُفاحَةٌ"],
  ["Light (not heavy)", "خَفيفٌ"],
  ["Summer", "صَيْفُ"],

  ["Pupil", "تِلْميذٌ"],
  ["Table", "طاوِلَةٌ"],
  ["Teacher", "مُعَلّمٌ"],
  ["In front of", "أمامَ"],
  ["Behind", "خَلْفَ"],
  ["Where", "أَيْنَ"],
  ["Head", "رَأْسُ"],
  ["Pomegranate", "رُمّانٌ"],
  ["Leg", "رِجْلٌ"],
  ["Happy", "مَسْرورٌ"],
  ["Feather", "ريشَةٌ"],
  ["Monkey", "قِرْدٌ"],

  ["Above", "فَوْقَ"],
  ["Under", "تَحْتَ"],
  ["Beside", "بِجانبِ"],
  ["but", "لكن"],
  ["Tail", "ذَيْلٌ"],
  ["Corn", "ذُرَةٌ"],
  ["Wolf", "ذِئْبُ"],
  ["Shoes", "حِذاءٌ"],
  ["Arm", "ذِراعٌ"],
  ["Seeds", "بُذورٌ"],

  ["Wide", "واسِعٌ"],
  ["Doctor", "طِبيبٌ"],
  ["Hospital", "مُسْتَشفى"],
  ["To work", "يَعْمَلُ"],
  ["Food", "طَعامٌ"],
  ["Return", "أَعودُ"],
  ["Live", "أَعيشُ"],
  ["Cake", "كَعْكٌ"],

  ["Pilot", "طَيّارٌ"],
  ["Cook", "طَبّاخٌ"],
  ["Engineer", "مُهَنْدِسٌ"],
  ["Painter", "رَسّامٌ"],
  ["Painting room", "غُرْفَةُ الرِسْمِ"],
  ["Room", "غُرْفَةٌ"],
  ["Cover", "غِطاءٌ"],
  ["Forest", "غابَةٌ"],
  ["Dive", "أَغوصُ"],

  ["Eye", "عَيْنٌ"],
  ["Nose", "أَنْفٌ"],
  ["Mouth", "فَمٌ"],
  ["Ear", "أُذُنٌ"],
  ["Foot", "قَدَمٌ"],
  ["Shirt", "قَميصٌ"],
  ["Monkey", "قِرْدٌ"],
  ["Dance", "أَرْقُصُ"],
  ["Friend", "صَديقٌ"],
  ["Heavy", "ثَقيلٌ"],

  ["Face", "وَجْهٌ"],
  ["Hair", "شَعْرٌ"],
  ["Shoulder", "كَتِفٌ"],
  ["Leg", "رِجْلٌ"],
  ["Knee", "رُكْبَةٌ"],
  ["Back", "ظَهْرٌ"],
  ["Trophy", "كَأْسٌ"],
  ["Ball", "كُرَةٌ"],
  ["Shop", "دُكانٌ"],
  ["Cry", "يَبْكي"],
  ["Cup", "كوبٌ"],
  ["Window", "شُباكٌ"],
  ["Abdomen", "بَطْنٌ"],

  ["Beautiful", "جَميلٌ"],
  ["Trousers", "بِنْطالٌ"],
  ["Yoghurt", "لَبَنٌ"],
  ["Tongue", "لِسانٌ"],
  ["Toy", "لُعْبَةٌ"],
  ["No", "لا"],
  ["Science", "عُلومٌ"],
  ["Dog", "كَلْبٌ"],
  ["Elephant", "فيلٌ"],

  ["Lemon", "لَيْمونٌ"],
  ["Right", "يَمينٌ"],
  ["Banana", "مَوْزٌ"],
  ["Key", "مِفْتاحٌ"],
  ["Pens", "أَقْلامٌ"],

  ["Sing", "أُغَني"],
  ["Tiger", "نَمِرٌ"],
  ["See", "أَرى"],
  ["Hear", "أَسْمَحُ"],
  ["Touch", "أَلْمِسُ"],
  ["Palm", "نَخْلَةٌ"],
  ["Half", "نِصْفٌ"],
  ["Sleep", "أَنامُ"],
  ["Light (свет)", "نورٌ"],
  ["Smell", "أَشُمُ"],

  ["Fruits", "فَواكِهٌ"],
  ["Talk", "أَتَحَدَثُ"],
  ["Buy", "أَشْتَري"],
  ["Gift", "هَدِيَةٌ"],
  ["Crescent", "هِلالٌ"],
  ["Hoopoe", "هُدْهُدٌ"],
  ["Phone", "هاتِفٌ"],

  ["Bucket", "دَلْوٌ"],
  ["Puppy", "جَرْوٌ"],
  ["Lion", "أَسَدٌ"],
  ["Rabbit", "أَرْنَبٌ"],
  ["Boy", "وَلَدٌ"],
  ["Roses", "وُرودٌ"],
  ["Pillow", "وِسادَةٌ"],
  ["One", "واحِدٌ"],
  ["Peacock", "ظاووسٌ"],

  ["Cow", "بَقَرَةٌ"],
  ["Grass", "عُشْبٌ"],
  ["Carrot", "جَزَرٌ"],
  ["Eyes", "عُيونٌ"],
  ["Car", "سَيارَةٌ"],
  ["Good", "جَيِدٌ"],
  ["To clean up", "يُنَظِفُ"],
  ["Left", "يَسارٌ"],

  ["Ajman", "عجمان"],
  ["Mall of the Emirates", "مول الامارات"],
  ["Fujairah", "الفجيرة"],
  ["Ras al Khaimah", "راس الخيمة"],
  ["Um al-Quwain", "أم القيوين"],
  ["Abu Dhabi", "أبو ظبي"],
  ["Sharjah", "الشارقة"],

  ["Taller than", "اطول من"],
  ["Shorter than", "اقصر من"],
  ["More beautiful than", "اجمل من"],
  ["Because (female)", "لانها"],

  ["Weather", "الطقس"],
  ["Hot (weather)", "حار"],
  ["Stormy", "عاصف"],
  ["Cloudy", "غائم"],
  ["Sunny", "مشمس"],
  ["Snowy", "مثلج"],
  ["Raining", "ممطر"],
  ["Normal (weather)", "معتدل"],
  ["Humid", "رطب"],

  ["Spring", "الربيع"],
  ["Winter", "الشتاء"],
  ["Autumn", "الخريف"],
  ["Winter clothes", "ملابس ثقيلة"],
  ["Ski", "اتزلج"],
  ["Ice", "الثلج"],
  ["Summer clothes", "ملابس خفيفة"],
  ["Swim", "اسبح"],
  ["Wear", "البس"],

  ["Court", "محكمة"],
  ["Company", "شركة"],
  ["Office", "مكتب"],
  ["Lawyer", "محامي"],
  ["Employee", "موظف"],

  ["Body", "جسمي"],
  ["Walk", "امشي"],
  ["Hold", "امسك"],

  ["Neck", "رقبت"],
  ["Arrived", "وصل"],
  ["Friends", "اصدقاء"],
  ["My friend (female)", "صديقتي"],
  ["Theme park", "مدينة ملاهي"],

  ["Gardens", "حدائق"],
  ["Trees", "شجر"],
  ["Flowers", "زهور"],

  ["Butterflies", "فراشات"],
  ["Birds", "عصافير"],
  ["Sit", "يجلس"],
  ["Run", "أجري"],
  ["Play", "أَلْعَبُ"],

  ["Fork", "شوكة"],
  ["Knife", "سكين"],
  ["Dish", "طبق"],
  ["Kitchen", "مطبخ"],
  ["Scoop", "مغرفة"],
  ["Spoon", "معلقة"],
  ["To scoop", "أغرف"],
  ["To cook", "أطبخ"],
  ["To cut (knife)", "أقطع"],
  ["Cupboard", "جزانة"],
  ["Lamp", "يجلس"],
  ["Bed", "سرير"],

  ["To stick", "ألصقُ"],
  ["To cut (scissors)", "أكصُ"],
  ["To erase", "أمسحُ"],
  ["Pencil case", "المقلمة"],

  ["Canteen", "المقصف"],
  ["Library", "المكتبة"],
  ["To read", "أكرأُ"],
  ["Clinic", "العيادة"],
  ["Computer room", "غُرفة الحاسوب"],

  ["Shark", "قِرْشٌ"],
  ["Cheerful", "بَشوشٌ"],
  ["Nest", "عُشٌ"],
  ["Street", "شارِعٌ"],
  ["Tree", "شَجَرَةٌ"],

  ["Whales", "حيتان"],

  ["Places", "أَماكِنُ"],

  ["In evening", "مَساءً"],
  ["In morning", "صَباحًا"],
  ["Swing", "أُرْجوحَةٌ"],

  ["Spacious", "واسِعٌ"],
  ["Bathroom", "حَمامٌ"]
];

let totallyAnswered = 0, correctlyAnswered = 0;
let question, questionIndex, correctAnswer, wrongAnswer;
const previousQuestions = [, , , , ,];


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = array => { //this function only shuffles items in array. Required later for random positioning of correct answer in the list
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const generateWord = () => { // I made wrong answers to generate randomly as children were able to figure out correct answer by eliminating known wrong answers. In previous versions wrong answers were selected from real Arabic words list (not matching correct answer of course)
  shuffle(letters);
  let wordLength = (correctAnswer.length + 1) / 2; //our alphabet is build of syllables so we take half of correct answer word length. Because some answers shorter, longer or consist of two words.
  let syllables = letters.slice(0, wordLength);
  if ( // all verbs in arabic start with alif letter. This checks to make sure random answers look alike verb word, if question is about verb
    (correctAnswer.charAt(0) == "ا") |
    (correctAnswer.charAt(0) == "أ") |
    (correctAnswer.charAt(0) == "آ") |
    (correctAnswer.charAt(0) == "إ")
  ) {
    syllables.unshift("أ");
  }
  if (//this check if for female words. In Arabic they end with taa-marbouta letter. To make sure random answers are female-looking words
    (correctAnswer.charAt(correctAnswer.length - 1) == "ة") |
    (correctAnswer.charAt(correctAnswer.length - 2) == "ة")
  ) {
    syllables.push("ة");
  }
  if (correctAnswer.includes(" ")) { // this check for answers containing two words
    syllables[Math.round(correctAnswer.indexOf(" ") / 2)] = " ";
  }
  let answer = syllables.join(""); //finally we join random letters together to make random word in arabic. 
  return answer;
}

const askQuestion = () => {
  let answers = [];
  do {questionIndex = getRandomNumber(0, questions.length);} //select random word from questions array
  while (previousQuestions.includes(questionIndex)); // this ensures that same question is not asked few times in a row
  question = questions[questionIndex][0]; // question hint that will be displayed in English
  correctAnswer = questions[questionIndex][1]; //correct answer that will be added to answers list in Arabic
  answers.push(correctAnswer);
  previousQuestions.push(questionIndex);
  previousQuestions.shift();
  document.getElementById("question").innerHTML = question;
  // document.getElementById("picture").src = "snake.jpg";
  document.getElementById("picture").src = "../src/ara/" + question.toString().toLowerCase() + ".jpg";
  let radios = document.getElementsByName("answers"); //reset radio buttons
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
    }
  }
  for (let i = 1; i <= 5; i++) { //this cycle generates random 5 wrong answers for the test
    do {wrongAnswer = generateWord();} 
    while (answers.includes(wrongAnswer) | (correctAnswer == wrongAnswer));
    answers.push(wrongAnswer);
  }
  shuffle(answers); // randomly position correct answer
  for (let i = 0; i <= 5; i++) { // this cycle through answers to display all of them on the page
    document.getElementById(`answerLabel${i}`).innerHTML = answers[i];
  }
}

const checkAnswer = () => {
  let radios = document.getElementsByName("answers");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) { // checks if any answer selected
      totallyAnswered++;
      document.getElementById("totallyAnswered").innerHTML = `Answered questions: ${totallyAnswered}`;
      answer = document.getElementById(`answerLabel${i}`).innerHTML;
      if (answer == correctAnswer) { //correct answer
        correctlyAnswered++;
      } else { //wrong answer
        document.getElementById("textMistakes").innerHTML +=`[${question.replaceAll(" ","&nbsp")}&nbsp${correctAnswer.replaceAll(" ","&nbsp")}] `;
      }
      document.getElementById("correctAnswered").innerHTML =`Correct answers: ${Math.floor((correctlyAnswered / totallyAnswered) * 100)}%`;
      askQuestion(); //automatically ask next question
    }
  }
}
askQuestion();


