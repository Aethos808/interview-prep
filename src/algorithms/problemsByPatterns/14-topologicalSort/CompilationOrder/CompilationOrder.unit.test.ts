import {compilationOrder} from "./CompilationOrder";

describe(compilationOrder, () => {
  describe('Given a 2d array of dependencies', () => {
    describe('when the graph has a cycle', () => {
      it('then return an empty array', () => {
        let testCases = [
          [["A","B"],["B","A"]],
          [["C","C"]],
        ]

        let answer:string[] = [];

        for(let testCase in testCases) {
          expect(compilationOrder(testCases[testCase])).toEqual(answer);
        }
      });
    });

    describe('when there is no cycle', () => {
      it('then return the order in which the dependencies should be compiled', () => {
        let testCases = [
          [["B","A"],["C","A"],["D","C"],["E","D"],["E","B"]],
          [["B","A"],["C","A"],["D","B"],["E","B"],["E","D"],["E","C"],["F","D"],["F","E"],["F","C"]],
          [["B","C"],["C","A"],["A","F"]],
        ]

        let answers = [
          ["A", "B", "C", "D", "E"],
          ["A", "B", "C", "D", "E", "F"],
          ["F", "A", "C", "B"],
        ]

        for(let testCase in testCases) {
          expect(compilationOrder(testCases[testCase])).toEqual(answers[testCase]);
        }
      });
    });
  });
});