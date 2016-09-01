const http = require('http');

const config = {
    host: '192.168.5.10',
    post: 8080,
    path: '/',
    method: 'GET',
};

request();

function request() {
    http.get(config, response => {
        response.on('end', () => {});
    });
    process.nextTick(request);
}
