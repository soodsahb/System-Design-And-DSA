/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rowlength= matrix.length;
    let collength=matrix[0].length;

    //transpose
    for(let i=0;i<=rowlength-2;i++){
        for(let j=i+1;j<=collength-1;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
   //reverse each row
    for(let i=0;i<rowlength;i++){
        matrix[i].reverse();
    }


};