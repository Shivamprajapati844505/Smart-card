import './Footer.css';
import logo from "../Assets/logo1.jpg";
const Footer =()=>{
    return(
   <div className="footer">
       <div className="footer-design">
            <img src={logo} alt="brandLogo" className="footer-logo"/>
            <h3 className="brand1-name">TrendMart</h3>
         </div>

         <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>

         <div className="icons">
           <i class="fa-brands fa-square-instagram"></i>
           <i class="fa-brands fa-square-facebook"></i>
           <i class="fa-brands fa-square-whatsapp"></i>
           <i class="fa-brands fa-square-youtube"></i>
         </div>

         <hr />
         <div className="footer-para">
          &copy;2024 by Trand Mart. All Rights Reserved. Proudly created by Shivam
         </div>
   </div>
    )
}

export default Footer;