class Contato {


    constructor() {
        this._id = `${new Date().getMilliseconds()}`;
        this.nome = '';
        this.telefone = '';
        this.email = '';
        this.idade = 0;

    }
}

module.exports = Contato;