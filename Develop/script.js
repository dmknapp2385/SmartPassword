// Array of prompts with answers
var prompts = [
  {
    criteria: 'Upper case'
  },
  {
    criteria: 'Lower case'
  },
  {
    criteria: 'Number'
  },
  {
    criteria: 'Special Character'
  }
];

// function for loop to get array responses
var generateCriteria = function () {
  for (i = 0; 1 < 4; i++) {
    var yesOrNo = window.prompt("Would you like your password to contain" + prompts[i].criteria + "? Respond with 'yes' or 'no'.");
    yesOrNo = yesOrNo.toLowerCase();

    if (!yesOrNo || yesOrNo === 'no') {
      prompts[i].value = false;
    }
    else {
      prompts[i].value = true;
    }
  }
  var checkCriteria = function () {
    for (i = 0; i < 4; i++) {
      counter = ''
      criteriaChecked = []
      if (prompts[i].value === true) {
        counter += 1;
        criteriaChecked.push(i);
      }
    if (counter = 0) {
      window.alert("You must check at aleast one criteria. Please try again.");
      generateCriteria();
    }
    else{
      return criteriaChecked;
    }
  } 
}

var generatePassword = function () {
  generateCriteria();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writepassword); 