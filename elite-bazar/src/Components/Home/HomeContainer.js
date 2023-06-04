import delivery from "../../Assets/img/delivery.png";
import "../../Assets/css/homeContainer.css";
import HeroBg from "../../Assets/img/heroBg.png";
import { heroData } from "../../utils/data";
import { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  
   
  return (
    <section className="main-cnt" id="home">
      <div id="cnt1" className="cnt">
        <div className="sub-cnt1">
          <p className="delivery-text">At your door-step</p>
          <div className="delivery-div">
            <img src={delivery} className="delivery-image" alt="Delivery" />
          </div>
        </div>
        <p id="delivery-subText">The Fastest Delivery of  <span id="sp">
            <TypeWriterEffect startDelay={1400} cursorColor="#3F3D56" multiText={
                ['Fruit', 'Vegitable']
            } multiTextDelay={1000} typeSpeed={50} multiTextLoop/>
            </span></p>
        
        <p id="delivery-paragraph">The FALSH is on delivery having an Unmatched Speed ONLY for Your Deliveries. Quick, Reliable, and Efficient Service. Say Goodbye to Waiting. Experience Lightning-Fast Deliveries Today!
        </p>

      <Link to="/menu">  <button type="button" id="order-btn">Order Now</button></Link>
      </div>
      <div id="cnt2">
        <img src={HeroBg} alt="hero-bg" id="hero" />

        <div className="dishes">
          {
            heroData.map(n => (
              <div key={n?.id} className="sub-dishes">
                <img src={n?.imageSrc} className="img1" alt="fruits" />
                <p className="pic-text">{n?.name}</p>
                <p className="pic-small-text">{n?.decp}</p>
                <p className="price-amount"><span className="dollar-sign">$</span>{n?.price}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomeContainer;