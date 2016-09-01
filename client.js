const http = require('http');

(function request() {
    http.get(config, response => {
        response.on('data', () => {})
        response.on('end', () => request);
    });
}());
