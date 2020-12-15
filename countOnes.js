// Create a function to count the number of 1s in a 2D array.


// your code here
const countOnes = function(arr) {

    let count = 0;

    for(r = 0; r < arr.length; r++) {
        for(c = 0; c < arr[r].length; c++) {
            if(arr[r][c] === 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(countOnes([
    [1, 0],
    [0, 0]
]))

// should return 1

console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
]));

// should return 7

console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
]))

//should return 2
