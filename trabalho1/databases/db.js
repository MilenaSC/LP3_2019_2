const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/cadastro';
mongoose.connect(dbURI ,{useNewUrlParser   : true })
  .then(() => console.log('Mongoose conectado'))
  .catch(erro => console.log(erro));