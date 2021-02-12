
const caesarModule = (function () {
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
  
    function caesar(input, shift, encode = true) { 
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
  
  module.exports = caesarModule.caesar;
  