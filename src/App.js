import './App.css';
import HelloWorld from './Components/HelloWorld'
import SayMyName from './Components/SayMyName'
import Pessoa from './Components/Pessoa'
function App() {
  return (
    <div className="App">
      <SayMyName nome = "Carlito"/>
      <Pessoa nome = "Carlito" idade = "35" profissao = "Frentista" foto = "https://via.placholder.com/150"/>
    </div>
  );
}

export default App;
