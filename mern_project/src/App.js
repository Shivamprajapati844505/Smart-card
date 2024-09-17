
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/pagas/Cart";
import Shop from "./Components/pagas/Shop";
import ShopCategory from "./Components/pagas/ShopCategory";
import Product from "./Components/pagas/Product";
import Contact from "./Components/pagas/Contact";
import LoginSignup from "./Components/pagas/LoginSignup";


import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory category="Men"/>}/>
          <Route path="/women" element={<ShopCategory category="Women"/>}/>
          <Route path="/kids" element={<ShopCategory category="Kids"/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>

      </Router>
      <div className="contect">
       
      </div>
      <Footer/>
    </div>
  );
}

export default App;
