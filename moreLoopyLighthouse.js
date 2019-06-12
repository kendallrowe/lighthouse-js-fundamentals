

function loopyLighthouse(range, multiples, words) {
  let biggerNumber;
  let smallerNumber;
  let printString = "";
  
  // Evaluation of arguments to ensure they meet criteria to run function
  // Check that range, multiples, and words provided are 2 in length (pairs) 
  if (range.length !== 2 || multiples.length !== 2 || words.length !== 2) {
    return "Please check the arguments passed are all entered as pairs within arrays and try again.";
  } else {
    // Check that ranges provided are valid numbers and determine the larger if so
    if (typeof(range[0]) !== "number" || typeof(range[1]) !== "number" || typeof(multiples[0]) !== "number" || typeof(multiples[1]) !== "number") {
      return "Please make sure to pass numbers into your range and multiples";
    } else {
      if (range[0] > range[1]) {
        biggerNumber = range[0];
        smallerNumber = range[1];
      } else {
        biggerNumber = range[1];
        smallerNumber = range[0];
      }
    }
  }

  for (let num = smallerNumber; num <= biggerNumber; num++) {

    // Check for both conditions for LoopyLighthouse
    if ((num % multiples[0] === 0) && (num % multiples[1]) === 0){
      printString += words[0] + words[1];
    } else if (num % multiples[0] === 0) {
      printString += words[0];
    } else if (num % multiples[1] === 0) {
      printString += words[1];
    } else {
      printString += num;
    }

    if (num !== biggerNumber) {
      printString += "\n";
    }
  }

  return printString;
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));