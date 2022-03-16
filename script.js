// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

  var hasPassword = '';
  var passwordLength  = 0;
  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumeric = false;
  var hasSpecialCharacters  = false;
  var possibleLowercase = 'abcdefghijklmnopqurstuvwxyz';
  var possibleUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var possibleNumeric = '01234567890';
  var possibleSpecialCharacters = '~!@#$%^&*()?{}'
  
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
  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
