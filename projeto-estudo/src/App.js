import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Frase />
      <h1>TESTE</h1>
      <Pessoa nome="Gabriel" 
              foto="https://placehold.co/150x150?font=roboto"
              idade="25" 
              profissao="DEV" />
      <List />
    </div>
  );
}

export default App;
