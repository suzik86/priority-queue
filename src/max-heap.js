const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
		this.length = 0;	
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
	}


	pop() {
		this.length--;
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.size() == 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
		} else {
			let n = this.parentNodes[0];
			n.appendChild(node);
		}

		this.parentNodes.push(node);
		this.parentNodes = this.parentNodes.filter(function(n) {return !n.left || !n.right});
		
		this.shiftNodeUp(node);
		this.length++;
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
