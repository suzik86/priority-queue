const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.storage = new MaxHeap();
	}

	push(data, priority) {
		this.storage.push(data, priority);
	}

	shift() {

	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length === 0;
	}
}

module.exports = PriorityQueue;
