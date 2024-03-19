const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index')
const aboutRoutes = require('./routes/about')
const contactRoutes = require('./routes/contact')
const productRoutes = require('./routes/product')

const app = express();

app.use(express.static(path.join(__dirname, '/public'))) //Запрос static files

app.use('/', indexRoutes)
app.use('/about', aboutRoutes)
app.use('/contact', contactRoutes)
app.use('/products', productRoutes)

app.listen((process.argv[2]), ()=>{
    console.log('сервер Запущен')
})