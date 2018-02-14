
class Resource {
    constructor(items) {
        this.items = items;
    }

    get(req, res) {
        console.log(this.items);
        res.json(this.items);
    }

    post(req, res) {
        const newItem = {};
        this.items.push(newItem);
        res.json(newItem);
    }

    put(req, res) {
        const newItem = {};
        this.items.push(newItem);
        res.json(newItem);
    }

    delete(req, res) {
        const index = 0;
        this.items.splice(index, 1);
        return this.get(req, res);
    }
}

module.exports = Resource;