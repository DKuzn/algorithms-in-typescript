function findFactors(num: number): number[] {
    let factors: number[] = [];

    while (num % 2 == 0) {
        factors.push(2);
        num = num / 2;
    }

    let i: number = 3;
    let maxFactor: number = Math.sqrt(num);

    while(i <= maxFactor) {
        while(num % i == 0) {
            factors.push(i);
            num = num / i;
            maxFactor = Math.sqrt(num);
        }
        i = i + 2;
    }

    if (num > 1) {
        factors.push(num);
    };

    return factors;
}

function main() {
    console.log(findFactors(1001));
}

main();

export {};
