/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const bracket={
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (bracket[char]) {
            const topElement=stack.length ? stack.pop() : '#';
            if (bracket[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length===0;
};
module.exports = { isValid };


