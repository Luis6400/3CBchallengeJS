// Assignment Code
var generateBtn = document.querySelector("#generate");
var passlenthnum = 0;
function generatePassword(len, low, upp, num, spec) {
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upalphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var password = "";
  for (i = 0; i < len; i++) {
    var rand = Math.floor(Math.random() * 4);
    switch (rand) {
      case 0:
        if (low === true) {
          rand = Math.floor(Math.random() * alphabet.length);
          password += alphabet[rand];
        }
        break;
      case 1:
        if (upp === true) {
          rand = Math.floor(Math.random() * upalphabet.length);
          password += upalphabet[rand];
        }
        break;
      case 2:
        if (num === true) {
          rand = Math.floor(Math.random() * numbers.length);
          password += numbers[rand];
        }
        break;
      case 3:
        if (spec === true) {
          rand = Math.floor(Math.random() * specChar.length);
          password += specChar[rand];
        }
        break;
      case 4:
        break;
    }
  }
  //this long mess of code was my orginal attempt, but after helping Jahsper with his code
  //I made it more efficient and shorter
  /*
  var a = len;
  var count = 0;
  for (i = 0; i < len; i++) {
    var rand;
    var i;
    
    //all
    if (low === true && upp === true && num === true && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 5);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
          case 3:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
          case 4:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length | 0);
            password += special[rand];
            break;
        }
        
        count++;
      }
      //no spec
    } else if (low === true && upp === true && num === true && spec === false) {
      for (i = 0; i < len; i++) {
        rand = Math.floor(Math.random() * 4);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
          case 3:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
        }
        
      }
      //no num no spec
    } else if (low === true && upp === true && num === false && spec === false) {
      for (i = 0; i < len; i++) {
        rand = Math.floor(Math.random() * 3);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
          case 2:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
        }
        
      }
      //only low
    } else if (low === true && upp === false && num === false && spec === false) {
      for (i = 0; i < len; i++) {
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        rand = Math.floor(Math.random() * 25);
        password += alphabet[rand];
      }
      
      //no low
    } else if (low === false && upp === true && num === true && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 4);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
          case 3:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length);
            password += special[rand];
            break;
        }
        
      }
      //no low no spec
    } else if (low === false && upp === true && num === true && spec === false) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 3);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
        }
        
      }
      //no low no num
    } else if (low === false && upp === true && num === false && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 3);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
          case 2:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length);
            password += special[rand];
            break;
        }
        
      }
      //only upp
    } else if (low === false && upp === true && num === false && spec === false) {
      for (i = 0; i < a; i++) {
        var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        rand = Math.floor(Math.random() * 25);
        password += bigAlphabet[rand];
      }
      //no upp
    } else if (low === true && upp === false && num === true && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 4);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
          case 3:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length);
            password += special[rand];
            break;
        }
        
      }
      //no upp no spec
    } else if (low === true && upp === false && num === true && spec === false) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 3);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
        }
        
      }
      //no upp no num
    } else if (low === true && upp === false && num === false && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 3);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
          case 2:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length);
            password += special[rand];
            break;
        }
        
      }
      //only spec
    } else if (low === false && upp === false && num === false && spec === true) {
      for (i = 0; i < a; i++) {
        var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
        rand = Math.floor(Math.random() * special.length);
        password += special[rand];
      }
      //only num
    } else if (low === false && upp === false && num === true && spec === false) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 9);
        password += rand;
      }
      //no num
    } else if (low === true && upp === true && num === false && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 4);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            rand = Math.floor(Math.random() * 25);
            password += alphabet[rand];
            break;
          case 2:
            var bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            rand = Math.floor(Math.random() * 25);
            password += bigAlphabet[rand];
            break;
          case 3:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length);
            password += special[rand];
            break;
        }
        

      }
      //no upp no low
    } else if (low === false && upp === false && num === true && spec === true) {
      for (i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * 3);
        switch (rand) {
          case 0:
            i--;
            count--;
            break;
          case 1:
            rand = Math.floor(Math.random() * 9);
            password += rand;
            break;
          case 2:
            var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
            rand = Math.floor(Math.random() * special.length);
            password += special[rand];
            break;
        }
        
      }

    }
    
  }*/
  return password;
}

// Write password to the #password input
function writePassword() {
  var passlength = prompt("How many characters would you like your password to be? (8-128)");
  var passlengthnum = Number(passlength);
  if (passlengthnum < 8 || passlengthnum > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  // how to use typeof to check if it's a number?

  if (isNaN(passlengthnum)) {
    alert("Please choose a number between 8 and 128");
    return;
  }

  var passlower = confirm("Would you like to include lowercase letters?");
  var passupper = confirm("Would you like to include uppercase letters?");
  var passnumber = confirm("Would you like to include numbers?");
  var passspecial = confirm("Would you like to include special characters?");

  if (passlower === false && passupper === false && passnumber === false && passspecial === false) {
    alert("Please choose at least one character type");
  }

  var password = generatePassword(passlengthnum, passlower, passupper, passnumber, passspecial);
  // var passwordText = document.querySelector("#password");

  console.log(password);
  // passwordText.value = password;
  document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
