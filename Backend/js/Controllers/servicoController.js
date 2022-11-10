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
const servicos_1 = __importDefault(require("../Model/servicos"));
const clienteServico_1 = __importDefault(require("../Model/clienteServico"));
const sequelize = require('Sequelize');
const ServicoController = (0, express_1.Router)();
ServicoController.post("/cadastrarServico", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        yield servicos_1.default.create({
            Nome: dados.Nome,
            Preco: dados.Preco
        });
        res.json({
            ok: true,
            mensagem: "Sucesso ao cadastrar servico"
        });
    }
    catch (error) {
        res.json({
            ok: false,
            mensagem: error
        });
    }
}));
ServicoController.post("/editarServico", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        yield servicos_1.default.update({
            Nome: dados.Nome,
            Preco: dados.Preco
        }, { where: { Id: dados.Id } });
        res.json({
            ok: true,
            mensagem: "Sucesso ao editar servico"
        });
    }
    catch (error) {
        res.json({
            ok: false,
            mensagem: error
        });
    }
}));
ServicoController.delete("/deletarServico", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield servicos_1.default.destroy({ where: { Id: id } });
}));
ServicoController.get("/buscarServico", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield servicos_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        res.json(data);
    });
}));
ServicoController.get("/listarServico", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield servicos_1.default.findAll().then((data) => {
        res.json(data);
    });
}));
ServicoController.post("/cadastrarClienteServico", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        yield clienteServico_1.default.create({
            IdCliente: dados.IdCliente,
            IdServico: dados.IdServico,
            Genero: dados.Genero,
            Nome: dados.Nome,
            Preco: dados.Preco,
            NomeCliente: dados.NomeCliente
        });
        res.json({
            ok: true,
            mensagem: "Sucesso ao cadastrar consumo."
        });
    }
    catch (error) {
        res.json({
            ok: false,
            mensagem: error
        });
    }
}));
ServicoController.get("/listarMaisConsumidos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { count, rows } = yield clienteServico_1.default.findAndCountAll({
        group: "IdServico",
    });
    res.json({ count: count, rows: rows });
}));
ServicoController.get("/listarMaisConsumidosMoney", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield clienteServico_1.default.findAll({}).then((data) => {
        res.json({ rows: data });
    });
}));
ServicoController.get("/listarMaisConsumidosHomens", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { count, rows } = yield clienteServico_1.default.findAndCountAll({
        where: { Genero: 1 },
        group: "IdServico",
    });
    res.json({ count: count, rows: rows });
}));
ServicoController.get("/listarMaisConsumidosMulheres", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { count, rows } = yield clienteServico_1.default.findAndCountAll({
        where: { Genero: 2 },
        group: "IdServico",
    });
    res.json({ count: count, rows: rows });
}));
exports.default = ServicoController;
