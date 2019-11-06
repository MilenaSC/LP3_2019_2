const { Schema, model } = require("mongoose");

const esquema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

const Usuario = model("Usuario", esquema);

module.exports = Usuario;
