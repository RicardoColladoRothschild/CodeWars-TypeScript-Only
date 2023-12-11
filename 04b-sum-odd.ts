function solution2(n: number): number {
    let triOdd: number[][] = [];
    let sum: number = 0;
    let currentLastNumber: number;

    for (let i = 0; i <= n; i++) {
        console.log(`Counting: ${i}`);
        let tempArray: number[] = [];
        let lastOdd: number[] = [];

        if (triOdd.length === 0) {
            triOdd.push([1]);
            lastOdd.push(1);
        } else {
            lastOdd = triOdd[triOdd.length - 1];
        }

        currentLastNumber = lastOdd[lastOdd.length - 1];

        for (let j = 0; j <= i; j++) {
            currentLastNumber += 2; // Incrementar en 2 para obtener números impares

            console.log(`line: ${i} | currentLast: ${currentLastNumber}`);
            tempArray.push(currentLastNumber);
            console.log(`adding current array: ${tempArray}`);
        }

        triOdd.push(tempArray);
    }

    console.log(triOdd);

    for (let i = 0; i < triOdd[n].length; i++) {
        sum += triOdd[n][i];
    }

    return sum;
}

console.log(solution2(2));
