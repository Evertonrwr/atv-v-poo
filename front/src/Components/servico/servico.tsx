    import React, {Component} from "react";
    import { Link } from "react-router-dom";
    import BarraNavegacao from "../barraNavegacao";
    import "../../Css/clientesIndex.css"
    import TabelasServico from "./tabelaServico";
import { maxHeaderSize } from "http";
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
    class ServicoIndex extends Component<{}, {geral: Array<any>,clientes: Array<any>, mulheres:Array<any>, homens:Array<any>, maisConsumo:Array<any>, maisConsumoQtd:Array<any>, menosConsumo:Array<any>}>{
        constructor(props: props | Readonly<props>) {
            super(props)
            this.state={
                clientes:[],
                geral: [],
                mulheres:[],
                homens:[],
                maisConsumo:[],
                maisConsumoQtd:[],
                menosConsumo:[]
            }
        }
         listarClientes(){
            fetch("/listarClientes", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                this.setState({
                    clientes:data
                   })
            })
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
        listarServicosMulheres = () =>{
            fetch("/listarMaisConsumidosMulheres", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                var maisMulheres=[{}];
                maisMulheres.pop();
                for(var n =0; n<data.rows.length; n++){
                    maisMulheres.push({
                        Id: data.rows[n].IdServico,
                        Nome: data.rows[n].Nome,
                        Preco: data.rows[n].Preco,
                        Quantidade: data.count[n].count
                    })
                }
               this.setState({
                mulheres:maisMulheres
               })
               
               
            })
        }
        listarServicosHomens = () =>{
            fetch("/listarMaisConsumidosHomens", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                var maisHomens=[{}];
                maisHomens.pop();
                for(var n =0; n<data.rows.length; n++){
                    maisHomens.push({
                        Id: data.rows[n].IdServico,
                        Nome: data.rows[n].Nome,
                        Preco: data.rows[n].Preco,
                        Quantidade: data.count[n].count
                    })
                }
               this.setState({
                homens:maisHomens
               })
               
               
            })
        }
        listarServicoConsumo = () =>{
            fetch("/listarMaisConsumidos", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                var maisConsumo=[{}];
                maisConsumo.pop();
                for(var n =0; n<data.rows.length; n++){
                    maisConsumo.push({
                        Id: data.rows[n].IdServico,
                        Quantidade: data.count[n].count,
                        NomeCliente: data.rows[n].NomeCliente,
                        // Consumo: data.rows[n].Preco * data.count[n].count
                    })
                }
               this.setState({
                maisConsumo:maisConsumo
               })
               
               
            })
        }
        listarServicoConsumoValor = () =>{
            fetch("/listarMaisConsumidosMoney", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res)=> res.json()).then((data)=>{
                var maisConsumo=[{Id:0, NomeCliente:"", Consumo:0.0}];
                var menosConsumo=[{}];
                var maisConsumoQtd=[{}];
                maisConsumo.pop();
                menosConsumo.pop();
                maisConsumoQtd.pop();
                for(var n =0; n<data.rows.length; n=0){
                    var cliente =  data.rows.filter((obj:any)=>{
                        return obj.IdCliente === Number( data.rows[n].IdCliente)
                    })
                    var soma = 0;
                    var quantidade = 0
                    cliente.map((n:any)=>{
                        quantidade ++;
                        soma = soma + Number(n.Preco)
                    })
                    maisConsumo.push({
                        Id: cliente[0].IdServico,
                        NomeCliente: cliente[0].NomeCliente,
                        Consumo : soma

                    })
                    maisConsumoQtd.push({
                        Id: cliente[0].IdServico,
                        NomeCliente: cliente[0].NomeCliente,
                        Quantidade : quantidade

                    })
                    menosConsumo.push({
                        Id: cliente[0].IdServico,
                        NomeCliente: cliente[0].NomeCliente,
                        Quantidade : quantidade

                    })
                    data.rows = data.rows.filter((obj:any)=>{
                        return obj.IdCliente !== Number( data.rows[n].IdCliente)
                    })
                    
                    
                }
                console.log("mais consumo")
                console.log(maisConsumo)
               this.setState({
                maisConsumo:maisConsumo.sort((a,b)=>{return b.Consumo - a.Consumo}),
                maisConsumoQtd: maisConsumoQtd,
                menosConsumo: menosConsumo.reverse()
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
            this.listarServicosMulheres();
            this.listarServicosHomens();
            this.listarServicoConsumoValor();
           
        };
        componentDidMount() {
            let el = document.querySelectorAll('.tabs');
            M.Tabs.init(el)
            this.listarServicos();
            this.listarServicosMulheres();
            this.listarServicosHomens();
            this.listarServicoConsumoValor();
        }

        render(){
            var botoes = [{valor: "ClIENTES", link:"/Clientes"}, {valor: "SERVI??OS", link:"/servicos"},{valor: "PRODUTOS", link:"/produtos"} ]
            let barraNavegacao = <BarraNavegacao  tema="purple accent-4" botoes={botoes} />;
            return(
                <div>
                {barraNavegacao}
                <div className="container" style={{"width":"95%"}}>
                        <div className="row">
                            <div className="col  s12 ">
                                <div className="card " >
                                    <div className="card-content ">
                                    <h1 className="card-title">Servi??os</h1>
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
                                                <li className="tab col s2"><a  className="active" href="#test1">Servi??os</a></li>
                                                <li className="tab col s2"><a  href="#test2">Consumo (H)</a></li>
                                                <li className="tab col s2 "><a href="#test3">Consumo (M)</a></li>
                                                <li className="tab col s2"><a href="#test4">+ Consumiram($) </a></li>
                                                <li className="tab col s2"><a href="#test5">+ Consumiram(qtd) </a></li>
                                                <li className="tab col s2"><a href="#test6">- Consumiram(qtd) </a></li>
                                           
                                            </ul>
                                            </div>
                                            <div id="test1" className="col s12">
                                                <TabelasServico servico={this.state.geral} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test2" className="col s12">
                                                <TabelasServico servico={this.state.homens} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test3" className="col s12">
                                                <TabelasServico  servico={this.state.mulheres} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test4" className="col s12">
                                                <TabelasServico  servico={this.state.maisConsumo} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test5" className="col s12">
                                                <TabelasServico  servico={this.state.maisConsumoQtd} deletar={this.deletarServico}/>
                                            </div>
                                            <div id="test6" className="col s12">
                                                <TabelasServico  servico={this.state.menosConsumo.reverse()} deletar={this.deletarServico}/>
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