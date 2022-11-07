"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require("Sequelize");
var Produtos = conexao_1.default.define("produtos", {
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Nome: {
        type: sequelize.STRING
    },
    Preco: {
        type: sequelize.REAL(6, 2)
    }
});
exports.default = Produtos;
