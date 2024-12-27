import React from 'react';
import "./Footer.css"
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className='foot-logo' height={50} width={200}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non architecto, nulla quia voluptate in hic aliquid quis harum sint totam soluta ducimus dignissimos libero omnis rem illum ratione magni dolor.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get in touch</h2>
            <ul className='right'>
                <l1>+91-9146203696</l1>
                <l1>contact@tomato.com</l1>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
