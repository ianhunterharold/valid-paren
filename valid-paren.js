/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    
    const stack = [];
    //use an arr as a stack with pop only
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
            // open brackets add to the stack
        } else if (char === ")" || char === "}" || char === "]") {
            //catching the edge case, closed brackets and length 0, needs open brack before closed,duh
            if (stack.length === 0) {
                return false;
            }

            const top = stack.pop();
            // if char is open brackets and the
            //  last item in the stack is not the cooresponding match, return false
            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[")
            ) {
                return false;
            }
        }
    }
    // return truthy if the length is equal to zero
    return stack.length === 0;
};
