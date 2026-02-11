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