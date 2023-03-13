"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimumWindowSubstring_1 = require("./minimumWindowSubstring");
describe(minimumWindowSubstring_1.minimumWindowSubstring, function () {
    describe('Given a string s and a string t', function () {
        it('then return the shortest subarray in s that contains the a t permutation', function () {
            var s1 = 'ADOBECODEBANC';
            var t1 = 'ABC';
            var expectedAnswer1 = 'BANC';
            var s2 = 'a';
            var t2 = 'a';
            var expectedAnswer2 = 'a';
            var s3 = 'a';
            var t3 = 'aa';
            var expectedAnswer3 = '';
            expect((0, minimumWindowSubstring_1.minimumWindowSubstring)(s1, t1)).toEqual(expectedAnswer1);
            expect((0, minimumWindowSubstring_1.minimumWindowSubstring)(s2, t2)).toEqual(expectedAnswer2);
            expect((0, minimumWindowSubstring_1.minimumWindowSubstring)(s3, t3)).toEqual(expectedAnswer3);
        });
    });
});
