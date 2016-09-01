const http = require('http');

const config = {
    host: '192.168.5.10',
    post: 8080,
    path: '/',
    method: 'GET',
    agent: 'false',
};

function request() {
    http.get(config, handler);
    return request();
}
