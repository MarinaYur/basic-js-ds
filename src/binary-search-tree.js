const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roote = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.roote;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // if (data === undefined || data === null) {
    //   throw new Error("Data cannot be null or undefined");
    // }
    this.roote = addWithinTheTree(this.roote, data);
    function addWithinTheTree(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithinTheTree(node.left, data);
      } else {
        node.right = addWithinTheTree(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return searchWithinTheTree(this.roote, data);
    function searchWithinTheTree(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchWithinTheTree(node.left, data);
      } else {
        return searchWithinTheTree(node.right, data);
      }
    }
  }

  find(data) {
    return findWithinTheTree(this.roote, data);
    // throw new NotImplementedError('Not implemented');
    function findWithinTheTree(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return (data < node.data) ?
        findWithinTheTree(node.left, data) :
        findWithinTheTree(node.right, data);
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.roote = removeWithinTheTree(this.roote, data);
    function removeWithinTheTree(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeWithinTheTree(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeWithinTheTree(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeWithinTheTree(node.left, maxFromLeft.data);
        return node;
      }
    }
  }
  min() {
    // throw new NotImplementedError('Not implemented');
    if (!this.roote) {
      return;
    }
    let node = this.roote;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this.roote) {
      return;
    }
    let node = this.roote;
    while (node.right) {
      node = node.right;
  }
  return node.data;
}
}

module.exports = {
  BinarySearchTree
};