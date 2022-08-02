import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/Counter/Counter';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }
  return (
    <div className="App">
      <div>
        <h1 class='titulo'>Tienda Nonno Bazar</h1>
      </div>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos'/>
      <Counter stock={10} onAdd={handleOnAdd}/>

    </div>
    
  );
}

export default App;
