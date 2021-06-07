// length of password for first if statement
var randomPassword;
// selection by user to see which selections are made for arrays & other var used below
var selections;
var numbers;
var characters;
var upperCase;
var lowerCase;

// Arrays
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "@", "^", "~", "_"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 // generate password function start
function generatePassword() {
  randomPassword = parseInt(prompt("Input password length between 8-128"));

  if (!randomPassword) {
    alert("You need to enter a value!");
  }
  else if (randomPassword <= 8 || randomPassword >= 128) {
    randomPassword = parseInt(prompt("Error!   Password length must be between 8-128 characters!"))
  } else {
    var numbers = confirm("Do you want to use numbers?")
    var characters = confirm("Do you want special characters?");
    var upperCase = confirm("Do you want Upper case letters?");
    var lowerCase = confirm("Do you want lower case letters?");
  };

if (!numbers && !characters && !upperCase && !lowerCase) {
  // need alert here when they look through and don't select any options to work
}
// all 4 options selected
else if (numbers && characters && upperCase && lowerCase) {
  selections = numeric.concat(specialCharacters, upperCaseLetters, lowerCaseLetters);
}
// 3 selections made in different variances
else if (numbers && characters && upperCase) {
  selections = numeric.concat(specialCharacters && upperCaseLetters);
}
else if (numbers && characters && lowerCase) {
  selections = numeric.concat(specialCharacters && lowerCaseLetters);
}
else if (characters && upperCase && lowerCase) {
  selections = specialCharacters.concat(upperCaseLetters && lowerCaseLetters);
}
else if (numbers && upperCase && lowerCase) {
  selections = numeric.concat(upperCaseLetters && lowerCaseLetters);
}
// 2 selections made in different variances
else if (numbers && characters) {
  selections = numeric.concat(specialCharacters);
}
else if (numbers && upperCase) {
  selections = numeric.concat(upperCaseLetters);
}
else if (numbers && lowerCase) {
  selections = numeric.concat(lowerCaseLetters);
}
else if (characters && upperCase) {
  selections = specialCharacters.concat(upperCaseLetters);
}
else if (characters && lowerCase) {
  selections = specialCharacters.concat(lowerCaseLetters);
}
else if (upperCase && lowerCase) {
  selections = upperCaseLetters.concat(lowerCaseLetters);
}
// 1 selection made only
else if (numbers) {
  selections = numeric;
}
else if (characters) {
  selections = specialCharacters;
}
else if (upperCase) {
  selections = upperCaseLetters;
}
else if (lowerCase) {
  selections = lowerCaseLetters;
};

// for loop to get password created
for (var i = 0; i < randomPassword; i++) {
  var pickPassword = selections[Math.floor(Math.random() * selections.length)];
}
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").textContent;

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

