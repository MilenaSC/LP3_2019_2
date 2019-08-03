const express = require('express'); //importando o express

const app = express(); //constante que controla nosso app

app.use('/', (req, res) => res.send('Tudo OK google!'));

app.listen(3000, ()=> console.log ('Servidor iniciado.'));