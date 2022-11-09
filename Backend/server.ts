import express from 'express';
import ClientesController from './Controllers/clientesController';
import ServicoController from './Controllers/servicoController';
import ProdutoController from './Controllers/produtosController';

const app: express.Application = express();

const port: number = 5000;

app.use(express.json())

app.use(ClientesController)
app.use(ServicoController)
app.use(ProdutoController)

app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});
app.get("/vamo", (req, res)=>[
    res.send("Hello World")
])
 
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});