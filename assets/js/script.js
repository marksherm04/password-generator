// length of password for first if statement
var randomPassword;
// selection by user to see which selections are made for arrays & other var used below
var selections;
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
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "@", "^", "~", "_"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 // generate password function start
function generatePassword() {
  randomPassword = parseInt(prompt("Input password length between 8-128"));
  // if user selects ok or cancel on prompt, alert is returned
  if (!randomPassword) {
    alert("You need to enter a value!"); 
    // TO DO - I WANT THIS TO LOOP IF NO SELECTION IS MADE !!!! //
  }
  // if password < 8 or password is > 128 then alert returns they must select betweeen 8-128 characters
  else if (randomPassword < 8 || randomPassword > 128) {
    randomPassword = parseInt(alert("Error!   Password length must be between 8-128 characters!"));
   // TO DO - I WANT THIS TO LOOP IF NO SELECTION IS MADE !!!! //
    // otherwise the confirm prompts will start and cycle through all 4 options
  } else {
    var numbers = confirm("Do you want to use numbers?")
    var characters = confirm("Do you want special characters?");
    var upperCase = confirm("Do you want Upper case letters?");
    var lowerCase = confirm("Do you want lower case letters?");
};

  // if no slections are made, alert will show to tell the user to select at least one option
if (!numbers && !characters && !upperCase && !lowerCase) {
  selctions = alert("You must choose one option to generate your password!");
  console.log("This works");
}
// TODO - LOOP BACK TO CHOOSE CHARACTERS PROMPT ABOVE

// Using the .concat method to merge 2 or more arrays, it takes one of the arrays and connects
// (cont.) to the others chosen based on which selection the user makes, each array in the concatenation
// copies the object into a new array
// all 4 options selected
else if (numbers && characters && upperCase && lowerCase) {
  selections = numericCharacters.concat(specialCharacters, upperCaseLetters, lowerCaseLetters);
  console.log(selections);
}
// 3 selections made in different variances, will leave out the 4th input in the concatenation
else if (numbers && characters && upperCase) {
  selections = numericCharacters.concat(specialCharacters, upperCaseLetters);
  console.log(selections);
}
// 3 selections made
else if (numbers && characters && lowerCase) {
  selections = numericCharacters.concat(specialCharacters, lowerCaseLetters);
}
// 3 selections made
else if (characters && upperCase && lowerCase) {
  selections = specialCharacters.concat(upperCaseLetters, lowerCaseLetters);
}
// 3 selections made
else if (numbers && upperCase && lowerCase) {
  selections = numericCharacters.concat(upperCaseLetters, lowerCaseLetters);
}
// 2 selections made in different variances
else if (numbers && characters) {
  selections = numericCharacters.concat(specialCharacters);
  console.log(selections);
}
// 2 selections made
else if (numbers && upperCase) {
  selections = numericCharacters.concat(upperCaseLetters);
  console.log(selections);
}
// 2 selections made
else if (numbers && lowerCase) {
  selections = numericCharacters.concat(lowerCaseLetters);
}
// 2 selections made
else if (characters && upperCase) {
  selections = specialCharacters.concat(upperCaseLetters);
}
// 2 selections made
else if (characters && lowerCase) {
  selections = specialCharacters.concat(lowerCaseLetters);
}
// 2 selections made
else if (upperCase && lowerCase) {
  selections = upperCaseLetters.concat(lowerCaseLetters);
}
// 1 selection made only
else if (numbers) {
  selections = numericCharacters;
}
// 1 selection made
else if (characters) {
  selections = specialCharacters;
}
// 1 selection made
else if (upperCase) {
  selections = upperCaseLetters;
  console.log(selections);
}
// 1 selection made
else if (lowerCase) {
  selections = lowerCaseLetters;
};

// // for loop to get password created
var i;
for (i = 0; i < randomPassword.length; i++) {
var userSelections = selections[Math.floor(Math.random() * selections.length)];
    }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").textContent;

  passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

