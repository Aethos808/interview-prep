class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export const levelOrder = (root: TreeNode | null): number[][] => {
    const x = new TreeNode(3, new TreeNode(9, new TreeNode(), new TreeNode()), new TreeNode(20, new TreeNode(15, new)));
}