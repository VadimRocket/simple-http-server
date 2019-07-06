'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const server = http.createServer((request, response) => {
/*
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hi world');
    console.log(request.method, request.url);
*/
    if(request.url == '/') {
        const content = fs.readFileSync('index.html', 'utf-8');
        response.end(content);

    } else if (request.url == '/css/style.css') {
        const content = fs.readFileSync('css/style.css', 'utf-8');
        response.end(content);
    
    } else if (request.url == '/js/canvas.js') {
        const content = fs.readFileSync('js/canvas.js', 'utf-8');
        response.end(content);
    }


});

server.listen(process.env.PORT || port, ()  => {
    console.log(`Your server has been started!!!`);
});

server.on('error', error => {
    if(error.code === 'EACCES') {
        console.log(`No access to port: ${port}`);
    }
});


/*
    server.listen(port, hostname, () => {
    console.log(`Your server has been started at http://${hostname}:${port}/`);
});
*/



