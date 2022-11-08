"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_1 = __importDefault(require("../Model/clientes"));
const ClientesController = (0, express_1.Router)();
ClientesController.post("/cadastroCliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        clientes_1.default.create({
            Nome: dados.Nome,
            NomeSocial: dados.NomeSocial,
            Cpf: parseInt(dados.Cpf),
            DataEmissaoCpf: null,
            Rg: parseInt(dados.Rg),
            DataEmissaoRg: null,
            DDD: parseInt(dados.DDD),
            Telefone: parseInt(dados.Telefone),
            Genero: parseInt(dados.Genero)
        });
        res.json({
            ok: true,
            mensagem: "Sucesso ao cadastrar cliente"
        });
    }
    catch (error) {
        res.json({
            ok: false,
            mensagem: error
        });
    }
}));
ClientesController.get("/listarClientes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("oi");
    yield clientes_1.default.findAll().then((data) => {
        res.json(data);
    });
}));
ClientesController.get("/listarHomens", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("oi");
    yield clientes_1.default.findAll({ where: { Genero: 1 } }).then((data) => {
        res.json(data);
    });
}));
ClientesController.get("/listarMulheres", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("oi");
    yield clientes_1.default.findAll({ where: { Genero: 2 } }).then((data) => {
        res.json(data);
    });
}));
ClientesController.delete("/deletarCliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield clientes_1.default.destroy({ where: { Id: id } });
}));
ClientesController.get("/buscarCliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield clientes_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        res.json(data);
    });
}));
ClientesController.post("/editarCliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        clientes_1.default.update({
            Nome: dados.Nome,
            NomeSocial: dados.NomeSocial,
            Cpf: parseInt(dados.Cpf),
            DataEmissaoCpf: null,
            Rg: parseInt(dados.Rg),
            DataEmissaoRg: null,
            DDD: parseInt(dados.DDD),
            Telefone: parseInt(dados.Telefone),
            Genero: parseInt(dados.Genero)
        }, { where: {
                Id: dados.Id
            } });
        res.json({
            ok: true,
            mensagem: "Sucesso ao editar cliente"
        });
    }
    catch (error) {
        res.json({
            ok: false,
            mensagem: error
        });
    }
}));
exports.default = ClientesController;
