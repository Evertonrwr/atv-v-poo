import React, {Component} from "react";
import { Link } from "react-router-dom";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientesIndex.css"
type props = {
    produto:Array<any>,
    deletar:Function
    
}
class TabelasProduto extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarTr = this.gerarTr.bind(this)
    }
    gerarTr() {
        if (this.props.produto.length <= 0) {
            return <></>
        } else {
            let lista = this.props.produto.map( (n) =>
            <tr id={n.Id}>
            {this.props.produto.some(item => item.hasOwnProperty('Nome'))?<td>{n.Nome}</td>: "" }
            {this.props.produto.some(item => item.hasOwnProperty('Preco'))?<td>{n.Preco}</td>: "" }
            {this.props.produto.some(item => item.hasOwnProperty('NomeCliente'))?<td>{n.NomeCliente}</td>: "" }
            {this.props.produto.some(item => item.hasOwnProperty('Quantidade'))?<td>{n.Quantidade}</td>: "" }
            {this.props.produto.some(item => item.hasOwnProperty('Consumo'))?<td>{n.Consumo}</td>: "" }
            
            {this.props.produto.some(item => item.hasOwnProperty('Quantidade')) || this.props.produto.some(item => item.hasOwnProperty('NomeCliente'))?"": 
            <td className="center">
                <Link className="" to={"/editarProduto/:id=" +n.Id}> 
                    <i className=" botaoMedium small material-icons">create</i> 
                </Link>
                <a> 
                    <i  onClick={(e)=> this.props.deletar(e)} className=" botaoMedium small material-icons">delete</i> 
                </a>
               
                
            </td>}
        </tr>
            )
            return lista
        }
    }


    render(){
        return(
                <div className="row" >
                <div className="col s12" >
                <table className="striped responsive-table">
                    <thead>
                    <tr>
                        {this.props.produto.some(item => item.hasOwnProperty('Nome'))?<th>Nome</th>: "" }
                        {this.props.produto.some(item => item.hasOwnProperty('Preco'))?<th>Preco</th>: "" }
                        {this.props.produto.some(item => item.hasOwnProperty('NomeCliente') )?<th>Cliente</th>: "" }
                        {this.props.produto.some(item => item.hasOwnProperty('Quantidade') )?<th>Quantidade</th>: "" }
                        
                        {this.props.produto.some(item => item.hasOwnProperty('Consumo') )?<th>Consumo</th>: "" }
                        {this.props.produto.some(item => item.hasOwnProperty('NomeCliente') ) 
                        || this.props.produto.some(item => item.hasOwnProperty('Quantidade')) ?"":
                         <th className="center">Ações</th> }
                        
                    </tr>
                    </thead>

                    <tbody>
                        {this.gerarTr()}
                  
                    </tbody>
                </table>
                </div>
            </div>
                
               
            
                                   
           
        )

    }
}
export default TabelasProduto;