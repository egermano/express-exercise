const items = [
    {
        title: 'create a project',
        done: false
    },
    {
        title: 'writes classes',
        done: false
    },
    {
        title: 'create start script',
        done: false
    },
];

class Todos {
    constructor (app) {
        this.app = app;
        this.app.get('/todos', this.get);
        this.app.post('/todos', this.post);
        this.app.put('/todos/:index', this.put);
        this.app.delete('/todos/:index', this.delete);
    }

    get(req, res) {
        res.json(items);
    }

    post(req, res) {
        const newItem = req.body;
        items.push(newItem);
        res.json(newItem);
    }

    put(req, res) {
        const index = req.params.index;
        const item = Object.assign(items[index], req.body);
        items[index] = item;
        res.json(item);
    }
    
    delete(req, res) {
        const index = req.params.index;
        items.splice(index, 1);
        res.json(items);
    }

}

module.exports = Todos;