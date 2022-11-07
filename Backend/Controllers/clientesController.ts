import { Router } from "express";
import Clientes from "../Model/clientes";
const ClientesController = Router();

ClientesController.post("/cadastroCliente", async (req, res) =>{
    var dados = req.body;
    try{
        Clientes.create({
            Nome: dados.Nome,
            NomeSocial: dados.NomeSocial,
            Cpf : parseInt(dados.Cpf),
            DataEmissaoCpf: null,
            Rg: parseInt(dados.Rg),
            DataEmissaoRg: null,
            DDD: parseInt(dados.DDD),
            Telefone: parseInt(dados.Telefone),
            Genero: parseInt(dados.Genero)
        })
        res.json({
            ok: true,
            mensagem: "Sucesso ao cadastrar cliente"
        })

    }catch(error){
        res.json({
            ok:false,
            mensagem:error})
        


    }



})
ClientesController.get("/listarClientes", async (req, res)=>{
    console.log("oi")
    await Clientes.findAll().then( (data)=>{
        res.json(data)
    })

})
ClientesController.get("/listarHomens", async (req, res)=>{
    console.log("oi")
    await Clientes.findAll({where: {Genero:1}}).then( (data)=>{
        res.json(data)
    })

})

ClientesController.get("/listarMulheres", async (req, res)=>{
    console.log("oi")
    await Clientes.findAll({where: {Genero:2}}).then( (data)=>{
        res.json(data)
    })

})

ClientesController.delete("/deletarCliente", async(req,res)=>{
    var id = req.query.id
    await Clientes.destroy({where:{Id: id}})
})

export default ClientesController;