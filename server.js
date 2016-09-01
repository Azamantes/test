const express = require('express');
const app = express();

const data = JSON.stringify({
    id: 2,
    name: 'Mateusz',
});

app.get('/', (a, b) => {
    b.send(data);
});
app.listen(8080);
