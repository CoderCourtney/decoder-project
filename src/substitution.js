
const substitutionModule = (function () {
    function substitution(input, alphabet, encode = true) {
      let index = 0;  
      let allIndexes = []; 
      while ((index = input.indexOf(' ', index + 1)) > 0) { 
        allIndexes.push(index); 
      } 
      if (!alphabet || alphabet === 0 || alphabet === "") {
        return false; 
      }
      if (alphabet.length !== 26) {
        return false; 
      }
      for (let i = 0; i < alphabet.length; i++) {
        if ( alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
          return false; 
        }
      }
      let alphaLow = alphabet.toLowerCase(); 
      let inputLow = input.toLowerCase().split(" ").join(""); 
      let output = []; 
      let mappings = {}; 
      let letters = "abcdefghijklmnopqrstuvwxyz"; 
      if (encode) {
        for (let k = 0; k < alphaLow.length; k++) {
          mappings[letters[k]] = alphaLow[k]; 
        }
        for (let j = 0; j <inputLow.length; j++) {
          let eachChar = inputLow[j]; 
          output.push(mappings[eachChar]); 
        }
        let outputStr = output.join(""); 
        for (let m = 0; m < allIndexes.length; m++) {
          outputStr = outputStr.substring(0, allIndexes[m]) + " " + outputStr.substring(allIndexes[m]); 
        }
        return outputStr;  
      } 
      else { 
        for (let k = 0; k < alphaLow.length; k++) {
          mappings[alphaLow[k]] = letters[k]; 
          } 
          for (let j = 0; j <inputLow.length; j++) {
            let eachChar = inputLow[j]; 
            output.push(mappings[eachChar]); 
          } 
          let outputStr = output.join(""); 
          for (let m = 0; m < allIndexes.length; m++) {
            outputStr = outputStr.substring(0, allIndexes[m]) + " " + outputStr.substring(allIndexes[m]); 
          }
          return outputStr;
      }
    }
    return {
      substitution,
    };
  })();
  
  module.exports = substitutionModule.substitution;