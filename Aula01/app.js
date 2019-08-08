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

//valida o cpf
app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    let soma = 0;
    let numeros;
    let i;
    let digitos;
    let digitos_iguais;
    let resultado;
    digitos_iguais = 1;

    if (cpf.length < 11)
          res.send(false);
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = cpf.substring(0,9);
          digitos = cpf.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                res.send(false);
          numeros = cpf.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                res.send(false);
          res.send(true);
          }
    else
        res.send(false);

});



app.listen(3000, ()=> console.log('Servidor iniciado'));