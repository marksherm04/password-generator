
// Assignment code here
var passwordLength;

// Arrays
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "@", "^", "~", "_"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 
function generatePassword(){
  var passwordLength = parseInt(prompt("Input password length between 8-128"));

  if (!passwordLength) {
    alert("You need to enter a value!");
  }
  else if (passwordLength <= 8 || passwordLength >= 128) {
    passwordLength = parseInt(prompt("Error!   Password length must be between 8-128 characters!"))
  } else {
    var numbers = window.confirm("Do you want to use numbers?")
    var characters = window.confirm("Do you want special characters?");
    var upperLetters = window.confirm("Do you want Upper Case Letters?");
    var lowerLetters = window.confirm("Do you want Lower Case Letters?");
  };





// accept only number input from numbers between 8-128
// if (minLength < 8) {
//   window.alert("Chose a higher number between 8-128");
// } else if (maxLength > 128) {
//   window.alert("Chose a lower number between 8-128");
// } else {
//   window.alert("This number works, you selected " + passwordLength + "!")
// };



for(var i = 0; i < numeric.length; i++) {
};






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

