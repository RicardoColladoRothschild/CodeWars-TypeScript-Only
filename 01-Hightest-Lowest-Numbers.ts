/**DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function HighestandLowest(numbers:string){
    let array:number[] = numbers.split(' ').map((n:string)=>{
        return Number(n);
    });

    for(let i = 0; i < array.length; i++){

            for(let j = 0; j <= array.length; j++){
                if(array[i]>array[j]){
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

    }
    return `${array[0]} ${array[array.length-1]}`;
}

console.log(HighestandLowest('1 2 3 4 5'));