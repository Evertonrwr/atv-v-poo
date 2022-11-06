
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import Home from './Home';
import Teste2 from './Teste2';
import Cadastro from './clientes/cadastro';
import Editar from './clientes/editar';
import ClientesIndex from './clientes/clientes';
import ServicoIndex from './servico/servico';
import CadastroServico from './servico/cadastroServico';
import EditarServico from './servico/editarServico';
import Visualizar from './clientes/visualizar';
import ProdutosIndex from './produtos/produtos';
import CadastroProduto from './produtos/cadastroProduto';
import EditarProduto from './produtos/editarProdutos';
import CadastroClienteServico from './servico/cadastroClienteServico';
import CadastroClienteProduto from './produtos/cadastroClienteProduto';

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
            <Route  path="/visualizarCliente" element={<Visualizar/>} />
            <Route  path="/servicos" element={<ServicoIndex/>} />
            <Route  path="/cadastrarServico" element={<CadastroServico/>} />
            <Route  path="/editarServico" element={<EditarServico/>} />
            <Route  path="/cadastrarClienteServico" element={<CadastroClienteServico/>} />
            <Route  path="/produtos" element={<ProdutosIndex/>} />
            <Route  path="/cadastrarProduto" element={<CadastroProduto/>} />
            <Route  path="/editarProduto" element={<EditarProduto/>} />
            <Route  path="/cadastrarClienteProduto" element={<CadastroClienteProduto/>} />
            <Route path="*" element={<Navigate to="/" />} />
            
          </Routes>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;