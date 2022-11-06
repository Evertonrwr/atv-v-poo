import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class CadastroServico extends Component{
   
    
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
                                <h1 className="card-title">CADASTRAR SERVIÇO</h1>
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
    
}
export default CadastroServico;