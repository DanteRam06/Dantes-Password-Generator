// Assignment code here
// This sets the minimum length of the pasword as well as storing all the characters that will be used
var charLength = 8;
var choiceChar = [];

//These are all the charcters that will be used when the passsword is generated
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numChar = ['1','2','3','4','5','6','7','8','9','0',];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','{','}','/','?','<','>'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Calls for the prompt of how the password is going to be generated 
//prompt is either true of flase, then generating  password when true
function writePassword() {
    var promptOne = getPrompt();

    if (promptOne) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
   
}}

 //generates password looping based on the character length
function generatePassword() {
  var password = '';
  for (var i = 0; i < charLength; i++) {
    //Takes a random integer between 0-1 multiplies by the length
    //Math.floor returns as a whole integer
    //password is updated with any character from the choiceChar array
    var randomLetter = Math.floor(Math.random() * choiceChar.length)
    password = password + choiceChar[randomLetter];
  }return password;
}

//Prompts for the password length only for integers
function getPrompt(){
  choiceChar = [];
  charLength = parseInt(prompt("How many characters would you like your password to be? (min 8/max 128)"));
//Makes sure the charcater length is between 8-128
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Character length must be between 8 - 128, Please try again");
    return false;
    //prompts for how the password will be put togther based on choices provided in the arrays created above
  }if (confirm("Would you like lowercase letters in the password?")) {
    choiceChar = choiceChar.concat(lowerChar);
  }if (confirm("Would you like uppercase letters in the password?")) {
    choiceChar = choiceChar.concat(upperChar);
  }if (confirm("Would you like special characters in the password?")){
    choiceChar = choiceChar.concat(specialChar);
  }if (confirm("Would you like numbers in the password?")){
    choiceChar = choiceChar.concat(numChar);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
