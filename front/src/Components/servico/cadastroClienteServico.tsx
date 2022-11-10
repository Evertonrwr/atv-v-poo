import React, {useState, useEffect} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
import { textChangeRangeIsUnchanged } from "typescript";
import { render } from "@testing-library/react";

function CadastroClienteServico (){
    
    var cliente =[{Id:0, Nome:"", Genero:0}]
    var servico =[{Id:0, Nome:"", Preco:0.1}]
    const [clientes, setClientes] = useState(cliente)
    const [servicos, setServicos] = useState(servico)
    
    var listarServicos = () =>{
        fetch("/listarServico", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then((res)=> res.json()).then((data)=>{
            setServicos(data)
        })
    }
    var listarClientes =() =>{
        fetch("/listarClientes", {
            method: "get",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then((res)=> res.json()).then((data)=>{
           setClientes(data )
        })
    }
    function cadastrarConsumo (e:any){
        e.preventDefault();
        var IdServico = document.getElementById("servico") as HTMLSelectElement
        var IdCliente = document.getElementById("cliente") as HTMLSelectElement
       
        var servico =  servicos.filter((obj)=>{
            return obj.Id === Number( IdServico.value)
        })
        var cliente =  clientes.filter((obj)=>{
            return obj.Id === Number( IdCliente.value)
        })
        console.log(cliente)
        fetch("/cadastrarClienteServico", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                IdCliente : IdCliente.value,
                IdServico : IdServico.value,
                Genero : cliente[0].Genero,
                Nome: servico[0].Nome,
                Preco : servico[0].Preco,
                NomeCliente: cliente[0].Nome

            })
        }).then((res)=> res.json()).then((data)=>{
            console.log(data)
           alert(data.mensagem)
        })
        
       }
   
    useEffect(()=>{
        
         listarClientes();
         listarServicos();
         let select = document.querySelectorAll('.select');
         M.FormSelect.init(select);
         setTimeout(() => {
         let select = document.querySelectorAll('.select');
         M.FormSelect.init(select);
         }, 1000);
    }, [])
    
      
    
    
    var botoes = [{valor: "ClIENTES", link:"/Clientes"}, {valor: "SERVIÇOS", link:"/servicos"},{valor: "PRODUTOS", link:"/produtos"} ]
    let barraNavegacao = <BarraNavegacao  tema="purple accent-4" botoes={botoes} />;
    return(
        <div>
            {barraNavegacao}
            
            <div className="container">
                <div className="row">
                    <div className="col s12 ">
                        <div className="card ">
                            <div className="card-content ">
                            <h1 className="card-title">CADASTRAR CLIENTE/SERVICO</h1>
                            <hr></hr>
                            <div className="card-body">
                                <div className="row">
                                    <form className="col s12">
                                    
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <select id="servico" className="select">
                                                <option value="" disabled selected>Selecione..</option>
                                                {servicos.map(function (a) {
                                                    return <option value={a.Id}> {a.Nome}</option>
                                                })};
                                            
                                                </select>
                                            
                                                <label htmlFor="servico">Serviço</label>
                                            </div>
                                        
                                        </div> 
                                        <div className="row">
                                        
                                            <div className="input-field col s12">
                                                <select id="cliente" className="select">
                                                <option value="" disabled selected>Selecione..</option>
                                                
                                                {clientes.map(function (a) {
                                                    return <option value={a.Id}> {a.Nome}</option>
                                                })};
                                                </select>
                                                <label htmlFor="cliente">Cliente</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/servicos"}} > 
                                            Voltar
                                            </button>
                                            <button className="btn float" id="cadastrar" onClick={cadastrarConsumo}> Cadastrar</button>
                                            </div>
                                        </div>
                                
                                    </form>
                                </div>
                            
                            </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
        
    )
    

    
}
export default CadastroClienteServico;

