// length of password for first if statement
var randomPassword;
// var selections holds empty array since multiple arrays being input down below in selections
var selections = [];
var numbers;
var characters;
var upperCase;
var lowerCase;

// var numberCharacters = arrayCharacterCodes(48, 57);
// var lowerCaseCharacters = arrayCharacterCodes(65,90);
// var upperCaseCharacters = arrayCharacterCodes(97,122);
// var symbolCharacters = arrayCharacterCodes(33, 47);



// Array variables
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "@", "^", "~", "_"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// generate password function start
function generatePassword() {
  randomPassword = parseInt(prompt("Input password length between 8-128"));
  // if user selects ok or cancel on prompt, alert is returned
  if (!randomPassword) {
    alert("You need to enter a value!");
    writePassword();
    return;
    // TO DO - I WANT THIS TO LOOP IF NO SELECTION IS MADE !!!! //
  }
  // if password < 8 or password is > 128 then alert returns they must select betweeen 8-128 characters and returned to character input
  else if (randomPassword < 8 || randomPassword > 128) {
    randomPassword = parseInt(alert("Error!   Password length must be between 8-128 characters!"));
    writePassword();
    return;
    // otherwise the confirm prompts will start and cycle through all 4 options
  } else {
    var numbers = confirm("Do you want to use numbers? Select OK for YES and CANCEL for NO.")
    var characters = confirm("Do you want special characters? Select OK for YES and CANCEL for NO.");
    var upperCase = confirm("Do you want Upper case letters? Select OK for YES and CANCEL for NO.");
    var lowerCase = confirm("Do you want lower case letters? Select OK for YES and CANCEL for NO.");
  };

  // if statements of refactored code for user selection.  First if statement gives all selections via OR operator
  if (numbers || characters || upperCase || lowerCase) {
  // if numbers are selected, it will concatenate with the other selections made by user
    if (numbers) {
      selections = selections.concat(numericCharacters);
    }
    // if characters are selected, it will concatenate with the other selections made by user
    if (characters) {
      selections = selections.concat(specialCharacters);
    }
    // if upperCase letters are selected, it will concatenate with the other selections made by user
    if (upperCase) {
      selections = selections.concat(upperCaseLetters);
    }
    // if lowerCase letters are selected, it will concatenate with the other selections made by user
    if (lowerCase) {
      selections = selections.concat(lowerCaseLetters);
    }
  }
  // if no selections are made the alert has the user select one choice, and returns to original character amount input
  else {
    alert("Please select at least one of the choices!");
    writePassword();
    return;
  }

  // for loop to get password created, var mixCharaters listed as empty array to hold random array characters selected
  // the .push method adds elements to the end of an array and returns the new array length which is Math.random slections
  var mixCharacters = [];
  var i;
  for (i = 0; i < randomPassword; i++) {
    mixCharacters.push(selections[Math.floor(Math.random() * selections.length)]);
  }
  // used .join ("") instead of string array to remove commas between random password characters, then returned password
  var password = mixCharacters.join("");
  return (password);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

