/**Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored. */

function parse(data:string):number[]{

    const charArray = data.split("");
    let currentValue:number = 0;
    let finalArray:number[] = [];

        charArray.forEach((c)=>{
            if(c==='i'){
                currentValue+=1;
            }else if(c==='d'){
                currentValue-=1;
            }else if(c==='s'){
                currentValue=currentValue*currentValue;
            }else if (c==='o'){
                finalArray.push(currentValue);
            }
        });
        return finalArray;
}

console.log(parse("iiisdoso"));