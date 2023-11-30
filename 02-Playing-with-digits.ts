/**Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k,
 if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n. */

 function digPow(n:number, p:number){
        let increaseExponent = p;
        let magicNumber = n.toString()
        .split('')
        .map((e)=>{
            const temp = Math.pow(Number(e),increaseExponent)
            increaseExponent++;
            return temp;
        })
        .reduce((accumulator, newNumber)=>{
            return accumulator+=newNumber;
        },0);

        let k = 1;
            for(let i = 0; i < magicNumber; i++){
                    if((n*i) === magicNumber){
                        k = i;
                    }
            }
            return k;
        
 }

 console.log(digPow(89,1));
 console.log(digPow(695 ,2));
 console.log(digPow(46288,3));