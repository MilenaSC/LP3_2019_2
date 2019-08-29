class Lista {

    constructor(nome) {
        this._id = `${new Date().getMilliseconds()}`;
        this.nome = nome;
        this.itens = [];
    }
}

module.exports = Lista;