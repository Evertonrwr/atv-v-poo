import conexao from "../Conexao/conexao";
const sequelize = require("Sequelize");
var ClienteServico = conexao.define("servicos", {
    IdProduto:{
        type: sequelize.INTEGER,
        
    },
    IdCliente:{
        type: sequelize.INTEGER
    },
   

})

export default ClienteServico;