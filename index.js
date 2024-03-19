const http = require('http');

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

    switch (req.url){
        case '/about':
            res.write('<h1>about page</h1>');
            break
        case '/contact':
            res.write('<h1>contact page</h1>');
            break
        default:
            res.write('<h1>index page</h1>')
    }

    res.end()
})

server.listen((process.argv[2]), ()=>{
    console.log('сервер Запущен')
})
