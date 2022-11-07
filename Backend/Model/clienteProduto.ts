import conexao from "../Conexao/conexao";
const sequelize = require("Sequelize");
var ClienteProduto = conexao.define("servicos", {
    IdProduto:{
        type: sequelize.INTEGER,
        
    },
    IdCliente:{
        type: sequelize.INTEGER
    },
   

})

export default ClienteProduto;