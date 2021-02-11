// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    const polySquare = [
      ["A", "B", "C", "D", "E"], 
      ["F", "G", "H", ["I/J"], "K"], 
      ["L", "M", "N", "O", "P"], 
      ["Q", "R", "S", "T", "U"], 
      ["V", "W", "X", "Y", "Z"]]; 
  
    function polyEncode(input) {
      input = input.toUpperCase(); 
      let encoder = []; 
      for (let k = 0; k < input.length; k++) {
        let found = false; 
        if (input[k] === "I" || input[k] === "J") {
          encoder.push("42"); 
          found = true; 
          continue 
        }
        for (let i = 0; i < polySquare.length; i++) {
          if (found) {
            break; 
          }
          for (let j = 0; j <polySquare[i].length; j++) {
            if (found) break; 
            if(input[k] === polySquare[j][i]) {
              encoder.push(`${i + 1}${j + 1}`);
              found = true;  
            } 
            else if (input[k] === " ") {
              encoder.push(input[k])
              found = true; 
            }
          }
        }
      }
      return encoder.join("").toLowerCase(); 
    }
  
    function polyDecode(input) {
      let inputed = input.split(" ").join(""); 
      let spaceId = input.indexOf(" "); 
      //console.log(spaceId); 
      let firstNumber = []; 
      let secondNumber = []; 
      let finalDecode = []; 
      if(inputed.length % 2 === 0) {
        for (let i = 0; i < inputed.length; i+=2) {
          firstNumber.push(inputed[i]); 
        } 
        for (let j = 1; j < inputed.length; j+=2) {
          secondNumber.push(inputed[j]);
        }
      } 
      else {
        return false; 
      }
      for (let k = 0; k < firstNumber.length; k++) {
          let poly = polySquare[secondNumber[k] - 1][firstNumber[k] - 1]
          if (k === (spaceId/2)) {
            finalDecode.push(" "); 
          } 
          finalDecode.push(poly); 
        }
        return finalDecode.join("").toLowerCase();
      }
  
    function polybius(input, encode = true) {
      if(encode) {
        return polyEncode(input);
      } else {
        return polyDecode(input); 
      }
    }
  
    return {
      polybius,
    };
  })();
  
  console.log(polybiusModule.polybius("42 1123", false)); // space is in index 2
  console.log(polybiusModule.polybius("4211 23", false)); // space is in index 4
  console.log(polybiusModule.polybius("23232323 23", false)); // space is in index 8
  
  module.exports = polybiusModule.polybius;
  