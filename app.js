'use strict'; 

// Create welcome banner based on user's name
   var userName = prompt('Hello, what is your name?');
   document.write('Welcome ' + userName + '!');
   console.log('userName:' + userName);
 
// Create about me guessing game using yes/no prompts and if/else statements

//delete about me function
//create multiple smaller functions
//wrap variables into the functions
//call functions at the end 


  var totalCorrectQuestions = 0;
  var totalQuestions = 7;
  var count = 0;

function short(){
  var questionOne;
  questionOne = prompt('Am I short?', 'Yes or No').toLowerCase();
  console.log('Am I short?: ' + questionOne);
  if (questionOne == 'yes') {
  // console.log('Correct!');
  alert('Correct!');
  totalCorrectQuestions++;
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }
}


function hair(){
  var questionTwo;
  questionTwo = prompt('Is my hair straight?', 'Yes or No').toLowerCase();
  console.log('Is my hair straight?: ' + questionTwo);
  if (questionTwo == 'no') {
  // console.log('Correct!');
  alert('Correct!');
  totalCorrectQuestions++;
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }
}


function artist(){
  var questionThree;
  questionThree = prompt('Is my favorite rap artist Nas?', 'Yes or No').toLowerCase();
  console.log('Is my favorite rap artist Nas?: ' + questionThree);
  if (questionThree == 'yes') {
  // console.log('Correct!');
  alert('Correct!');
  totalCorrectQuestions++;
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }
}


function rageQuit(){
  var questionFour;
  questionFour = prompt('Do I ragequit in video games?', 'Yes or No').toLowerCase();
  console.log('Do I ragequit in video games?: ' + questionFour);
  if (questionFour == 'no') {
  // console.log('Correct!');
  alert('Correct!');
  totalCorrectQuestions++;
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }
}


function chunky(){
  var questionFive;
  questionFive = prompt('Is my daughter chunky?', 'Yes or No').toLowerCase();
  console.log('Is my daughter chunky?: ' + questionFive);
  if (questionFive == 'yes') {
  // console.log('Correct!');
  alert('Correct!');
  totalCorrectQuestions++;
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }
}

//   // Create a 6th question that ask the user to guess a number.
//   // include too low or too high alerts
//   // 4 chances


function number(){
  do {
    var questionSix;
    questionSix = prompt('Guess my favorite number between 1 and 50');
    console.log('my favorite number: ' + questionSix);
    if (questionSix == 21) {
      alert('Correct!');
      totalCorrectQuestions++;
      break;
    } else if (questionSix < 21) {
      alert('Too low');
    } else if (questionSix > 21) {
      alert('Too high');
    } 
    count++;
  } while (count < 4);
}  
short();
hair();
artist();
rageQuit();
chunky();
number();
//   do {
//     var questionSeven = ['black', 'cerulean', 'crimson', 'mauve', 'teal']
//     var colors = prompt('Guess my favorite color.').toLowerCase();
//     if (questionSeven[0] === colors || questionSeven[1] === colors || questionSeven[2] === colors || questionSeven[3] === colors || questionSeven[4] === colors) {
//       alert('Correct!');
//       totalCorrectQuestions++;
//       break;
//     } else if (!colors) {
//       alert('Please input a color');
//     } else {
//       alert('Sorry, that\'s not my favorite color.');
//     } 
//     count++;
//   } while (count < 6);
  
//   alert('My favorite colors are ' + questionSeven + '.')
//   alert(totalCorrectQuestions + ' out of ' + totalQuestions)




//   // Create a 7th question that has multiple correct answers
//   // 6 chances
//   // prompt will end when guessed correctly or run out of out chances


// function goodbye() {
//   document.write('Good bye ' + userName + '! We hope to see you again!')
// }

// // make a counter to keep track correctly guessed answer