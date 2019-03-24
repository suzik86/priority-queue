class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		node.parent = this;

		if (!this.left) {
			this.left = node;
		} else if (!this.right) {
			this.right = node;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.remove();
			delete this.left;
			this.left = null;
		} else if (this.right == node) {
			this.right.remove();
			delete this.right;
			this.right = null;
		} else {
			throw "Node not found";
		}
	}

	remove() {
		if (this.parent) {
			let parent = this.parent;
			this.parent = null;
			parent.removeChild(this);
		}

		if (this.left) {
			this.removeChild(left);
			delete this.left;
			this.left = null
		}
		
		if (this.right) {
			this.removeChild(right);
			delete this.right;
			this.right = null;
		}
	}

	swapWithParent() {
		if (this.parent) {
			let parent = this.parent;
			let left = this.left;
			let right = this.right;
			let parent_left = parent.left;
			let parent_right = parent.right;

			if (this == this.parent.left) {
				this.left = parent;
				this.right = parent_right;
				if (parent_right) {
					parent_right.parent = this;
				}
			} else {
				this.right = parent;
				this.left = parent_left;
				if (parent_left) {
					parent_left.parent = this;
				}
			}

			parent.left = left;
			parent.right = right;
			this.parent = parent.parent;
			parent.parent = this;

			if (this.parent) {
				if (this.parent.left == parent) {
					this.parent.left = this;
				} else if (this.parent.right == parent) {
					this.parent.right = this;
				}
			}

		}
	}
}

module.exports = Node;
