"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAllAnagramsInAString_1 = require("./findAllAnagramsInAString");
describe(findAllAnagramsInAString_1.findAllAnagramsInAString, function () {
    describe('Given two strings s and p', function () {
        it('then return the first indices of all p\'s anagrams in s', function () {
            var s1 = 'cbaebabacd';
            var p1 = 'abc';
            var expectedAnswer1 = [0, 6];
            var s2 = 'abab';
            var p2 = 'ab';
            var expectedAnswer2 = [0, 1, 2];
            expect((0, findAllAnagramsInAString_1.findAllAnagramsInAString)(s1, p1)).toEqual(expectedAnswer1);
            expect((0, findAllAnagramsInAString_1.findAllAnagramsInAString)(s2, p2)).toEqual(expectedAnswer2);
        });
    });
});
