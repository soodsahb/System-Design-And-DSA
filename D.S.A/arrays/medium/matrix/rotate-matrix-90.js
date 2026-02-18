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
// Explanation:
// - First transpose matrix across main diagonal.
// - Swap `matrix[i][j]` with `matrix[j][i]`.
// - Then reverse every row.
// - Transpose + row reverse gives 90 degree clockwise rotation.
// - Operation is done in-place.


// Complexity:
// - Time: O(n^2) because transpose and row-reverse both touch matrix cells.
// - Space: O(1) extra space because rotation is done in-place.

