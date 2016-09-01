const http = require('http');

(function request() {
    http.get('http://192.168.5.10:8080/', response => {
        response.on('data', () => {})
        response.on('end', () => request());
    });
}());
