import conexao from "../Conexao/conexao";
const sequelize = require("Sequelize");
var ClienteProduto = conexao.define("clienteProdutos", {
    IdProduto:{
        type: sequelize.INTEGER,
        
    },
    IdCliente:{
        type: sequelize.INTEGER
    },
    Genero:{
        type: sequelize.INTEGER
    },
    Nome:{
        type: sequelize.STRING
    },
    Preco:{
        type: sequelize.REAL(6,2)
    },
    NomeCliente:{
        type: sequelize.STRING
    }
   

})
ClienteProduto.removeAttribute('id');

export default ClienteProduto;