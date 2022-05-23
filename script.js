// Assignment code here

// password variables:
var selectNumber = "123456789"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOP"
var speacialCharatcter = "!@#$%&*"

function writePassword() {

var length = passwordLength ();
if (length < 8 || length > 128) {
  window.alert (Pick any number between 8 - 128)
};
return passwordLength();
}







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
