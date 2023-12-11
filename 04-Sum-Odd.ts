
function solution2(n:number):number{
    let triOdd:number[][] = [];
    let sum:number = 0;
    let current_lastNumber:number;

    for(let i = 0; i <= n; i++){
        let tempArray:number[] = [];
        let lastOdd;    
       

           
            console.log(`last odd array: ${lastOdd}`)
                let tempOdd = lastOdd[lastOdd.length];
                console.log(`tempOdd: ${tempOdd}`)
                for(let j = 0; j <= i; j++){
                    if(tempOdd%2!==0){
                        tempArray.push(tempOdd);
                    }
                    tempOdd++;
                }
                console.log(tempArray);
                triOdd.push(tempArray);

    }
    sum = triOdd[n].reduce((accumulator,newNum)=>{
        return accumulator+=newNum;
    },0);

    return sum;
}

console.log(solution2(2));