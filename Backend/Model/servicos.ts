import conexao from "../Conexao/conexao";
const sequelize = require("Sequelize");
var Servico = conexao.define("servicos", {
    Id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: sequelize.STRING
    },
    Preco:{
        type: sequelize.REAL(6,2)
    }

})

export default Servico;