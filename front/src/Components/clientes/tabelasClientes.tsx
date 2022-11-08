import React, {Component} from "react";
import { Link } from "react-router-dom";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientesIndex.css"
type props = {
    clientes:Array<any>,
    deletar: Function
    
}
class TabelasCliente extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarTr = this.gerarTr.bind(this)
    }
    
    gerarTr() {
        if (this.props.clientes.length <= 0) {
            return <> </>
        } else {
            let lista = this.props.clientes.map( (n) =>
            <tr id={n.Id}>
            <td>{n.Nome}</td>
            <td>{n.NomeSocial}</td>
            <td>{n.Genero ==1 ? "Masculino" : "Feminino"}</td>
            <td>{"(" + n.DDD + ") " + n.Telefone}</td>
            <td className="center">
                <Link className="" to={"/editarCliente/:id=" +n.Id } > 
                    <i className=" botaoMedium small material-icons">create</i> 
                </Link>
                <a className="" onClick={(e)=> this.props.deletar(e)} > 
                    <i className=" botaoMedium small material-icons">delete</i> 
                </a>
                <Link className="" to={"/visualizarCliente/:id=" +n.Id }> 
                    <i className=" botaoMedium small material-icons">remove_red_eye</i> 
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
                        <th>Nome Social</th>
                        <th>Gênero</th>
                        <th>Telefone</th>
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
export default TabelasCliente;