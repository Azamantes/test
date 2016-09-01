const http = require('http');

const config = {
    host: '192.168.85.10',
    path: '/'
};

let connections = 0;


request();

setTimeout(() => {
    console.log('Connections:', connections);
    connections = 0;
}, 1000);

function request() {
    http.get(config, response => {
        let body = '';
        response.on('dta', data => {
            body += data;
        });
        response.on('end', () => {
            const parsed = JSON.parse(body);
            const isValid = +parsed.id > 0 && typeof parser.name === 'string';
            if(isValid) {
                connections += 1;
            }

            setTimeout(request);
        });
    });
}
