// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6




const caesarModule = (function () {
    // you can add any code you want within this function scope
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    function encodeOperate(input, shift) {
      let encodeReturn = [];
      for (let i = 0; i < input.length; i++) {
        let found = false;
        for (let j = 0; j < alphabet.length; j++) {
          if (shift < 0) {
            if (input[i] === alphabet[j]) {
              let shiftExtra = ((shift + j) + 26) % 26; 
              encodeReturn.push((alphabet[shiftExtra]))
              found = true; 
            }
          } 
          else if (input[i] === alphabet[j]) {
            let shifty = (shift + j) % 26; 
            encodeReturn.push((alphabet[shifty]))
            found = true;  
          }
        } 
        if (!found) {
          encodeReturn.push(input[i]); 
        }
      }
      return encodeReturn.join("");  
    }
  
    /*function decodeOperate(input, shift) {
      let decodeReturn = []; 
      for (let i = 0; i < input.length; i++) {
        if (shift < 0) {
          if (input[i] === alphabet[i]) {
            let shiftyPoo = shift + 26; 
            decodeReturn.push((alphabet[i - shiftyPoo]))
          } 
          if (input[i] === alphabet[i]) {
            let getShifted = shift % 26; 
            decodeReturn.push((alphabet[i - getShifted])); 
          }
        }
      }
    return decodeReturn.join("");
    } 
    */
    function caesar(input, shift, encode = true) {
      // your solution code here 
      if (shift === 0 || shift < -25 || shift > 25 || !shift) {
         return false; 
      }  
      input = input.toLowerCase();
      
      if (!encode) {
          return encodeOperate(input, -shift);
      } 
      else {
          return encodeOperate(input, shift); 
      } 
    }
    
    return {
      caesar,
    };
  })();
  
  // console.log(caesarModule.caesar("bzs", -1, false)); 
  // console.log(caesarModule.caesar("cat", -1, true)); 
  
  /*
  input refers to the inputted text to be encoded or decoded.
  shift refers to how much each letter is "shifted" by. 
  A positive number means shifting to the right (i.e. "A" becomes "D") 
  whereas a negative number means shifting to the left (i.e. "M" becomes "K").
  encode refers to whether you should encode or decode the message. 
  By default it is set to true.
  If the shift value is not present, equal to 0, less than -25, or greater than 25, 
  the function should return false.
  Spaces should be maintained throughout, as should other non-alphabetic symbols.
  Capital letters can be ignored.
  If a letter is shifted so that it goes "off" the alphabet 
  (e.g. a shift of 3 on the letter "z"), it should wrap around to the 
  front of the alphabet (e.g. "z" becomes "c").
  
  */
  
  module.exports = caesarModule.caesar;
  