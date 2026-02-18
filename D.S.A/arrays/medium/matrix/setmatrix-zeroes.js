/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
   let rowslength= matrix.length;
    let collength=matrix[0].length;

    let zerorows=new Array(rowslength);
    let zerocols=new Array(collength);

    for(let i=0;i<rowslength;i++){
    
        for(let j=0;j<collength;j++){
            if(matrix[i][j]===0){
             zerorows[i]=1;
             zerocols[j]=1;
            }
        }
    }

    for(let k=0;k<rowslength;k++){
        if(zerorows[k]===1){
            let i=k;
           for(let j=0;j<collength;j++){
            matrix[i][j]=0;
           }
        }
    }

     for(let k=0;k<collength;k++){
        if(zerocols[k]===1){
            let j=k;
           for(let i=0;i<rowslength;i++){
            matrix[i][j]=0;
           }
        }
    }


};
// Explanation:
// - Scan matrix and mark zero rows and zero columns.
// - Store row marks in `zerorows`.
// - Store column marks in `zerocols`.
// - Zero out every marked row.
// - Zero out every marked column.


// Complexity:
// - Time: O(m*n) because we scan matrix and then zero marked rows/columns.
// - Space: O(m+n) because two marker arrays store row and column flags.

