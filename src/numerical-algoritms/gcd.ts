function gcd(a: number, b: number): number {
    while (b != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

function main() {
    console.log(gcd(4851, 3003));
}

main();

export {};
