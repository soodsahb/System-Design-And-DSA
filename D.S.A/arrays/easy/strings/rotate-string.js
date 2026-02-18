/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
     if (s.length !== goal.length) return false;

     return (s+s).includes(goal);
 
    




};
// Explanation:
// - Rotation is possible only when lengths are equal.
// - Concatenate string with itself (`s + s`).
// - Any valid rotation must appear as substring in doubled string.
// - Check `includes(goal)` on doubled string.
// - Return boolean result.


// Complexity:
// - Time: O(n) average because include-check runs on a doubled string of length 2n.
// - Space: O(n) because `s+s` creates a new string.

