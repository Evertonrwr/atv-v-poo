import React, {Component} from "react";
import { Link } from "react-router-dom";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientesIndex.css"
type props = {
    servico:Array<any>,
    
}
class selects extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarTr = this.gerarTr.bind(this)
    }
    gerarTr() {
        if (this.props.servico.length <= 0) {
            return <></>
        } else {
            let lista = this.props.servico.map( (n) =>
                <option className="option" value={n.Id}>{n.Nome}</option>
            )
            return lista
        }
    }


    render(){
        return(
            <div className="row">
            <div className="input-field col s12">
                <select id="servio" className="select">
                <option value="" disabled selected>Selecione..</option>
                {this.gerarTr()}
               
                </select>
               
                <label htmlFor="servico">Serviço</label>
            </div>
            
            </div>
                
               
            
                                   
           
        )

    }
}
export default  selects;