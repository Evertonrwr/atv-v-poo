import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class Editar extends Component{
    public d = 1;
    loadData =  ()=>{
        var string = window.location.href;
        const id = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        var nome = document.getElementById("nome") as HTMLInputElement;
        var nomeSocial = document.getElementById("nomeSocial") as HTMLInputElement;
        var genero = document.getElementById("sexo") as HTMLSelectElement
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
            nome.value = data.Nome;
            nomeSocial.value = data.NomeSocial;
            this.d = data.Genero
            cpf.value = data.Cpf;
            rg.value = data.Rg;
            ddd.value = data.DDD;
            telefone.value = data.Telefone; 
            
        })
    }
    editarCliente =(e:any) => {
        e.preventDefault();
        console.log("oi")
        var string = window.location.href;
        const id = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        var nome = document.getElementById("nome") as HTMLInputElement;
        var nomeSocial = document.getElementById("nomeSocial") as HTMLInputElement;
        var genero = document.getElementById("sexo") as HTMLSelectElement
        var cpf =  document.getElementById("cpf") as HTMLInputElement;
        var rg = document.getElementById("rg") as HTMLInputElement;
        var ddd = document.getElementById("ddd") as HTMLInputElement;
        var telefone = document.getElementById("telefone") as HTMLInputElement;
        
        var dados ={
            Id:  id,
            Nome:  nome.value,
            NomeSocial: nomeSocial.value,
            Genero: genero.value,
            Cpf: cpf.value,
            Rg: rg.value,
            DDD: ddd.value,
            Telefone: telefone.value 
        }

        fetch("/editarCliente", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((res)=> res.json()).then((data)=>{
            alert(data.mensagem)
            
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
                                <h1 className="card-title">EDITAR CLIENTE</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                        <div className="row">
                                        
                                            <div className="input-field col s12">
                                            <p>Nome</p>
                                            <input placeholder="" id="nome" type="text" className="validate" />
                                           
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <p>Nome Social</p>
                                            <input placeholder="" id="nomeSocial" type="text" className="validate"/>
                                            
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                            <p>Gênero</p>
                                            <select id="sexo" className="select">
                                            <option value="" disabled >Selecione..</option>
                                            
                                            <option className="option "  selected={this.d==1?true:false } value="1">Masculino</option>
                                            <option className="option " selected={this.d==2?true:false } value="2">Feminino</option>
                                            </select>
                                          
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <p>Cpf</p>
                                            <input id="cpf" type="text" className="validate"/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <p>Rg</p>
                                            <input id="rg" type="text" className="validate"/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s3">
                                                <p>DDD</p>
                                            <input id="ddd" type="text" className="validate"/>
                                            
                                            </div>
                                            
                                            <div className="input-field col s9">
                                            <p>Telefone</p>
                                            <input id="telefone" type="text" className="validate"/>
                                           
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/Clientes"}} > 
                                            Voltar
                                           
                                            </button>
                                            <button className="btn float" onClick={this.editarCliente}id="editar"> Editar</button>
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
export default Editar;