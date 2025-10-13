import './App.css';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <Pessoa nome="Gabriel" 
              foto="https://placehold.co/100x100?font=roboto"
              idade="25" 
              profissao="DEV" />
    </div>
  );
}

export default App;
