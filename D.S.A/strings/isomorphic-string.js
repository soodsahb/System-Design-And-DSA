/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length!==t.length){
        return false;
    }
    let sTmap= new Map();
    let tSmap= new Map();

    for(let i=0;i<s.length;i++){
      
      if((sTmap.has(s[i])&&sTmap.get(s[i])!==t[i])||tSmap.has(t[i])&&tSmap.get(t[i])!==s[i]){
        return false;
      }


      sTmap.set(s[i],t[i]);
      tSmap.set(t[i],s[i]);

    }
    return true;
};