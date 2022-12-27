function StringChallenge(str) { 
  const arrUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const arrLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let strResult = '';

  const letters = str.split('');
  letters.forEach ((letter) => {
    if(arrUpperCase.indexOf(letter) != -1) { //Is uppercase
      strResult = strResult + letter.toLowerCase();
    }else if(arrLowerCase.indexOf(letter) != -1) { //Is uppercase
      strResult = strResult + letter.toUpperCase();
    } else {
      strResult = strResult + letter;
    }
    
  });

  const arrNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let resultNumbers = '';
  const arrResultNumbers = strResult.split('');
  let firstNumber = null;
  let firstNumberPosition = null;

  arrResultNumbers.forEach((letter, index)=>{
    if(arrNumbers.indexOf(letter) != -1 && firstNumber == null){

      firstNumber = letter;

      firstNumberPosition = index;
      resultNumbers = resultNumbers + letter;
    } else if (arrNumbers.indexOf(letter) != -1 && firstNumber != null) {
      lastNumber = letter;
      resultNumbers = resultNumbers + firstNumber;

      resultNumbers = resultNumbers.substr(0, parseInt(firstNumberPosition)) + letter + resultNumbers.substr(parseInt(firstNumberPosition)+1, resultNumbers.length)

      firstNumberPosition = null;
      firstNumber = null;
    } else {
      resultNumbers = resultNumbers + letter;
    }
  })
 
  return resultNumbers; 

}
   
// keep this function call here 
console.log(StringChallenge('1hhh2 aaa bb cc'));