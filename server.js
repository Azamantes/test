const http = require('http');

const data = JSON.stringify({
    id: 2,
    name: 'Mateusz',
});

const server = http.createServer((request, response) => {
    response.end(data);
});
server.listen(80, '192.168.5.10');
