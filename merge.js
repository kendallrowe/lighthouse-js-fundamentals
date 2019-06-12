function merge(arrayOne, arrayTwo) {
  let combinedArray = arrayOne.concat(arrayTwo);
  let sortedArray = [];
  let sortOrderLocation;
  let sortIndexFound;
  
  combinedArray.forEach(function(combinedNumber) {
    sortOrderLocation = 0;
    sortIndexFound = false;
    if (sortedArray.length === 0) {
      sortedArray.push(combinedNumber);
    } else {
      // Compare each number from the combined order against ongoing sorted array. Find the appropriate index
      // (sortOrderLocation) and once the correct index has been identified, splice the number into the sortedArray
      sortedArray.forEach(function(sortedValue, order) {
        if (sortIndexFound === false) {
          // If a number is found in sortArray larger than our current number, store this index and set sortindex to true to prevent further checks
          if (combinedNumber <= sortedValue) {
            sortOrderLocation = order;
            sortIndexFound = true;
          } else {
            sortOrderLocation = order + 1;
          }
        }
      });

      if (sortOrderLocation === sortedArray.length) {
        sortedArray.push(combinedNumber);
      } else {
        sortedArray.splice(sortOrderLocation, 0, combinedNumber);
      }
    }
    
  });

  return sortedArray;
}

// Default tests to check that function works
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);