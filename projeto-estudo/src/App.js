import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
   const name = 'Gabriel'
   const newName = name.toUpperCase() 

   const nomecalc = 'Total'
   const newTotal = nomecalc.toUpperCase()

   const img = 'minha imagem teste'
   const newImg = img.toUpperCase()

function sum(a, b){
  return a + b 
}
  return (
    <div className='App'>
      <h1>TESTE</h1>
      <p>Estudo Projeto</p>
      <p>Olá, {newName}</p>
      <p>{newTotal}: {sum(5, 5)}</p>
      <img src= {URL} alt = {newImg} />
      <HelloWorld/>
    </div>
  );
}

export default App;
