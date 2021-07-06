type SiblingTree = BinaryTree | null;
type ItemType = string | number | boolean;

class BinaryTree {
  item;
  left;
  right;
  constructor(
    item: ItemType,
    left: SiblingTree = null,
    right: SiblingTree = null
  ) {
    this.item = item;
    this.left = left;
    this.right = right;
  }

  height(): number {
    let leftHeight = 1;
    let rightHeight = 1;

    if (this.left !== null) {
      leftHeight = this.left.height();
    }
    if (this.right !== null) {
      rightHeight = this.right.height();
    }
    const maxHeight = Math.max(leftHeight, rightHeight);

    return 1 + maxHeight;
  }

  count(): number {
    let count = 1;

    if (this.left !== null) {
      count = count + this.left.count();
    }

    if (this.right !== null) {
      count = count + this.right.count();
    }

    return count;
  }

  // binary trees can be traversed in 3 ways
  // 1- preorder: visit parent, then left child then right child
  // 2- inorder: visit left child, then parent, then right child
  // 3- post order: visit left child, then right child, then parent

  prePrintAll(): void {
    console.log(this.item);
    if (this.left !== null) {
      this.left.prePrintAll();
    }
    if (this.right !== null) {
      this.right.prePrintAll();
    }
  }

  inPrintAll(): void {
    if (this.left !== null) {
      this.left.inPrintAll();
    }
    console.log(this.item);

    if (this.right !== null) {
      this.right.inPrintAll();
    }
  }

  posPrintAll(): void {
    if (this.left !== null) {
      this.left.posPrintAll();
    }
    if (this.right !== null) {
      this.right.posPrintAll();
    }
    console.log(this.item);
  }
}

const tree1 = new BinaryTree(
  1,
  new BinaryTree(2, new BinaryTree(1), new BinaryTree(3, new BinaryTree(1))),
  new BinaryTree(3, new BinaryTree(2), new BinaryTree(4))
);

console.log(tree1.height());
console.log(tree1.count());

console.log("_____________________");
tree1.prePrintAll();
console.log("_____________________");
tree1.inPrintAll();
console.log("_____________________");
tree1.posPrintAll();
