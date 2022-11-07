"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require('sequelize');
const Clientes = conexao_1.default.define("clientes", {
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Nome: {
        type: sequelize.STRING
    },
    NomeSocial: {
        type: sequelize.STRING
    },
    Cpf: {
        type: sequelize.INTEGER
    },
    DataEmissaoCpf: {
        type: sequelize.DATE
    },
    Rg: {
        type: sequelize.INTEGER
    },
    DataEmissaoRg: {
        type: sequelize.DATE
    },
    DDD: {
        type: sequelize.INTEGER
    },
    Telefone: {
        type: sequelize.INTEGER
    },
    Genero: {
        type: sequelize.INTEGER
    }
});
exports.default = Clientes;
