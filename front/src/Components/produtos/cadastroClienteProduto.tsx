import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class CadastroClienteProduto extends Component{
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
                                <h1 className="card-title">CADASTRAR CLIENTE/PRODUTO</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                        
                                        <div className="row">
                                        <div className="input-field col s12">
                                            <select id="produto" className="select">
                                            <option value="" disabled selected>Selecione..</option>
                                            <option className="option"value="1">Produto 1</option>
                                            <option className="option" value="2">Produto 2</option>
                                            </select>
                                            <label htmlFor="produto">Produtos</label>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                            <select id="cliente" className="select">
                                            <option value="" disabled selected>Selecione..</option>
                                            <option className="option"value="1">Cliente 1</option>
                                            <option className="option" value="2">Cliente 2</option>
                                            </select>
                                            <label htmlFor="cliente">Cliente</label>
                                        </div>
                                        </div>
                                      
                                       
                                       
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" > 
                                            <Link to="/produtos">Voltar</Link>
                                           
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
export default CadastroClienteProduto;