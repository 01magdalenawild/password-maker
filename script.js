// Assignment code here
// create arrays for lowercase uppercase numbers and special
var lowerstring="abcdefghijklmnopqrstuvwxyz"
var uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalChar="0123456789"
var specialChar="!@#$%^&*{}[]\|:;.~+=-_"
var lowercaseArray= lowerstring.split("")
console.log(lowercaseArray)
function generatePassword (){
  var passLength=window.prompt("enter desired password length");
  console.log(passLength)
  var acceptLower=window.confirm("would you like lowercase letters?");
  var acceptUpper=window.confirm("would you like uppercase letters?");
var acceptNumbers=window.confirm("would you like numbers?");
var acceptSpecialcharacters=window.confirm("would you like special characters?")
if (passwordLengthUser >128) {
  alert("Password must not have more than 128 characters");
  return""

}
console.group(acceptLower,acceptNumbers,acceptUpper,acceptSpecialcharacters)
  return ""
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
