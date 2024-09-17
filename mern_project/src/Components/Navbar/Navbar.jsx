import "./Navbar.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from "../Assets/logo1.jpg";
import cart_logo from "../Assets/cart-logo.jpg";

const Navbar =()=>{

      const[menu,setMenu] = useState("shopAll");
    return (
        <div className="navbar">
         <div className="logo-title">
            <img src={logo} alt="brandLogo" className="brand-logo"/>
            <h1 className="brand-name">TrendMart</h1>
         </div>

         
            <ul>
                <li onClick={()=>{setMenu("shopAll")}}><Link to="/">Shop All</Link>{menu==="shopAll" ? <hr/> : <></> } </li>
                <li onClick={()=>{setMenu("shopmen")}}><Link to="/men">Shop Men</Link>{menu==="shopmen" ? <hr/> : <></> } </li>
                <li onClick={()=>{setMenu("shopWomen")}}><Link to="/women">Shop Women</Link>{menu==="shopWomen" ? <hr/> : <></> }</li>
                <li onClick={()=>{setMenu("shopKids")}}><Link to="/kids">Shop Kids</Link>{menu==="shopKids" ? <hr/> : <></> }</li>
                <li onClick={()=>{setMenu("contact")}}><Link to="/contact">Contact</Link>{menu==="contact" ? <hr/> :<></>}</li>
            </ul>
         
         <div className="actions">
         <Link to="/login"><button className="signin-btn">Sign-in</button></Link>
            <Link to="/cart"><img src={cart_logo} alt="cartLogo" className="cart-logo" /></Link>
           <div className="item-count">0</div>
         </div>
    </div>
    )
}

export default Navbar;