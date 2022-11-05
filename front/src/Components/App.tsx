
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import Home from './Home';
import Teste2 from './Teste2';
import Cadastro from './clientes/cadastro';
import Editar from './clientes/editar';
import ClientesIndex from './clientes/clientes';
import ServicoIndex from './servico/servico';


class App extends Component {
  state = {
    response: ''
  };
 handleClick = () =>{
    fetch("/vamo",{
        method:"GET",
    }).then((response)=> response.text()).then((data)=>{
        this.setState ( {
          response : this.state.response + data
        } )

    })
}


  render() {
    return (
      <div className="App">
         <Router>
        <div className="content">
          <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/clientes" element={<ClientesIndex/>} />
            <Route  path="/cadastrarCliente" element={<Cadastro/>} />
            <Route  path="/editarCliente" element={<Editar/>} />
            <Route  path="/servicos" element={<ServicoIndex/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;