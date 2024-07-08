class UniqueList {
    constructor(values = []) {
        this.set = new Set(values);
    }

    has(value) {
        return this.set.has(value);
    }

    add(value) {
        return new UniqueList([...this.set, value]);
    }

    delete(value) {
        const newSet = new Set(this.set);
        newSet.delete(value);
        return new UniqueList(newSet);
    }

    get size() {
        return this.set.size;
    }
}
