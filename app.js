'use strict'; 

// Create welcome banner based on user's name
   var userName = prompt('Hello, what is your name?');
   document.write('Welcome ' + userName + '!');
   console.log('userName:' + userName);
 
// Create about me guessing game using yes/no prompts and if/else statements

function aboutMe() {
  var questionOne;
  questionOne = prompt('Am I short?', 'Yes or No').toLowerCase();
  console.log('Am I short?: ' + questionOne);
  if (questionOne == 'yes') {
  // console.log('Correct!');
  alert('Correct!');
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }

  var questionTwo;
  questionTwo = prompt('Is my hair straight?', 'Yes or No').toLowerCase();
  console.log('Is my hair straight?: ' + questionTwo);
  if (questionTwo == 'no') {
  // console.log('Correct!');
  alert('Correct!');
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }

  var questionThree;
  questionThree = prompt('Is my favorite rap artist Nas?', 'Yes or No').toLowerCase();
  console.log('Is my favorite rap artist Nas?: ' + questionThree);
  if (questionThree == 'yes') {
  // console.log('Correct!');
  alert('Correct!');
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }

  var questionFour;
  questionFour = prompt('Do I ragequit in video games?', 'Yes or No').toLowerCase();
  console.log('Do I ragequit in video games?: ' + questionFour);
  if (questionFour == 'no' || 'not really' || 'sometimes' || 'a little') {
  // console.log('Correct!');
  alert('Correct!');
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }

  var questionFive;
  questionFive = prompt('Is my daughter skinny?', 'Yes or No').toLowerCase();
  console.log('Is my daughter skinny?: ' + questionFive);
  if (questionFive == 'no') {
  // console.log('Correct!');
  alert('Correct!');
  } else {
  // console.log('WRONG!')
  alert('WRONG!');
  }

  // Create a 6th question that ask the user to guess a number.
  // include too low or too high alerts
  // 4 chances

  // Create a 7th question that has multiple correct answers
  // 6 chances
  // prompt will end when guessed correctly or run out of out chances

}

function goodbye() {
  document.write('Good bye ' + userName + '! We hope to see you again!')
}

// make a counter to keep track correctly guessed answers