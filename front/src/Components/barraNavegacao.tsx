import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";
import '../Css/barraNavegacao.css';
import logo from "../Img/WB.png"


type props = {
    tema: string,
    botoes:Array<any>,
    
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }

    componentDidMount() {
       
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)

            let select = document.querySelectorAll('.select');
            M.FormSelect.init(select)
        
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map( (n) =>
                <li key={n.valor} className="botoes">
                     <Link className="botoes" to={n.link}>{n.valor}</Link>
                </li>
            )
            return lista
        }
    }

    render() {
        let estilo = `${this.props.tema}`
        return (
            <>
            
                <nav className={estilo} style={{"height":80}} >
                    <div className="nav-wrapper" style={{"padding":10}}>
                        <Link  to="/"className="brand-logo" >
                        <img  width="70"src={logo} alt="WB" />
                                
                        </Link>
                        <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                    {this.gerarListaBotoes()}
                </ul>
              
            </>
        )
    }
}