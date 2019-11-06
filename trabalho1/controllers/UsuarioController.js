const Usuario = require("../models/Usuario");

function temNumero(strSenha) {
  strSenha.split(",");
  for (const s of strSenha) {
    if (isNaN(s) === false) {
      return true;
    }
  }
}

function temLetraMaiuscula(strSenha) {
  const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Á", "À", "Â", "Ã",
    "É", "È", "Ê","Ē", "Õ", "Ó", "Ò", "Ô", "Ú", "Ù", "Í", "Ì"];
  strSenha.split(",");
  for (const s of strSenha) {
    for (const l of letras) {
      if (s === l) {
        return true;
      }
    }
  }
}

const controller = {
  salvar: async (req, res) => {
    const { nome, email, senha, senhaConfirmacao } = req.body;

    if (!nome.trim()) {
      return res.status(400).json({ Mensagem: "Nome não informado" });
    }

    if (!email.trim()) {
      return res.status(400).json({ Mensagem: "E-mail não informado" });
    }

    if (senha.length < 8) {
      return res
        .status(400)
        .json({ Mensagem: "senha não poder ser ter menos de 8 caracteres" });
    }

    if (!temNumero(senha)) {
      return res.status(400).json({
        Mensagem: "A senha deve conter ao menos um número"
      });
    }


    if (!temLetraMaiuscula(senha)) {
      return res.status(400).json({
        Mensagem: "A senha deve conter ao menos uma letra maiscula"
      });
    }

    if (!(senha === senhaConfirmacao)) {
      return res
        .status(400)
        .json({ Mensagem: "Senhas informadas não são iguais" });
    }

    await Usuario.create({ nome, email, senha })
      .then(usuarioSalvo => res.status(201).json(usuarioSalvo))
      .catch(erro => {
        console.log(erro);
        res
          .status(500)
          .json({ Mensagem: "Ocorreu um erro ao salvar o usuario" });
      });
  },

  recuperaPorParteDoNomeOuEmail: async (req, res) => {
    const { filtro } = req.body;
    const usuario = await Usuario.find({
      $or: [
        {
          email: {
            $regex: new RegExp(filtro),
            $options: "i"
          }
        },
        {
          nome: {
            $regex: new RegExp(filtro),
            $options: "i"
          }
        }
      ]
    });

    res.status(200).json(usuario);
  }
};

module.exports = controller;
