const excelToJson = require('convert-excel-to-json');

let json = excelToJson({
    sourceFile: 'lista.xlsx',
    columnToKey:{
        A: 'unidade',
        B: 'descricao'
    }
})

json = json['Página1'].slice(1,json.length);
console.log(json)