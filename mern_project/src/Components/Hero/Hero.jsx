import "./Hero.css";
import hero_img from '../Assets/Hero0.png';

const Hero = ()=>{
    return(
  <div className="hero">
      <div className="para">
        <span> Discover the latest <br/>trends in <br />fashionable <br/>clothing</span>
      </div>  
<br />
      <div className="hero-btn">
        <p>Go to trends</p>
      <i class="fa-solid fa-arrow-right-long"></i>
      </div>
      <div className="hero-img">
        <img src={hero_img} alt="heroImg" />
      </div>
      
  </div>

    );
}

export default Hero;