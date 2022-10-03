// Assignment code here



// create arrays for lowercase uppercase numbers and special
var lowerstring = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalChar = "0123456789"
var specialChar = "!@#$%^&*{}[]\|:;.~+=-_"
var lowercaseArray = lowerstring.split("")
console.log(lowercaseArray)
//event listener to generate function
function generatePassword() {

  var passwordLength =Number ( window.prompt("enter desired password length"))
  console.log(passwordLength)
  if (passwordLength > 128 || passwordLength < 8||isNaN(passwordLength)) {
    alert("Password must have a valid number between 8-128");
    return "please try again"


  }
  //character choice of one true
  var acceptLower = window.confirm("would you like lowercase letters?");
  var acceptUpper = window.confirm("would you like uppercase letters?");
  var acceptNumbers = window.confirm("would you like numbers?");
  var acceptSpecialcharacters = window.confirm("would you like special characters?");
  if (!acceptLower&&!acceptUpper&&!acceptNumbers&&!acceptSpecialcharacters){
    alert("please select atleast one character type");
    return "please try again"
  }
  // helps with available characters based on input
  var totalstring= ""
if(acceptLower){
  totalstring=totalstring.concat(lowerstring)
}
if(acceptUpper){
  totalstring=totalstring.concat(uppercaseChar)
}
if(acceptNumbers){
  totalstring=totalstring.concat(numericalChar)
}
if(acceptSpecialcharacters){
  totalstring=totalstring.concat(specialChar)
}
var totalarray=totalstring.split("")
console.log(totalarray)
var passwordstring=""
for(var i=0;i <passwordLength;i++){
  var index=Math.floor(Math.random()*totalarray.length)
  console.log (index)
   passwordstring += totalarray[index]
}
return passwordstring




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
