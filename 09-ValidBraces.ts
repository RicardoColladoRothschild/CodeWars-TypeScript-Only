/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/typescript
*/
//[{[()]}]

    //[{[(
    //)]}]

    //"(){}[]"
export function validBraces(braces: string): boolean {

    let flag = true;
    
    const arrayOpen:string[] = [];

    const bracesArray = braces.split('');
    //"( })"
    for(let i = 0; i < bracesArray.length; i++){
        const brace = bracesArray[i];

            if(i === 0 && (brace===")" || brace==="}" || brace==="]" )){
                return false;
            }

            if(brace===")" && (!arrayOpen.includes("("))){
                return false;
            }
            if(brace==="}" && (!arrayOpen.includes("{"))){
                return false;
            }
            if(brace==="]" && (!arrayOpen.includes("["))){
                return false;
            }
        if(brace === '('){

            arrayOpen.push('(')
        }else if(brace === '{'){

            arrayOpen.push('{')
        }else if(brace === '['){

            arrayOpen.push('[')
        }
    
        const topStackBrace = arrayOpen[arrayOpen.length-1];
        if(brace===")"){
            if(topStackBrace === "("){
                arrayOpen.pop();
            }else{
                flag = false;
            }
        }
        if(brace==="}"){
           
            if(topStackBrace === "{"){
                arrayOpen.pop();
            }else{
                
                flag = false;
            }
        }
        if(brace==="]"){
            
            if(topStackBrace === "["){
                arrayOpen.pop();
            }else{
                flag = false;
            }
        }
    }
   
   return (arrayOpen.length === 0);
}

console.log(validBraces("{[()]}")); // true
console.log(validBraces("}}]]))}])")); // false
console.log(validBraces("(})")); // false
console.log(validBraces("(){}[]")); // true
