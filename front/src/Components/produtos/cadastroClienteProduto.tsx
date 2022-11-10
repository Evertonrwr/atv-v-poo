import React, {useState, useEffect} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
import { textChangeRangeIsUnchanged } from "typescript";
import { render } from "@testing-library/react";

const  CadastroClienteProduto = () => {
    
    var cliente =[{Id:0, Nome:"", Genero:0}]
    var produto =[{Id:0, Nome:"", Preco:0.1}]
    const [clientes, setClientes] = useState(cliente)
    const [produtos, setProdutos] = useState(produto)
    
    var listarProduto = () =>{
        fetch("/listarProduto", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then((res)=> res.json()).then((data)=>{
            setProdutos(data)
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
//    function clickMe (e:any){
//     e.preventDefault();
//     var Id = document.getElementById("servico") as HTMLSelectElement
//     var index =  servicos.filter((obj)=>{
//         console.log(Id.value)
//         console.log(obj.Id)
//         return obj.Id === Number( Id.value)
//     })
//     console.table(index)
//    }
    function cadastrarConsumo (e:any){
        e.preventDefault();
        var IdProduto = document.getElementById("produto") as HTMLSelectElement
        var IdCliente = document.getElementById("cliente") as HTMLSelectElement
        var produto =  produtos.filter((obj)=>{
                    return obj.Id === Number( IdProduto.value)
                })
        var cliente =  clientes.filter((obj)=>{
            return obj.Id === Number( IdCliente.value)
        })
        fetch("/cadastrarClienteProduto", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                IdCliente : IdCliente.value,
                IdProduto : IdProduto.value,
                Genero : cliente[0].Genero,
                Nome: produto[0].Nome,
                Preco : produto[0].Preco,
                NomeCliente: cliente[0].Nome

            })
        }).then((res)=> res.json()).then((data)=>{
            console.log(data)
        alert(data.mensagem)
        })
        
    }
    useEffect(()=>{
        let select = document.querySelectorAll('.select');
        M.FormSelect.init(select);
         listarClientes();
         listarProduto();
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
                            <h1 className="card-title">CADASTRAR CLIENTE/PRODUTO</h1>
                            <hr></hr>
                            <div className="card-body">
                                <div className="row">
                                    <form className="col s12">
                                    
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <select id="produto" className="select">
                                                <option value="" disabled selected>Selecione..</option>
                                                {produtos.map(function (a) {
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
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/produtos"}} > 
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
export default CadastroClienteProduto;

