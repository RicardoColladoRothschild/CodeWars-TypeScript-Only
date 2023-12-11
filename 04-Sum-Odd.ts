
function solution2(n:number):number{
    let triOdd:number[][] = [];
    let sum:number = 0;
    let current_lastNumber:number;

    for(let i = 0; i <= n; i++){
        
        let tempArray:number[] = [];
        let lastOdd:number[] = [];    
       
                if(triOdd.length === 0){
                    triOdd.push([1]);
                    lastOdd.push(1);
                }else{
                    lastOdd = triOdd[triOdd.length-1];
                    
                }

                       
             current_lastNumber = lastOdd[lastOdd.length-1];
                
                for(let j = 0; j <= i; j++){
                    current_lastNumber+=2;
                    
                        if(current_lastNumber%2!==0){
                            
                        tempArray.push(current_lastNumber);
                       
                        }
                        

                    
                    
                }
               if(i!==0){
                
                triOdd.push(tempArray);
               }
                

    }
    
    sum = triOdd[n-1].reduce((accumulator,newNum)=>{
        return accumulator+=newNum;
    },0);

    return sum;
}

console.log(solution2(4));

console.log(Math.pow(4, 3);