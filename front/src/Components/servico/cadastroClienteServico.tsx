import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
import { textChangeRangeIsUnchanged } from "typescript";
import { render } from "@testing-library/react";
import Selects from "./selects"
type props = {
    cliente: Array<any>,
    servico: Array<any>
}
class CadastroClienteServico extends Component<{}, {clientes:Array<any>, servicos:Array<any>}>{
    constructor(props: props | Readonly<props>) {
        super(props)
        this.state={
            clientes:[],
            servicos:[]
        }
        this.gerarCl = this.gerarCl.bind(this)
        this.gerarSr = this.gerarSr.bind(this)
    }
    
    gerarCl (clientes:Array<any>) {
       
        if (clientes.length <= 0) {
            return <> </>
        } else {
            let lista = clientes.map( (n) =>
              <option className="option" value={n.Id}> {n.Nome}</option>
        )
            return lista
        }
    }
    gerarSr(servicos:Array<any>) {
        
        if (servicos.length <= 0) {
            return <>0000</>
        } else {
            let lista = servicos.map( (n) =>
            <option className="option" value={n.Id}>{n.Nome}</option>
            )
            return lista
        }
    }
    listarServicos = () =>{

        let dados: Array<any> = [];
        fetch("/listarServico", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then((res)=> res.json()).then((data)=>{
           
            this.setState({
                servicos:data
               })
               console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
               console.log(this.state.servicos)
           
        })
       
        
    }
    listarClientes =() =>{
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
   

    componentDidMount() {
        let select = document.querySelectorAll('.select');
        M.FormSelect.init(select);
         this.listarClientes();
        this.listarServicos();
      
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
                                <h1 className="card-title">CADASTRAR CLIENTE/SERVICO</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                       
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <select id="servio" className="select">
                                                    <option value="" disabled selected>Selecione..</option>
                                                    {this.state.clientes.map((n)=>{
                                                        return <option >{n.Nome}</option>
                                                    })}
                                                
                                                    </select>
                                                
                                                    <label htmlFor="servico">Serviço</label>
                                                </div>
                                            
                                            </div> 
                                            <div className="row">
                                            
                                                <div className="input-field col s12">
                                                    <select id="cliente" className="select">
                                                    <option value="" disabled selected>Selecione..</option>
                                                    
                                                    {    this.state.servicos.map( (n) =>
                                                    
                                                        <option className="option" value={n.Id}>{n.Nome}</option>
                                                        )}
                                                    </select>
                                                    <label htmlFor="cliente">Cliente</label>
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
export default CadastroClienteServico;

