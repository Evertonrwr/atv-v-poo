import React, {Component} from "react";
import BarraNavegacao from "./barraNavegacao";
import '../Css/home.css';
class Home extends Component{

    render(){
        var botoes = [{valor: "ClIENTES", link:"/Clientes"}, {valor: "SERVIÇOS", link:"/servicos"},{valor: "PRODUTOS", link:"/produtos"} ]
        let barraNavegacao = <BarraNavegacao  tema="purple accent-4" botoes={botoes} />;
        return(
            <div>
               {barraNavegacao}
               <div className="container">
                <div className="row">
                    <div id="bem-vindo"className="col-12">
                        <h1 >BEM-VINDO!</h1>
                    </div>
                </div>
                </div>
            </div>
           
        )

    }
}
export default Home;