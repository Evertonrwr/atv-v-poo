import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class CadastroProduto extends Component{
    cadastrarProduto = (e:any) => {
        e.preventDefault();
        console.log("oi")
        var nome = document.getElementById("nome") as HTMLInputElement;
        var preco = document.getElementById("preco") as HTMLInputElement;
        
        
        var dados ={
            Nome:  nome.value,
            Preco: parseFloat(preco.value.replace(",", ".")),
            
        }

        fetch("/cadastrarProduto", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((res)=> res.json()).then((data)=>{
            alert(data.mensagem)
            
        })
        
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
                                <h1 className="card-title">CADASTRAR PRODUTO</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input placeholder="" id="nome" type="text" className="validate"/>
                                            <label htmlFor="nome">Nome</label>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input placeholder="" id="preco" type="text" className="validate"/>
                                            <label htmlFor="preco">Preço</label>
                                            </div>
                                            
                                        </div>
                                       
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/produtos"}} > 
                                            Voltar
                                            </button>
                                            <button className="btn float" id="cadastrar" onClick={this.cadastrarProduto}> Cadastrar</button>
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
export default CadastroProduto;