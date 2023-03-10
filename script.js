// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(a,b,c,d,e)
{
  var password = "";
  var characters = "";

  if (b === true) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (c === true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (d === true) {
    characters += "0123456789";
  }
  if (e === true) {
    characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  }

  for (var i = 0; i < a; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  password = "hey";
  return password;
}

// Write password to the #password input
function writePassword() {
  var passlength = prompt("How many characters would you like your password to be? (8-128)");
  if (passlength < 8 || passlength > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }else if (passlength = isNaN(passlength)) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  var passlength = parseInt(passlength);
  var passlower = confirm("Would you like to include lowercase letters?");
  var passupper = confirm("Would you like to include uppercase letters?");
  var passnumber = confirm("Would you like to include numbers?");
  var passspecial = confirm("Would you like to include special characters?");

if (passlower === false && passupper === false && passnumber === false && passspecial === false) {
  alert("Please choose at least one character type");
}

  var password = generatePassword(passlength, passlower, passupper, passnumber, passspecial);
  // var passwordText = document.querySelector("#password");

console.log(password);
  // passwordText.value = password;
  document.getElementById("password").innerHTML = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
