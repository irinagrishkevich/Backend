const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    let file = 'index'
    switch (req.url){
        case '/about':
            file = 'about'
            break
        case '/contact':
            file = 'contact'
            break
    }

    fs.readFile('./views/'+file+'.html', 'utf8', (err, data) =>{
        res.write(data)
        res.end()
    })


})

server.listen((process.argv[2]), ()=>{
    console.log('сервер Запущен')
})
