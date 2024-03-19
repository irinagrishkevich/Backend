const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
})

app.listen((process.argv[2]), ()=>{
    console.log('сервер Запущен')
})