import './App.css'
import HelloWorld from './Components/HelloWorld'
import SayMyName from './Components/SayMyName'
import Pessoa from './Components/Pessoa'
import Frase from './Components/Frase'
import List from './Components/List'
import Evento from './Components/Evento'
import Form from './Components/Form'
import Condicional from './Components/Condicional'
import OutraLista from './Components/OutraLista'
import SeuNome from './Components/SeuNome'
import {useState} from 'react'
import Saudacao from './Components/Saudacao'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Empresa from './Pages/Empresa'
import NavBar from './Components/layout/NavBar'
import Footer from './Components/layout/Footer'
function App() {

  const meusItens = ['React', 'Vue', 'Angular']
  const [nome,setNome] = useState()

  return (
    <div className="App">
      <h1> Teste 1 2 3</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome = "cidadão"/>
      <Pessoa nome = "Carlito" idade = "35" profissao = "Frentista" foto = "https://via.placeholder.com/150"/>
      <List/>
      <Evento numero = "1"/>
      <Form/>
      <Condicional/>
      <OutraLista itens = {meusItens}/>
      <OutraLista itens = {[]}/>
      <h1>State Lift</h1>
      <SeuNome setNome = {setNome}/>
      <Saudacao nome = {nome}/>
      
      <div>
        <h1>react-router-dom</h1>
          <Router>
            <NavBar/>
            <Routes>
              <Route  exact path="/" element={<Home />} > 
              </Route>
              <Route path="/empresa" element={<Empresa />} > 
              </Route>
              <Route path="/Contato" element={<Contato />} > 
              </Route>
            </Routes>
          </Router>
      </div>
    </div>
  )
}

export default App;
