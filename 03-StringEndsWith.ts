/**Complete the solution so that it returns true if the
 *  first argument(string) passed in ends with the 2nd 
 * argument (also a string). */

function solution(str1:string, str2:string):boolean{

        return str1.endsWith(str2);
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
console.log(solution('abc', 'rbc'));