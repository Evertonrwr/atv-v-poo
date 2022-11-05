import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class Editar extends Component{
    componentDidMount() {
            let select = document.querySelectorAll('.select');
            M.FormSelect.init(select)
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
                                            <input placeholder="" id="nome" type="text" className="validate"/>
                                            <label htmlFor="nome">Nome</label>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input placeholder="" id="nomeSocial" type="text" className="validate"/>
                                            <label htmlFor="nomeSocial">Nome Social</label>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                            <select id="sexo" className="select">
                                            <option value="" disabled selected>Selecione..</option>
                                            <option className="option"value="1">Masculino</option>
                                            <option className="option" value="2">Feminino</option>
                                            </select>
                                            <label htmlFor="sexo">Gênero</label>
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input id="cpf" type="text" className="validate"/>
                                            <label htmlFor="cpf">Cpf</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input id="rg" type="text" className="validate"/>
                                            <label htmlFor="rg">Rg</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input id="telefone" type="text" className="validate"/>
                                            <label htmlFor="telefone">Telefone</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" > 
                                            <Link to="/Clientes">Voltar</Link>
                                           
                                            </button>
                                            <button className="btn float" id="editar"> Editar</button>
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