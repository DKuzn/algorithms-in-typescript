function findZero(func: Function, dfdx: Function, initialGuess: number, maxError: number): number {
    let x: number = initialGuess;
    for (let i = 1; i <= 100; i++) {
        let y: number = func(x);
        if (Math.abs(y) < maxError) {
            break;
        }

        x -= y / dfdx(x);
    }
    return x;
}

function main() {
    const testFunc = (x: number) => 0.2 * Math.pow(x, 3) - Math.pow(x, 2) + x;
    const testFuncDiff = (x: number) => 0.6 * Math.pow(x, 2) - 2 * x + 1;
    console.log(findZero(testFunc, testFuncDiff, 3, 0));
}

main();

export {};
