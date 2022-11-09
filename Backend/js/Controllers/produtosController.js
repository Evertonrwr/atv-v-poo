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
const produtos_1 = __importDefault(require("../Model/produtos"));
const clienteProduto_1 = __importDefault(require("../Model/clienteProduto"));
const ProdutoController = (0, express_1.Router)();
ProdutoController.post("/cadastrarProduto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        yield produtos_1.default.create({
            Nome: dados.Nome,
            Preco: dados.Preco
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
ProdutoController.post("/editarProduto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        yield produtos_1.default.update({
            Nome: dados.Nome,
            Preco: dados.Preco
        }, { where: { Id: dados.Id } });
        res.json({
            ok: true,
            mensagem: "Sucesso ao editar Produto"
        });
    }
    catch (error) {
        res.json({
            ok: false,
            mensagem: error
        });
    }
}));
ProdutoController.delete("/deletarProduto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield produtos_1.default.destroy({ where: { Id: id } });
}));
ProdutoController.get("/buscarProduto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield produtos_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        res.json(data);
    });
}));
ProdutoController.get("/listarProduto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield produtos_1.default.findAll().then((data) => {
        res.json(data);
    });
}));
ProdutoController.post("/cadastrarClienteProduto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    try {
        yield clienteProduto_1.default.create({
            IdCliente: dados.IdCliente,
            IdProduto: dados.IdProduto,
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
exports.default = ProdutoController;
