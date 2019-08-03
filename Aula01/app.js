const express = require('express');

const app = express();

//Nossos web services

app.use('/data', (req,res) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json(dataAtual);
});

app.use('/inverter/:string', (req, res) => {
    let string = req.params.string;  //Recupera a variável de parâmetro
    string = string.split('').reverse().join(''); //inverte a string
    res.json(string);
    
    
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    res.send('Validador de CPF');
});



app.listen(3000, ()=> console.log('Servidor iniciado'));