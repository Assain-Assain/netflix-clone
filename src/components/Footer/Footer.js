import React from 'react'
import './Footer.css'
import  Youtube_icon from '../../assets/youtube.png'
import  twitter_icon from '../../assets/twitter.png'
import  instagram_icon from '../../assets/instagram.png'
import  facebook_icon from '../../assets/facebook.png'
const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer_icon">
              <img src={Youtube_icon} alt=""/>
                <img src={instagram_icon} alt=""/>
                  <img src={facebook_icon} alt=""/>
                    <img src={twitter_icon} alt=""/>
    </div>
    <ul>
<li>Audio  Description</li>
<li>Help Center</li>
<li>gift Cards</li>
<li>Media Center</li>
<li>Inveter Relations</li>
<li>Jobs</li>
<li>Terms Of Use</li>
<li>Privacy</li>
<li>Legal Notice</li>
<li>Cookie Prefernces</li>
<li>Corporate Information</li>
<li>contact Us</li> 
    </ul>
    <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer