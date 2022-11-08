import React, {useState, useEffect} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
import { textChangeRangeIsUnchanged } from "typescript";
import { render } from "@testing-library/react";

function CadastroClienteServico (){
    
    var cliente =[{Id:0, Nome:""}]
    var servico =[{Id:0, Nome:""}]
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
                            <h1 className="card-title">CADASTRAR CLIENTE/PRODUTO</h1>
                            <hr></hr>
                            <div className="card-body">
                                <div className="row">
                                    <form className="col s12">
                                    
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <select id="servio" className="select">
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
                                            <button className="btn " id="voltar" > 
                                            <Link to="/servicos">Voltar</Link>
                                        
                                            </button>
                                            <button className="btn float" id="cadastrar"> Cadastrar</button>
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

