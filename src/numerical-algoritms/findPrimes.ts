function findPrimes(maxNumber: number): number[] {
    let isComposite: boolean[] = new Array(maxNumber + 1);

    for (let i = 4; i < maxNumber; i += 2) {
        isComposite[i] = true;
    }

    let nextPrime: number = 3;
    let stopAt = Math.sqrt(maxNumber);
    while (nextPrime <= stopAt) {
        for (let i = nextPrime * 2; i <= maxNumber; i += nextPrime) {
            isComposite[i] = true;
        }

        nextPrime += 2;

        while (nextPrime < maxNumber && isComposite[nextPrime]) {
            nextPrime += 2;
        }
    }

    let primes: number[] = [];
    for (let i = 2; i < maxNumber; i++) {
        if (!isComposite[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function main() {
    console.log(findPrimes(1001));
}

main();

export {};
