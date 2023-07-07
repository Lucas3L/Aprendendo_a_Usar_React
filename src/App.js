import './App.css';
import HelloWorld from './Components/HelloWorld'
import SayMyName from './Components/SayMyName'
import Pessoa from './Components/Pessoa'
import Frase from './Components/Frase'
import List from './Components/List'

function App() {
  return (
    <div className="App">
      <h1> Teste 1 2 3</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome = "cidadão"/>
      <Pessoa nome = "Carlito" idade = "35" profissao = "Frentista" foto = "https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
