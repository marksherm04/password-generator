
// Assignment code here
var startPassword = function(){
  window.alert("Enter your password criteria")
};

startPassword();

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

