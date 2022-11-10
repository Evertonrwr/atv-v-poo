import { Router } from "express";
import { appendFile } from "fs";
import Servico from "../Model/servicos";
import ClienteServico from "../Model/clienteServico";
const sequelize = require('Sequelize')

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
            mensagem: "Sucesso ao cadastrar servico"
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

ServicoController.post("/cadastrarClienteServico", async (req, res)=>{
    var dados = req.body;
    try{
        await ClienteServico.create({
            IdCliente: dados.IdCliente,
            IdServico: dados.IdServico,
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
ServicoController.get("/listarMaisConsumidos", async (req, res)=>{
   
    const { count, rows } = await ClienteServico.findAndCountAll({
       
        group: "IdServico",
        })
   
    res.json({count: count, rows: rows})
})
ServicoController.get("/listarMaisConsumidosMoney", async (req, res)=>{
   
     await ClienteServico.findAll({
        }).then((data)=>{
            res.json({rows:data})
        })
})
ServicoController.get("/listarMaisConsumidosHomens", async (req, res)=>{
   
    const { count, rows } = await ClienteServico.findAndCountAll({
       where:{Genero:1},
        group: "IdServico",
        })
   
    res.json({count: count, rows: rows})
})
ServicoController.get("/listarMaisConsumidosMulheres", async (req, res)=>{
   
    const { count, rows } = await ClienteServico.findAndCountAll({
       where:{Genero:2},
        group: "IdServico",
        })
   
    res.json({count: count, rows: rows})
})
export default ServicoController;
