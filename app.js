const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 5000


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<html><head><title>Node.JS - Exercício 01</title></head><body><h2>Node.JS - Exercício 01</h2><h1>Lino Antonio Melhado Neto</h2></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});