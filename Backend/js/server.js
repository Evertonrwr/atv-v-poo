"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientesController_1 = __importDefault(require("./Controllers/clientesController"));
const servicoController_1 = __importDefault(require("./Controllers/servicoController"));
const produtosController_1 = __importDefault(require("./Controllers/produtosController"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use(clientesController_1.default);
app.use(servicoController_1.default);
app.use(produtosController_1.default);
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});
app.get("/vamo", (req, res) => [
    res.send("Hello World")
]);
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
