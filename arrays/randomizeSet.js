class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    insert(value) {
        if (this.map.has(value)) return false;
        this.arr.push(value);
        this.map.set(value, this.arr.length - 1);
        return true;
    }

    remove(value) {
        if (!this.map.has(value)) return false;

        const index = this.map.get(value);
        const lastElement = this.arr[this.arr.length - 1];

        this.arr[index] = lastElement;
        this.map.set(lastElement, index);

        this.arr.pop();
        this.map.delete(value);

        return true;
    }

    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}
