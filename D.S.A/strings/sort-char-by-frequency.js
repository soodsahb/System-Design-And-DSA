// /**
//  * @param {string} s
//  * @return {string}
//  */
// var frequencySort = function(s) {
//     let map=new Map();
   
//    for(let i=0;i<s.length;i++){
      
//       map.set(s[i],(map.get(s[i])||0)+1)
//    }

//    let sorted = [...map.entries()].sort((a,b)=>b[1]-a[1]);
//     let result=''
//    for(let [char,freq] of sorted){
//     result+=char.repeat(freq);
//    }

//    return result;

// };

//Let n = length of string

// Frequency count → O(n)

// Sorting unique chars → O(k log k)
// (k = unique chars, max 62 → A-Z, a-z, digits)


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map=new Map();
   
   for(let i=0;i<s.length;i++){
      
      map.set(s[i],(map.get(s[i])||0)+1)
   }

   let buckets = new Array(s.length+1).fill(null).map(()=>[]);

   for(let [key,freq] of map){
    buckets[freq].push(key);
   }

   let result='';
    
    for(let i=buckets.length-1;i>=0;i--){
        for(let ch of buckets[i]){
        result+=ch.repeat(i);
        }
        
    }

    return result


};