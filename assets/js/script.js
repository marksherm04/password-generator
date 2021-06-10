// length of password for first if statement
var randomPassword;
// selection by user to see which selections are made for arrays & other var used below
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
  // if password < 8 or password is > 128 then alert returns they must select betweeen 8-128 characters
  else if (randomPassword < 8 || randomPassword > 128) {
    randomPassword = parseInt(alert("Error!   Password length must be between 8-128 characters!"));
    writePassword();
    return;
    // TO DO - I WANT THIS TO LOOP IF NO SELECTION IS MADE !!!! //

    // otherwise the confirm prompts will start and cycle through all 4 options
  } else {
    var numbers = confirm("Do you want to use numbers?")
    var characters = confirm("Do you want special characters?");
    var upperCase = confirm("Do you want Upper case letters?");
    var lowerCase = confirm("Do you want lower case letters?");
  };

  if (numbers || characters || upperCase || lowerCase) {

    if (numbers) {
      selections = selections.concat(numericCharacters);
    }

    if (characters) {
      selections = selections.concat(specialCharacters);
    }

    if (upperCase) {
      selections = selections.concat(upperCaseLetters);
    }

    if (lowerCase) {
      selections = selections.concat(lowerCaseLetters);
    }
  }
  else {
    alert("Please select one of the choices!");
    writePassword();
    return;
  }

  // // for loop to get password created
  var mixCharacters = [];
  var i;
  for (i = 0; i < randomPassword; i++) {
    mixCharacters.push(selections[Math.floor(Math.random() * selections.length)]);
  }
  var password = mixCharacters.join('');
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

