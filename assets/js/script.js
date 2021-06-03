
// Assignment code here
var startPassword = function(){
  window.alert("Enter your password criteria")
};

startPassword();

// Arrays
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "@", "^", "~"]
upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var passwordLength = window.prompt("Input password length between 8-128"); 

var minLength = passwordLength;
var maxLength = passwordLength;


// accept only number input from numbers between 8-128
if (minLength < 8) {
  window.alert("Chose a higher number between 8-128");
} else if (maxLength > 128) {
  window.alert("Chose a lower number between 8-128");
} else {
  window.alert("This number works, you selected " + passwordLength + "!")
};

var characterTypes = window.prompt("Choose your charater types");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

