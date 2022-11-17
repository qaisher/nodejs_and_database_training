const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log('Server Running...');
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/greet', (req, res) => {
    res.send('Hello');
});

app.get('/greet/:id', (req, res) => {
    res.send('Hello, your id is '+ req.params.id);
})