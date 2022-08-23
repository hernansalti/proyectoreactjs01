// import './App.css';
// import Navbar from './Components/Navbar/Navbar.js';
// import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function App() {

//   return (
//     <div className="App"> 
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<ItemListContainer greeting='Productos destacados'/>}/>
//           <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
//           <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
//           <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
//         </Routes>
//       </BrowserRouter>
      
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification'


function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Nuestros productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Sección'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
              <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
