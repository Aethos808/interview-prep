"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permutationInString_1 = require("./permutationInString");
describe(permutationInString_1.permutationInString, function () {
    describe('Given two strings', function () {
        it('then return true or false is some s1 permutation lives in s2', function () {
            var stringOne1 = 'ab';
            var stringTwo1 = 'eidbaooo';
            var expectedOutput1 = true;
            var stringOne2 = 'ab';
            var stringTwo2 = 'eidboaooo';
            var expectedOutput2 = false;
            expect((0, permutationInString_1.permutationInString)(stringOne1, stringTwo1)).toEqual(expectedOutput1);
            expect((0, permutationInString_1.permutationInString)(stringOne2, stringTwo2)).toEqual(expectedOutput2);
        });
    });
});
