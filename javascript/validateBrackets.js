function validateBrackets(str) {

    // if (!/[(){}[\]]/.test(str)) {
    //     return 'Please, enter an input with brackets';
    // } 
    /* this could be a verification. If there are no backets in the input 
    it could return that since we are talking here about brackets tests.
    I'll let this commented cause' the question asks only to return booleans.
    */

    const stack = [];
    const pairs = { ")": "(", "}": "{", "]": "[" };

    for (const char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) { /* no open bracket was added in */
                return false;    
            }
            else {
                const lastItem = stack.pop();
                if (lastItem !== pairs[char]) {
                    return false;
                }
            }
        }
    }

  return stack.length === 0; // true or false, depends on the stack content
}

{/* Test Zone */}

const test = 'dksapdkas'
console.log(`test 1: ${validateBrackets(test)}`)  // expect true, since no brackets are envolved

const test2 = 'dkapsdpkosa{dlkadklas;(ldadalka)}'
console.log(`test 2: ${validateBrackets(test2)}`) // {()} -> the sequence in there

const test3 = 'dkapsdpkosa{dlkadk}las;(ldadalka)}'
console.log(`test 3: ${validateBrackets(test3)}`)  // {}()} -> last } brokes it. Stack is empty at this point

const test4 = '}{{}'
console.log(`test 4: ${validateBrackets(test4)}`) 

const test5 = '{([])}'
console.log(`test 5: ${validateBrackets(test5)}`) 

const test6 = '{}()[]'
console.log(`test 6: ${validateBrackets(test6)}`) 

const test7 = '{(})[]'
console.log(`test 7: ${validateBrackets(test7)}`) 
/* test7: This brokens on the 3th interation, when the 3th char is being checked 
as a key passed to pairs (pairs[char]), which will give the expected pair, but when comparing it to lastItem,
it brokes. */ 
/* this 7th test shows that there is an order in which the brackets must close.
I can't have 2 or more openning brackets where the oldest one closes before the newest one. */

const test8 = '[Iseetheway]itact(s)ha}ha{'
console.log(`test 8: ${validateBrackets(test8)}`) 

const test9 = '[Iseetheway]itact(s)ha{ha}'
console.log(`test 9 (similar to test 8, with the changes at the final): ${validateBrackets(test9)}`) 

/* last 2 tests (8 and 9) shows that the test will never be true if a closing bracket comes before the opening */

const test10 = ']['
console.log(`test 10: ${validateBrackets(test10)}`) 

const test11 = ')('
console.log(`test 11: ${validateBrackets(test11)}`) 

