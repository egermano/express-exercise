const express = require('express');
const bodyParser = require('body-parser');

const Todos = require('./todos');

class Main {
    // app

    constructor () {
        this.app = express();
        this.app.use(bodyParser.json());
        
        this.app.listen(8080, () => {
            console.log('Start server... listening on 8080');

            this.setupRoutes();
        });
    }

    setupRoutes() {
        new Todos(this.app);
    }
}

new Main();