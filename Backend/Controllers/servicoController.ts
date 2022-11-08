import { Router } from "express";
import { appendFile } from "fs";
import Servico from "../Model/servicos";

const ServicoController = Router();

ServicoController.post("/cadastrarServico", async(req, res)=>{
    var dados = req.body;
    try{
        await Servico.create({
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

ServicoController.post("/editarServico", async(req, res)=>{
    var dados = req.body;
    try{
        await Servico.update({
            Nome: dados.Nome,
            Preco: dados.Preco
    
    
        }, {where:{Id: dados.Id}})
        res.json({
            ok: true,
            mensagem: "Sucesso ao editar servico"
        })
    }catch(error){
        res.json({
            ok: false,
            mensagem: error
        })
    }
   

})

ServicoController.delete("/deletarServico", async(req,res)=>{
    var id = req.query.id
    await Servico.destroy({where:{Id: id}})
})

ServicoController.get("/buscarServico",async (req, res) => {
    var id = req.query.id
    await Servico.findByPk(id?.toString()).then((data)=>{
        res.json(data)
    })
   
})

ServicoController.get("/listarServico", async (req, res)=>{
    await Servico.findAll().then( (data)=>{
        res.json(data)
    })

})
export default ServicoController;
