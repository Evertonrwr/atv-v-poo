    import React, {Component} from "react";
    import { Link } from "react-router-dom";
    import BarraNavegacao from "../barraNavegacao";
    import "../../Css/clientesIndex.css"
    import TabelasServico from "./tabelaServico";
    type props ={
        geral: Array<any>
    }

    var dados = [{
        Id: 0,
        Nome: "Unha",
        Preco:3233

    }]
    var homens = [{
        Id: 0,
        Nome: "Unha",
        Preco:3233

    }]
    var mulheres = [{
        Id: 0,
        Nome: "Unha",
        Preco:3233

    }]
    class ServicoIndex extends Component<{}, {geral: Array<any>}>{
        constructor(props: props | Readonly<props>) {
            super(props)
            this.state={
                geral: []
            }
        }
        
        listarServicos = () =>{
            fetch("/listarServico", {
                method: "GET",
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
        deletarServico = (e:any)=>{
            e.preventDefault();
            fetch("/deletarServico" + "?id="+ e.target.closest('tr').id,{
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
            this.listarServicos();
           
        };
        componentDidMount() {
            let el = document.querySelectorAll('.tabs');
            M.Tabs.init(el)
            this.listarServicos();
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
                                    <h1 className="card-title">Serviços</h1>
                                    <hr></hr>
                                    <div className="card-body">
                                        <div className="row" >
                                            <div className="col s12" >
                                                <Link className="botoesClientes" to="/cadastrarClienteServico"> 
                                                    <i className=" botaoMedium medium material-icons">group_add</i> 
                                                    
                                                </Link>
                                                <Link className="botoesClientes" to="/cadastrarServico"> 
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
                                                <TabelasServico servico={this.state.geral} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test2" className="col s12">
                                                <TabelasServico servico={homens} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test3" className="col s12">
                                                <TabelasServico  servico={mulheres} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test4" className="col s12">
                                                <TabelasServico  servico={dados} deletar={this.deletarServico}/>
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
    export default ServicoIndex;