function lastIndexOf(checkedArray, checkedValue) {
  let lastIndex = -1;

  // Iterate through argument array passed 
  for (let i = 0; i < checkedArray.length; i++) {
    // Check each element in array against checked value, store its index as last index if they match
    if (checkedArray[i] === checkedValue) {
      lastIndex = i;
    }

  }
  return lastIndex;
}


// Default tests to confirm function working
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);