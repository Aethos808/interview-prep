// 'use strict';
// import { WriteStream, createWriteStream } from "fs";
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;
// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });
// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';
//     main();
// });
// function readLine(): string {
//     return inputLines[currentLine++];
// }
/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */
var INNER_PRISM_LENGTH = 1;
var INNER_PRISM_WIDTH = 1;
function calculateExposedArea(length, height) {
    return -1;
}
function surfaceArea(A) {
    /** Example 1
     * in: 1 1
     *     1
     *
       out: 6
    */
    /** Example 2
     * in:  3 3
            1 3 4
            2 2 3
            1 2 4
        
        out: 60
     */
    var northNeighbor = false;
    var southNeighbor = false;
    var eastNeighbor = false;
    var westNeighbor = false;
    var totalSA = 0;
    A.forEach(function (innerArr, i) {
        innerArr.forEach(function (currentNum, j) {
            console.log("At index (".concat(i, ", ").concat(j, ")"));
            console.log("currentNum: ".concat(currentNum));
            var USABLE_TOP_AREA = 1;
            var USABLE_BOTTOM_AREA = 1;
            var visibleInnerPrismArea = 0;
            i === 0 ? northNeighbor = false : northNeighbor = true;
            i === A.length - 1 ? southNeighbor = false : southNeighbor = true;
            j === 0 ? westNeighbor = false : westNeighbor = true;
            j === innerArr.length - 1 ? eastNeighbor = false : eastNeighbor = true;
            if (eastNeighbor) {
                var eastNum = A[i][j + 1];
                if (eastNum < currentNum) {
                    visibleInnerPrismArea += currentNum - eastNum;
                }
            }
            else {
                visibleInnerPrismArea += currentNum;
            }
            if (westNeighbor) {
                var westNum = A[i][j - 1];
                if (westNum < currentNum) {
                    visibleInnerPrismArea += currentNum - westNum;
                }
            }
            else {
                visibleInnerPrismArea += currentNum;
            }
            if (northNeighbor) {
                var northNum = A[i - 1][j];
                if (northNum < currentNum) {
                    visibleInnerPrismArea += currentNum - northNum;
                }
            }
            else {
                visibleInnerPrismArea += currentNum;
            }
            if (southNeighbor) {
                var southNum = A[i + 1][j];
                if (southNum < currentNum) {
                    visibleInnerPrismArea += currentNum - southNum;
                }
            }
            else {
                visibleInnerPrismArea += currentNum;
            }
            visibleInnerPrismArea += USABLE_BOTTOM_AREA + USABLE_TOP_AREA;
            totalSA += visibleInnerPrismArea;
            //if no neighbor for a side, include that side in its entirety
            //side area will be 1 * height
        });
    });
    return totalSA;
}
console.log(surfaceArea([[1]]));
console.log(surfaceArea([[1, 3, 4], [2, 2, 3], [1, 2, 4]]));
// function main() {
//     const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);
//     const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');
//     const H: number = parseInt(firstMultipleInput[0], 10);
//     const W: number = parseInt(firstMultipleInput[1], 10);
//     let A: number[][] = Array(H);
//     for (let i: number = 0; i < H; i++) {
//         A[i] = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));
//     }
//     const result: number = surfaceArea(A);
//     ws.write(result + '\n');
//     ws.end();
// }
