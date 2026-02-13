/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversedstring=s.trim().split(" ").reverse().filter(word=>word!=='').join(' ');
    return reversedstring

};

//remove trailing leading spaces and any extra spaces in between
// Explanation:
// - Trim leading and trailing spaces.
// - Split sentence into words by spaces.
// - Remove empty tokens from multiple spaces.
// - Reverse word order.
// - Join words with single spaces.

