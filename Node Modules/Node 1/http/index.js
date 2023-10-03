const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method);
    // req -> url, method, headers (metadata), body, query
    // res -> data -> file , json, html , headers, status
    res.statusCode = 200;
    const data = '{"name": "uttam"}'
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('This is first message from server');
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Hello World !</h1>')
    res.setHeader('Content-Type', ' application/json')
    res.write(data)
    res.end();
})

server.listen(port, () => {
    console.log('server is listening to port no : ' + port);
})