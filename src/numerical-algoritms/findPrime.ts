function isPrime(p: number, maxTest: number): boolean {
    for (let test = 1; test < maxTest; test++) {
        let n = 1 + Math.floor(Math.random() * (p - 1));
        if (Math.pow(n, p - 1) % p != 1) {
            return false;
        } 
    }
    return true;
}

function findPrime(numDigits: number, maxTests: number): number {
    let maxNum: number = Number("9".repeat(numDigits));
    let minNum: number = Number("9".repeat(numDigits - 1)) + 1;
    while (true) {
        let p = minNum + Math.floor(Math.random() * (maxNum - minNum));
        if (isPrime(p, maxTests)) {
            return p;
        }
    }
}

function main() {
    console.log(findPrime(5, 2));
}

main();

export {};
