class HashTable {
    constructor() {
        this.table = new Array()
    }

    hash(value) {
        return value.toUpperCase().charAt(0).charCodeAt(0) - 65;
    }

    // Memasukkan data
    setItem(value) {
        let index = this.hash(value);

        if (this.table[index] == null) {
            this.table[index] = [];
        }

        return this.table[index].push(value)
    }

    displayTable() {
        console.log(this.table)
    }

    display() {
        for (const key in this.table) {
            if (this.table[key] !== undefined) {
                console.log(key, ' : ', this.table[key]);
            }
        }
    }
}

module.exports = HashTable