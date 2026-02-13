function sortzeroonestwos(arr){
    let low=0;
    let mid=0;
    let high=arr.length-1;

    while(mid<=high){
      
        if(arr[mid]===0){
            [arr[low],arr[mid]]=[arr[mid],arr[low]];
            low++;
            mid++;
        }else if(arr[mid]===1){
            mid++;
        }else{
            [arr[mid],arr[high]]=[arr[high],arr[mid]];
            high--;
        }
    }
}
// Explanation:
// - Apply Dutch National Flag algorithm.
// - `low` tracks boundary for 0s.
// - `mid` scans current element.
// - `high` tracks boundary for 2s.
// - Swap/update pointers based on value 0, 1, or 2.

