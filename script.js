import {questions} from "./questions.js"
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


