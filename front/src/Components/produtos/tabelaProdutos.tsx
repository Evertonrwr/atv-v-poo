import React, {Component} from "react";
import { Link } from "react-router-dom";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientesIndex.css"
type props = {
    produto:Array<any>,
    
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
            <td>{n.Nome}</td>
            <td>{n.Preco}</td>
            
            <td className="center">
                <Link className="" to="/editarProduto"> 
                    <i className=" botaoMedium small material-icons">create</i> 
                </Link>
                <Link className="" to="/cadastrarProduto"> 
                    <i className=" botaoMedium small material-icons">delete</i> 
                </Link>
               
                
            </td>
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
                        <th>Nome</th>
                        <th>Preço</th>
                        
                        <th className="center">Ações</th>
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