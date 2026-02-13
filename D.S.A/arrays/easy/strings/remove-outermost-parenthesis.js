/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
   
   let counter=0;
   let ans='';

   for(let i=0;i<s.length;i++){

    if(counter===0){
        if(s[i]==='('){
            counter++;
        }
    }else{
      if(s[i]==='('){
            counter++;
            ans+=s[i];
        }else{
            counter--;
            if(counter!==0){
                ans+=s[i];
            }
        }
        
    }
   }

    return ans;
};
// Explanation:
// - Track nesting depth with `counter`.
// - Skip adding opening bracket when depth is 0.
// - Add inner opening brackets and increase depth.
// - On closing bracket, decrease depth first.
// - Add closing bracket only if still inside primitive.

