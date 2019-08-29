class Item {
    constructor() {
        this._id = `${new Date().getMilliseconds()}`;
        this.descricao = '';
        this.unidade = '';
        this.quantidade = 0;
    }
}

module.exports = Item;