// Create a function to concatenate (add) two integer arrays. it will take in two arrays, 
// and return one new one.

// do not use the .concat() method. 


// your code here
const concat = function(arr1, arr2) {

    let newArray = [];
    let index = 0;

    for (i = 0; i < arr1.length; i++) {
        newArray.push(arr1[i]);
    }

    for (i = 0; i < arr2.length; i++) {
        newArray.push(arr2[i]);
    }

    return newArray;

}


console.log(concat([1, 3, 5], [2, 6, 8])); 
// ➞ [1, 3, 5, 2, 6, 8]

console.log(concat([7, 8], [10, 9, 1, 1, 2])); 
// ➞ [7, 8, 10, 9, 1, 1, 2]

console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); 
// ➞ [4, 5, 1, 3, 3, 3, 3, 3]