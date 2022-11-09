import conexao from "../Conexao/conexao";
const sequelize = require("Sequelize");
var ClienteServico = conexao.define("clienteServicos", {
    IdServico:{
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
ClienteServico.removeAttribute('id');

export default ClienteServico;