const http = require('http'); //importando a dependencia http para o servidor

const hostname =  '127.0.0.1';  //servidor
const port = 3000;

const servidor = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Tudo OK!');
}

);

servidor.listen(port, hostname, () => console.log('Servidor iniciado.'));