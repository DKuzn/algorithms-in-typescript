function rectangleRuleIntegration(func: Function, xMin: number, xMax: number, numIntervals: number): number {
    let dx: number = (xMax - xMin) / numIntervals;

    let totalArea: number = 0;
    let x: number = xMin;
    for (let i = 1; i <= numIntervals; i++) {
        totalArea += dx * func(x);
        x += dx;
    }
    return totalArea;
}

function trapezoidRuleIntegration(func: Function, xMin: number, xMax: number, numIntervals: number): number {
    let dx: number = (xMax - xMin) / numIntervals;

    let totalArea: number = 0;
    let x: number = xMin;
    for (let i = 1; i <= numIntervals; i++) {
        totalArea += dx * (func(x) + func(x + dx)) / 2;
        x += dx;
    }
    return totalArea;
}

function adaptiveMidpointIntegration(func: Function, xMin: number, xMax: number, numIntervals: number, maxSliceError: number): number {
    let dx: number = (xMax - xMin) / numIntervals;

    let totalArea: number = 0;
    let x: number = xMin;
    for (let i = 1; i <= numIntervals; i++) {
        totalArea += sliceArea(func, x, x + dx, maxSliceError);
        x += dx;
    }
    return totalArea;
}

function sliceArea(func: Function, x1: number, x2: number, maxSliceError: number): number {
    let y1: number = func(x1);
    let y2: number = func(x2);
    let xm: number = (x1 + x2) / 2;
    let ym: number = func(xm);

    let area12: number = (x2 - x1) * (y1 + y2) / 2.0;
    let area1m: number = (xm - x1) * (y1 + ym) / 2.0;
    let aream2: number = (x2 - xm) * (ym + y2) / 2.0;
    let area1m2: number = area1m + aream2;

    let error: number = (area1m2 - area12) / area12;

    if (Math.abs(error) < maxSliceError) {
        return area1m2;
    };

    return sliceArea(func, x1, xm, maxSliceError) + sliceArea(func, xm, x2, maxSliceError);
}


function main() {
    const testFunc = (x: number) => 1 + x + Math.sin(2 * x);
    console.log(rectangleRuleIntegration(testFunc, 0, 5, 10));
    console.log(trapezoidRuleIntegration(testFunc, 0, 5, 10));
    console.log(adaptiveMidpointIntegration(testFunc, 0, 5, 10, 0.01));
}

main();

export {};
