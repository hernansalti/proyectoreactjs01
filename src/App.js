import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <div>
        <h1 class='titulo'>Tienda Nonno Bazar</h1>
      </div>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos'/> 

    </div>
    
  );
}

export default App;
