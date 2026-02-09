
//brute force
// function rearrange(arr){
   
//   let pos=[];
//   let neg=[];

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         pos.push(arr[i])
//     }else{
//         neg.push(arr[i]);
//     }
//   }


 

//   for(let i=0;i<Math.floor(arr.length/2);i++){
//       arr[2*i]=pos[i];
//       arr[2*i+1]=neg[i];
//   }

//   console.log(arr);
// }

// rearrange([3,1,-2,-5,2,-4]);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let posindex=0,negindex=1;
    let ans=[]

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            ans[posindex]=nums[i];
            posindex+=2;
        }else{
            ans[negindex]=nums[i];
            negindex+=2; 
        }
    }
    return ans;
};