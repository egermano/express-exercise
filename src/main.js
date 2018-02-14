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

// cluster.on('start', function (worker) {
//     Logger.info('Worker %d start :)', worker.id);
// });

// // Listen for dying workers
// cluster.on('death', function (worker) {
//     Logger.info('Worker %d died :(', worker.id);

//     cluster.fork();
// });

// if (cluster.isMaster && process.env.NODE_ENV !== 'local') {
//     var cpuCount = require('os').cpus().length;

//     for (var i = 0; i < cpuCount; i += 1) {
//         cluster.fork();
//     }
// } else {
    new Main();
// }