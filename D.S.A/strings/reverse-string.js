/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversedstring=s.trim().split(" ").reverse().filter(word=>word!=='').join(' ');
    return reversedstring

};

//remove trailing leading spaces and any extra spaces in between