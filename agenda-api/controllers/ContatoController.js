// Alunos: Milena de Souza e Raphael Valencio - TSI

const Contato = require('../models/Contato');

let contatos = [];

const controller = {
    // Arrow function
    recuperarTodos: (req, res) => res.json(contatos),
    salvar: (req, res) => {
        const nome = req.body.nome;
        const telefone = req.body.telefone;
        const email = req.body.email;
        const idade = req.body.idade;


        if (nome && telefone) {
            let contato = new Contato();
            contato.nome= nome;
            contato.telefone = telefone;
            contato.email = email;
            contato.idade = idade;
            contatos.push(contato);
            res.status(201).json(contato);
        } else {
            res.status(400).json({
                mensagemErro: 'Nome ou telefone do Contato não informado'
            });
        }
    }
};

module.exports = controller;