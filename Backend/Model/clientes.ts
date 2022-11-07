import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const Clientes = conexao.define("clientes", {
    Id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: sequelize.STRING
    },
    NomeSocial:{
        type: sequelize.STRING
    },
    Cpf:{
        type: sequelize.INTEGER
    },
    DataEmissaoCpf:{
        type :sequelize.DATE
    },
    Rg:{
        type: sequelize.INTEGER
    },
    DataEmissaoRg:{
        type :sequelize.DATE
    },
    DDD:{
        type: sequelize.INTEGER
    },
    Telefone:{
        type: sequelize.INTEGER
    },
    Genero:{
        type: sequelize.INTEGER
    }

})
export default Clientes;