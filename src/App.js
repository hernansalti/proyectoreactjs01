import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
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
      <ItemListContainer greeting='Listado de Productos'/>
      <ItemDetailContainer/>
      <Counter stock={10} onAdd={handleOnAdd}/>

    </div>
    
  );
}

export default App;
