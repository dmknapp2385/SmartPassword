// Array of prompts with answers
var prompts = [
  {
    criteria: 'Upper case',
    character:"",
    randomNumber: function () {
      number = Math.floor(Math.random() * 26) + 65;
      this.character = String.fromCharCode(number);
    } 
  },
  {
    criteria: 'Lower case',
    character:"",
    randomNumber: function () {
      number = Math.floor(Math.random() * 26) + 97;
      this.character = String.fromCharCode(number);
    } 
  },
  {
    criteria: 'Special Character',
    character:"",
    randomNumber: function () {
      number = Math.floor(Math.random() * 32) + 33;
      // need to exclude the 10 numbers in sequence that correspond to integers 0-9
      if (number >= 48 && number <= 57) {
        this.randomNumber();
      }
      else {
        this.character =String.fromCharCode(number);
      }
    } 
  },
  {
    criteria: 'Number',
    character:"",
    randomNumber: function () {
       this.character = String(Math.floor(Math.random() * 10));
    } 
  }
];

// for loop to check that at least one prompt was a 'yes'
var checkCriteria = function () {
  var counter = 0
  for (i = 0; i < 4; i++) {
    if (prompts[i].value) {
    counter += 1;
    }
  }
  if (counter === 0) {
    window.alert("You must check at aleast one criteria. Please try again.");
    generateCriteria();
  }
}

// function for loop to get prompt responses
function generateCriteria() {
  for (i = 0; i < 4; i++) {
    var pickedPrompt = prompts[i];
    var yesOrNo = window.prompt("Would you like your password to contain " + pickedPrompt.criteria + "? Respond with 'yes' or 'no'.");
    yesOrNo = yesOrNo.toLowerCase();

    if (yesOrNo === 'yes') {
        pickedPrompt.value= true;
    }
    else {
        pickedPrompt.value= false;
    }
  }
  checkCriteria();
}

// prompt for password length
var passwordLength = function () {
  var promptLength = window.prompt("How many characters would you like your password to be? Choose a number between 8 and 123.")
  
  promptLength = parseInt(promptLength);

  if (promptLength >= 8 && promptLength <= 123) {
    return promptLength;
  }

  else {
    window.alert("This is not within the length requirements. Please choose again");
    return passwordLength();
  }
}

var confirmCriteria = function (promptlength) {
  var confirmedCriteria = []
  for (var i = 0; i < 4; i++) {
    console.log(prompts[i].criteria)
    if (prompts[i].value) {
      confirmedCriteria.push(prompts[i].criteria);
    };
  }
  var confirmCriteriaString = confirmedCriteria.join(', ');
  var confirmPrompt = window.confirm("You would like your password to contain " + confirmCriteriaString + " and be " + promptlength + " characters long. Is this correct?");

  if (confirmPrompt) {
    return true;
  }
    
  else {
     generateCriteria();
  }
}


var generatePassword = function () {
  generateCriteria();
  var promptLength = passwordLength();
  if (confirmCriteria(promptLength));
    var password = '';
    var counter = 0;
    // while loop to loop through number of characters in the promptlength
    while (counter < promptLength) {
    //choose random number between 0 and 4, check prompts index at that number and see if value is true, if it is, use the random number function from that prompt to generate random number/character
      var chosenPrompt = Math.floor(Math.random() * 4)
      if (prompts[chosenPrompt].value) {
        prompts[chosenPrompt].randomNumber();
        password += prompts[chosenPrompt].character
        counter += 1;
      }
    }
    return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);