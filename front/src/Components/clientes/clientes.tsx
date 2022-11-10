    import React, {Component , useEffect} from "react";
    import { Link } from "react-router-dom";
    import BarraNavegacao from "../barraNavegacao";
    import "../../Css/clientesIndex.css"
    import TabelasCliente from "./tabelasClientes";
    type props ={
        geral:Array<any>,
        homens:Array<any>,
        mulheres:Array<any>
    }
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
    class ClientesIndex extends Component<{}, {geral:Array<any>, homens:Array<any>, mulheres:Array<any>} >{
        private temp:any;
        constructor(props: props | Readonly<props>) {
            super(props)
            this.state= {
                geral: [],
                homens: [],
                mulheres: []
            }
           
            
        }
        
        listarClientes = () =>{
            fetch("/listarClientes", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                console.log(data)
               this.setState({
                geral:data
               })
               
            })
        }
        listarHomens = () =>{
            fetch("/listarHomens", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                console.log(data)
               this.setState({
                homens:data
               })
               
            })
        }
        listarMulheres = () =>{
            fetch("/listarMulheres", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                console.log(data)
               this.setState({
                mulheres:data
               })
               
            })
        }
        deletarUsuario = (e:any)=>{
            e.preventDefault();
            fetch("/deletarCliente" + "?id="+ e.target.closest('tr').id,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
    
            }).then((res)=> res.json()).then((data)=>{
                alert("Deletado com sucesso")
                
            
               
            })
            this.tempo();
    
        }
        tempo = ()  => {
            this.listarClientes();
            this.listarHomens();
            this.listarMulheres();
        };
        
        componentDidMount() {
            let el = document.querySelectorAll('.tabs');
            M.Tabs.init(el)
           
           
            this.listarClientes();
            this.listarHomens();
            this.listarMulheres();
           
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
                                                {/* <li className="tab col s2"><a href="#test4">+ Consumiram ($)</a></li>
                                                <li className="tab col s2"><a href="#test5">- Consumiram (qtd)</a></li>
                                             */}
                                            </ul>
                                            </div>
                                            <div id="test1" className="col s12">
                                                <TabelasCliente clientes={this.state.geral} deletar={this.deletarUsuario}/>
                                            </div>
                                            <div id="test2" className="col s12">
                                                <TabelasCliente clientes={this.state.homens} deletar={this.deletarUsuario}/>
                                            </div>
                                            <div id="test3" className="col s12">
                                                <TabelasCliente clientes={this.state.mulheres} deletar={this.deletarUsuario}/>
                                            </div>
                                            {/* <div id="test4" className="col s12">
                                                <TabelasCliente clientes={dados} deletar={this.deletarUsuario}/>
                                            </div>
                                            <div id="test5" className="col s12">
                                                <TabelasCliente clientes={dados} deletar={this.deletarUsuario}/>
                                            </div> */}
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