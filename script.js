// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

  var hasPassword = '';
  var passwordLength  = 0;
  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumeric = false;
  var hasSpecialCharacters  = false;
  var possibleLowercase = 'abcdefghijklmnopqurstuvwxyz'.split('');
  var possibleUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var possibleNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var possibleSpecialCharacters = '~!@#$%^&*()?{}'.split('');
  
  let lowercase = window.confirm('Please indicate whether or not your password will contain lowercase characters');
    
    if (lowercase) {
      hasLowercase = true;
      window.confirm('Your password will include lowercase');
    } else {
      window.confirm('Your password will not include lowercase');
    }
  
  let uppercase = window.confirm('Please indicate whether or not your password will contain uppercase characters');
    
    if (uppercase) {
      hasUppercase = true;
      window.confirm('Your password will include uppercase');
    } else {
      window.confirm('Your password will not include uppercase');
    }
  
  let numeric = window.confirm('Please indicate whether or not your password will contain numeric characters');
    
    if (numeric) {
      hasNumeric = true;
      window.confirm('Your password will include numeric');
    } else {
      window.confirm('Your password will not include numeric');
    }

  let special = window.confirm('Please indicate whether or not your password will contain special characters');
    
    if (special) {
      hasSpecialCharacters = true;
      window.confirm('Your password will include special');
    } else {
      window.confirm('Your password will not include special');
    }

  let enteredLength = window.prompt('How long would you like your password to be? Please choose between 8 or 128 characters');
    if (enteredLength > 8 || enteredLength < 128) {
      window.confirm(`You have chosen to have ${enteredLength} characters in your password.`);
    } else {
      window.alert('Your password must be between 8 or 128 chracters!');
    }
  let passwordLength = enteredLength;

  if (enteredLength) {
    if (hasUpperCase) {

    }
    }
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
