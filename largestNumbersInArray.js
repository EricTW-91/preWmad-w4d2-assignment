// Create a function that takes an array of arrays with numbers. 
// Return a new (single) array with the largest numbers of each.

//you code here
const findLargestNums = function(arr) {

    let greatestNum = 0;
    let newArr = [];

    for(r = 0; r < arr.length; r++) {

        greatestNum = arr[r][0];

        for(c = 0; c < arr[r].length; c++) {
            if(arr[r][c] > greatestNum) {
                greatestNum = arr[r][c];
            }
        }

        newArr[r] = greatestNum;
    }

    return newArr;
}


console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
// ➞ [7, 90, 2]

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); 
// ➞ [-34, -2, 7]

console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); 
// ➞ [0.7634, 9.32, 9]