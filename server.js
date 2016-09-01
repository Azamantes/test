const http = require('http');
const data = 'Hello World!';
let i = 0;

setInterval(() => {
    console.log('Connections:', i);
    i = 0;
});

const header = {
    'Content-Type': 'text/plain',
    'Content-Length': data.length,
};
http.createServer((request, response) => {
    ++i;
    b.writeHead(header);
    b.write(data);
    b.end();
});
