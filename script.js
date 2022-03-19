// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
debugger

//Setting up my variables
  var generatedPassword = '';
  var possibleLowercase = 'abcdefghijklmnopqurstuvwxyz'.split('');
  var possibleUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var possibleNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var possibleSpecialCharacters = '~!@#$%^&*()?{}'.split('');


//Prompts to collect user responses and confirm those responses
  let lowercase = window.confirm('Please indicate whether or not your password will contain lowercase characters');
    if (lowercase) {
      window.alert('Your password will include lowercase');
    } else {
      window.alert('Your password will not include lowercase');
    }
  
  let uppercase = window.confirm('Please indicate whether or not your password will contain uppercase characters');
    
    if (uppercase) {
      window.alert('Your password will include uppercase');
    } else {
      window.alert('Your password will not include uppercase');
    }
  
  let numeric = window.confirm('Please indicate whether or not your password will contain numeric characters');
    
    if (numeric) {
      window.alert('Your password will include numeric');
    } else {
      window.alert('Your password will not include numeric');
    }

  let special = window.confirm('Please indicate whether or not your password will contain special characters');
     
    if (special) {
      window.alert('Your password will include special');
    } else if (!lowercase && !uppercase && !numeric && !special) {
      window.alert('You must include at least one character type');
      generatePassword();
      return;
    } else {
      window.alert('Your password will not include special');
    }

  let enteredLength = window.prompt('How long would you like your password to be? Please choose between 8 or 128 characters');
        if (parseInt(enteredLength) >= 8 && parseInt(enteredLength) <= 128) {
          window.confirm(`You have chosen to have ${parseInt(enteredLength)} characters in your password.`);
        } else {
          window.alert('Your password must be between 8 or 128 characters!');
          generatePassword();
          return;
        }
  
  //Making the password length selected by the user into an integer
  var passwordLength = parseInt(enteredLength);
  console.log(passwordLength);

//Function to check and see if the password length has been meet
  function isPasswordLengthMet (password, targetLength) {
    return password.length === targetLength;
  };

//Checking against user choices for characters and length to generate password
    for (i = 0; i < 512; i++) {

    if (lowercase) {
       generatedPassword +=
       possibleLowercase[Math.floor(Math.random() * possibleLowercase.length)];
      if (isPasswordLengthMet(generatedPassword, passwordLength)) {
      return generatedPassword;
      }
     }



    if (uppercase) {
      generatedPassword +=
      possibleUppercase[Math.floor(Math.random() * possibleUppercase.length)];
      if (isPasswordLengthMet(generatedPassword, passwordLength)) {
        return generatedPassword;
       }
    }


    if (numeric) {
      generatedPassword +=
      possibleNumeric[Math.floor(Math.random() * possibleNumeric.length)];
      if (isPasswordLengthMet(generatedPassword, passwordLength)) {
        return generatedPassword;
    }
  }


  
    if (special) {
      generatedPassword +=
      possibleSpecialCharacters[Math.floor(Math.random() * possibleSpecialCharacters.length)];
      if (isPasswordLengthMet(generatedPassword, passwordLength)) {
        return generatedPassword;
      } 
    }

    if (generatedPassword.length >= passwordLength) {
      return generatedPassword;
    }
  }
  }
   

// Write password to the #password input
function writePassword() {
  // debugger
  var password = generatePassword();
  debugger
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
