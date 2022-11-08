import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class Visualizar extends Component{
    loadData =  ()=>{
        var string = window.location.href;
        const id = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        var nome = document.getElementById("nome") as HTMLInputElement;
        var nomeSocial = document.getElementById("nomeSocial") as HTMLInputElement;
        var genero = document.getElementById("sexo") as HTMLInputElement;
        var cpf =  document.getElementById("cpf") as HTMLInputElement;
        var rg = document.getElementById("rg") as HTMLInputElement;
        var ddd = document.getElementById("ddd") as HTMLInputElement;
        var telefone = document.getElementById("telefone") as HTMLInputElement;
        
        var dados ={
            Nome:  nome.value,
            NomeSocial: nomeSocial.value,
            Genero: genero.value,
            Cpf: cpf.value,
            Rg: rg.value,
            DDD: ddd.value,
            Telefone: telefone.value 
        }
        fetch("/buscarCliente" + "?id=" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
           
        }).then((res)=> res.json()).then((data)=>{
            console.log(data)
            nome.value = data.Nome;
            nomeSocial.value = data.NomeSocial;
            genero.value = parseInt(data.Genero) == 1 ? "Masculino": "Feminino";
            cpf.value = data.Cpf;
            rg.value = data.Rg;
            ddd.value = data.DDD;
            telefone.value = data.Telefone; 
            
        })
    }
    componentDidMount() {
            let select = document.querySelectorAll('.select');
            M.FormSelect.init(select)
            this.loadData();
    }
    
    render(){
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
                                <h1 className="card-title">VISUALIZAR CLIENTE</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                        <div className="row">
                                        
                                            <div className="input-field col s12">
                                            <p>Nome</p>
                                            <input placeholder="" id="nome" type="text"  readOnly className="validate" />
                                           
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <p>Nome Social</p>
                                            <input placeholder="" id="nomeSocial" type="text" readOnly className="validate"/>
                                            
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                            <p>Gênero</p>
                                            <input placeholder="" id="sexo" type="text" readOnly className="validate"/>
                                            
                                          
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <p>Cpf</p>
                                            <input id="cpf" type="text"  readOnly className="validate"/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <p>Rg</p>
                                            <input id="rg" type="text"  readOnly className="validate"/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s3">
                                                <p>DDD</p>
                                            <input id="ddd" type="text" readOnly className="validate"/>
                                            
                                            </div>
                                            
                                            <div className="input-field col s9">
                                            <p>Telefone</p>
                                            <input id="telefone" type="text" readOnly className="validate"/>
                                           
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/Clientes"}} > 
                                            Voltar
                                           
                                            </button>
                                            
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
    
}
export default Visualizar;