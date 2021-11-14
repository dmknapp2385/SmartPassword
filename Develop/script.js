// Array of prompts with answers
var prompts = [
  {
    criteria: 'Upper case'

  },
  {
    criteria: 'Lower case'
  },
  {
    criteria: 'Special Character'
  },
  {
    criteria: 'Number',
    number:"",
    randomNumber: function () {
       this. number = Math.floor(Math.random() * 10);
    } 
  }
];

// function for loop to get prompt responses
var generateCriteria = function () {
  for (i = 0; 1 < 4; i++) {
    var yesOrNo = window.prompt("Would you like your password to contain" + prompts[i].criteria + "? Respond with 'yes' or 'no'.");
    yesOrNo = yesOrNo.toLowerCase();

    var pickedPrompt = prompts[i]

    if (!yesOrNo || yesOrNo === 'no') {
        pickedPrompt.value= false;
    }
    else {
        pickedPrompt.value= true;
    }
  }
  // for loop to check that at least one prompt was a 'yes'
  var checkCriteria = function () {
      for (i = 0; i < 4; i++) {
        counter = ''
        if (prompts[i].value === true) {
          counter += 1;
        }
      }
      if (counter = 0) {
      window.alert("You must check at aleast one criteria. Please try again.");
      generateCriteria();
    } 
  }
}

var generatePassword = function () {
  generateCriteria();
  // prompt to ask for length of password
  var passwordLength = window.prompt("How many characters would you like your password to be? Choose a number between 8 and 123.")
  
  passwordLength = parseInt(passwordLength);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writepassword()); 