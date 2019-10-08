const hostname = 'localhost';
const port = 8080;

const server = require('./controller.js');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/about`);
});