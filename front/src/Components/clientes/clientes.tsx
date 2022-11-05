    import React, {Component} from "react";
    import { Link } from "react-router-dom";
    import BarraNavegacao from "../barraNavegacao";
    import "../../Css/clientesIndex.css"
    import TabelasCliente from "./tabelasClientes";

    var dados = [{
        Id: 0,
        Nome: "Everton Ricardo",
        NomeSocial: "Everton Rocha",
        Genero:"Masculino",
        Telefone: 32423423

    }]
    var homens = [{
        Id: 0,
        Nome: "Everton Ricardo",
        NomeSocial: "Everton Rocha",
        Genero:"Masculino",
        Telefone: 32423423

    }]
    var mulheres = [{
        Id: 0,
        Nome: "Eloisa Maria",
        NomeSocial: "Eloisa Rocha",
        Genero:"Feminino",
        Telefone: 32423423

    }]
    class ClientesIndex extends Component{
        
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
                                    <h1 className="card-title">Clientes</h1>
                                    <hr></hr>
                                    <div className="card-body">
                                        <div className="row" >
                                            <div className="col s12" >
                                                <Link className="botoesClientes" to="/cadastrarCliente"> 
                                                    <i className=" botaoMedium medium material-icons">add_box</i> 
                                                    
                                                </Link>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col s12">
                                            <ul className="tabs">
                                                <li className="tab col s2"><a  className="active" href="#test1">Clientes</a></li>
                                                <li className="tab col s2"><a  href="#test2">Homens</a></li>
                                                <li className="tab col s2 "><a href="#test3">Mulheres</a></li>
                                                <li className="tab col s2"><a href="#test4">+ Consumiram ($)</a></li>
                                                <li className="tab col s2"><a href="#test5">- Consumiram (qtd)</a></li>
                                            </ul>
                                            </div>
                                            <div id="test1" className="col s12">
                                                <TabelasCliente clientes={dados}/>
                                            </div>
                                            <div id="test2" className="col s12">
                                                <TabelasCliente clientes={homens}/>
                                            </div>
                                            <div id="test3" className="col s12">
                                                <TabelasCliente clientes={mulheres}/>
                                            </div>
                                            <div id="test4" className="col s12">
                                                <TabelasCliente clientes={dados}/>
                                            </div>
                                            <div id="test5" className="col s12">
                                                <TabelasCliente clientes={dados}/>
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
    export default ClientesIndex;