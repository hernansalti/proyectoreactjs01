
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart'

import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting='Tienda Nonno'/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting=''/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />}/>  
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
