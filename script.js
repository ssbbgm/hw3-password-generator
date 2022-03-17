// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

  var generatedPassword = '';
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
    } else if (!hasLowercase && !hasLowercase && !hasNumeric && !hasSpecialCharacters) {
      window.alert('You must include at least one character type');
      end;
    } else {
      window.confirm('Your password will not include special');
    }


  let enteredLength = window.prompt('How long would you like your password to be? Please choose between 8 or 128 characters');
    if (parseInt(enteredLength) >= 8 && parseInt(enteredLength) <= 128) {
      window.confirm(`You have chosen to have ${parseInt(enteredLength)} characters in your password.`);
    } else {
      window.alert('Your password must be between 8 or 128 chracters!');
    }
  
  var passwordLength = parseInt(enteredLength);
  console.log(passwordLength);

    for (i = 0; i < passwordLength; i++) {

     if (hasLowercase) {
       generatedPassword +=
       possibleLowercase[Math.floor(Math.random() * possibleLowercase.length)];
     }
     console.log(hasLowercase);
     if (hasUppercase) {
      generatedPassword +=
      possibleUppercase[Math.floor(Math.random() * possibleUppercase.length)];
    }
    console.log(hasUppercase);
    if (hasNumeric) {
      generatedPassword +=
      possibleNumeric[Math.floor(Math.random() * possibleNumeric.length)];
    }
    console.log(hasNumeric);
    if (hasSpecialCharacters) {
      generatedPassword +=
      possibleSpecialCharacters[Math.floor(Math.random() * possibleSpecialCharacters.length)];
    }
    console.log(hasSpecialCharacters);
    if (generatedPassword.length === passwordLength) {
      break;
    }
  }
    return generatedPassword;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
