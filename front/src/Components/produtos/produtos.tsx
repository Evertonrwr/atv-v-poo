    import React, {Component} from "react";
    import { Link } from "react-router-dom";
    import BarraNavegacao from "../barraNavegacao";
    import "../../Css/clientesIndex.css"
    import TabelasProduto from "./tabelaProdutos";

    var dados = [{
        Id: 0,
        Nome: "Esmalte",
        Preco:3233

    }]
    var homens = [{
        Id: 0,
        Nome: "Bolsa",
        Preco:3233

    }]
    var mulheres = [{
        Id: 0,
        Nome: "Shampoo",
        Preco:3233

    }]
    class ProdutosIndex extends Component{
        
        componentDidMount() {
            let el = document.querySelectorAll('.tabs');
        
            M.Tabs.init(el)
        }

        render(){
            var botoes = [{valor: "ClIENTES", link:"/Clientes"}, {valor: "SERVIÇOS", link:"/servicos"},{valor: "PRODUTOS", link:"/produtos"} ]
            let barraNavegacao = <BarraNavegacao  tema="purple accent-4" botoes={botoes} />;
            return(
                <div>
                {barraNavegacao}
                <div className="container" style={{"width":"95%"}}>
                        <div className="row">
                            <div className="col  s12 ">
                                <div className="card " >
                                    <div className="card-content ">
                                    <h1 className="card-title">Produtos</h1>
                                    <hr></hr>
                                    <div className="card-body">
                                        <div className="row" >
                                            <div className="col s12" >
                                                <Link className="botoesClientes" to="/cadastrarClienteProduto"> 
                                                    <i className=" botaoMedium medium material-icons">group_add</i> 
                                                    
                                                </Link>
                                                <Link className="botoesClientes" to="/cadastrarProduto"> 
                                                    <i className=" botaoMedium medium material-icons">add_box</i> 
                                                    
                                                </Link>
                                               
                                            </div>
                                           
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col s12">
                                            <ul className="tabs">
                                                <li className="tab col s2"><a  className="active" href="#test1">Serviços</a></li>
                                                <li className="tab col s2"><a  href="#test2">Consumo (H)</a></li>
                                                <li className="tab col s2 "><a href="#test3">Consumo (M)</a></li>
                                                <li className="tab col s2"><a href="#test4">+ Consumiram </a></li>
                                            </ul>
                                            </div>
                                            <div id="test1" className="col s12">
                                                <TabelasProduto produto={dados}/>
                                            </div>
                                            <div id="test2" className="col s12">
                                                <TabelasProduto produto={homens}/>
                                            </div>
                                            <div id="test3" className="col s12">
                                                <TabelasProduto produto={mulheres}/>
                                            </div>
                                            <div id="test4" className="col s12">
                                                <TabelasProduto produto={dados}/>
                                            </div>
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
    export default ProdutosIndex;