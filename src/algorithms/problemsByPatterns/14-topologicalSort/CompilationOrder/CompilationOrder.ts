import * as console from "console";

export const compilationOrder = (dependencies: string[][]): string[] => {
  let compilationOrder: string[] = [];
  let adjMap = new Map<string, string[]>();
  let dependents = new Set<string>();
  let roots = new Set<string>();

  for(let dependency of dependencies) {
    !adjMap.has(dependency[1]) ? adjMap.set(dependency[1], [dependency[0]]) :
      adjMap.set(dependency[1], [...adjMap.get(dependency[1])!, dependency[0]]);

    dependents.add(dependency[0]);

    if(roots.has(dependency[0])) {
      roots.delete(dependency[0]);
    }

    if(!roots.has(dependency[1]) && !dependents.has(dependency[1])) {
      roots.add(dependency[1]);
    }
  }
  let valuesThatHaveChildren: string[] = [];

  roots.forEach(root => {
    const rootAdj = adjMap.get(root)!;

    compilationOrder.push(root);
    compilationOrder.push(...rootAdj);
    valuesThatHaveChildren.push(...rootAdj);


    while (valuesThatHaveChildren.length > 0) {
      const currentClass = valuesThatHaveChildren.shift();
      const currentClassAdj = adjMap.get(currentClass!);

      compilationOrder.push(...currentClassAdj!);
      valuesThatHaveChildren.push(...currentClassAdj!);
    }
  })

  /**
   * duplicates will be added into the final list. figure it out (maybe a set)
   */

  console.log(compilationOrder);

  return compilationOrder;
}