import React, {Component} from "react";
import BarraNavegacao from "./barraNavegacao";
class Teste2 extends Component{

    render(){
        var botoes = [{valor: "TESTE", link:"/"}, {valor: "HOME", link:"/home"}]
        let barraNavegacao = <BarraNavegacao  tema="purple accent-4" botoes={botoes} />;
        return(
            <div>
               {barraNavegacao}
               teste 2
            </div>
        )

    }
}
export default Teste2;