import { Router } from "express";
import { appendFile } from "fs";
import Produto from "../Model/produtos";
import ClienteProduto from "../Model/clienteProduto";

const ProdutoController = Router();

ProdutoController.post("/cadastrarProduto", async(req, res)=>{
    var dados = req.body;
    try{
        await Produto.create({
            Nome: dados.Nome,
            Preco: dados.Preco
    
        })
        res.json({
            ok: true,
            mensagem: "Sucesso ao cadastrar cliente"
        })
    }catch(error){
        res.json({
            ok: false,
            mensagem: error
        })
    }
   

})

ProdutoController.post("/editarProduto", async(req, res)=>{
    var dados = req.body;
    try{
        await Produto.update({
            Nome: dados.Nome,
            Preco: dados.Preco
    
    
        }, {where:{Id: dados.Id}})
        res.json({
            ok: true,
            mensagem: "Sucesso ao editar Produto"
        })
    }catch(error){
        res.json({
            ok: false,
            mensagem: error
        })
    }
   

})

ProdutoController.delete("/deletarProduto", async(req,res)=>{
    var id = req.query.id
    await Produto.destroy({where:{Id: id}})
})

ProdutoController.get("/buscarProduto",async (req, res) => {
    var id = req.query.id
    await Produto.findByPk(id?.toString()).then((data)=>{
        res.json(data)
    })
   
})

ProdutoController.get("/listarProduto", async (req, res)=>{
    await Produto.findAll().then( (data)=>{
        res.json(data)
    })

})

ProdutoController.post("/cadastrarClienteProduto", async (req, res)=>{
    var dados = req.body;
    try{
        await ClienteProduto.create({
            IdCliente: dados.IdCliente,
            IdProduto: dados.IdProduto,
            Genero: dados.Genero,
            Nome: dados.Nome,
            Preco: dados.Preco,
            NomeCliente : dados.NomeCliente
        })
        res.json({
            ok:true,
            mensagem: "Sucesso ao cadastrar consumo."
        })

    }catch(error){
        res.json({
            ok:false,
            mensagem: error
        
        })
    }
   
})
ProdutoController.get("/listarProdMaisConsumidos", async (req, res)=>{
   
    const { count, rows } = await ClienteProduto.findAndCountAll({
       
        group: "IdProduto",
        })
   
    res.json({count: count, rows: rows})
})
ProdutoController.get("/listarProdMaisConsumidosMoney", async (req, res)=>{
   
     await ClienteProduto.findAll({
        }).then((data)=>{
            res.json({rows:data})
        })
})
ProdutoController.get("/listarProdMaisConsumidosHomens", async (req, res)=>{
   
    const { count, rows } = await ClienteProduto.findAndCountAll({
       where:{Genero:1},
        group: "IdProduto",
        })
   
    res.json({count: count, rows: rows})
})
ProdutoController.get("/listarProdMaisConsumidosMulheres", async (req, res)=>{
   
    const { count, rows } = await ClienteProduto.findAndCountAll({
       where:{Genero:2},
        group: "IdProduto",
        })
   
    res.json({count: count, rows: rows})
})
export default ProdutoController;
