import React from 'react'
import Kenya from './kenya.svg'
import Usa from './usa.png'
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer>
        <div className='row footer-row'>
            <div className='contact-us'>
                <h3>CONTACT US</h3>
                <ul>
                    <li>ELP CHAPTER DeKUT   <img src={Kenya}/></li> 

                    <li><a href="tel:+254 791849836">+254 794183313</a></li>

                    <li class="footer-space"><a
                            href="elcdekutchapter@gmail.com">elcdekutchapter@gmail.com</a></li>

</ul>
            </div>
            <div className='our-work'>
                <h3>OUR WORK</h3>
                <ul>

                    <li><a href="">Education 
                            Development</a></li>

                    <li><a href="#">Leadership</a></li>

                    <li><a href="#">Mentorship</a></li>

                    <li><a href="#">Entrepreneurship  &
                            Financial Education</a></li>

                    <li><a href="#">Marketing skills</a></li>

                </ul>
            </div>
            <div className='links'>
                 <h3>QUICK LINKS</h3>
                 <ul>

                    <li><a href="#">About ELP DeKUT</a></li>

                    <li><a href="#">Impact Stories</a></li>

                    <li><a href="#">Reports</a></li>

                    <li><a href="#">Partners</a></li>

                    <li><a href="#">Get involved</a></li>

                </ul>
            </div>
            <div className='social-media'>
            <ul class="social-icons">
                    <li><a href="#" target="_blank"><FiFacebook /></a></li>
                    <li><a href="#" target="_blank"><FiTwitter /></a></li>
                    <li><a href="#" target="_blank"><FiLinkedin /></a></li>
                    <li><a href="#" target="_blank"><FiInstagram /></a></li>
                </ul>

                <ul class="policy-ul">
                    <li><a href="/privacy-policy/">Privacy Policy | </a></li>
                    <li><a href="/terms-and-conditions/"> T&Cs</a></li>
                </ul>
                <a class="copyright">© ELP DeKUT CHAPTER 2022</a>


            </div>
        </div>
    </footer>
  )
}

export default Footer