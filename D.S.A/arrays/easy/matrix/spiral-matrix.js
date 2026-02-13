/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    let result=[];

    let left=0,right=n-1,bottom=m-1,top=0;

    while(top<=bottom&&left<=right){

        for(let i=left;i<=right;i++){
         result.push(matrix[top][i]);
        }
        top++;

        for(let i=top;i<=bottom;i++){
            result.push(matrix[i][right]);

        }
        right--;

        if(top<=bottom){
       
       for(let i=right;i>=left;i--){
            result.push(matrix[bottom][i])
        }
        bottom--;
        }

        
       if(left<=right){
       
        for(let i=bottom;i>=top;i--){
            result.push(matrix[i][left])
        }
        left++;
       }
       
    }
    return result
};
// Explanation:
// - Maintain four boundaries: top, bottom, left, right.
// - Traverse top row left to right.
// - Traverse right column top to bottom.
// - Traverse bottom row and left column when valid.
// - Shrink boundaries after each layer.

