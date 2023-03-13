"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAveragesOfSubArrays_1 = require("./findAveragesOfSubArrays");
describe("findAverageOfSubarray", function () {
    describe("Given an integer array", function () {
        describe("when the array is of size one", function () {
            describe("and k is equal to one", function () {
                it('then the max average value should be equal to the number in the array', function () {
                    var expectedAverage = 5.75;
                    var testNums = [expectedAverage];
                    var k = 1;
                    expect((0, findAveragesOfSubArrays_1.findAveragesOfSubArrays)(testNums, k)).toEqual(expectedAverage);
                });
            });
        });
        describe("when the array is bigger than size one", function () {
            describe("and k is greater than or equal to one", function () {
                it("then the max average should be returned given the subarray length", function () {
                    var expectedAverage = 12.75;
                    var testNums = [1, 12, -5, -6, 50, 3];
                    var k = 4;
                    expect((0, findAveragesOfSubArrays_1.findAveragesOfSubArrays)(testNums, k)).toEqual(expectedAverage);
                });
            });
        });
    });
});
