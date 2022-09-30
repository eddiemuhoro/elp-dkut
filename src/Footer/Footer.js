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
                    <li>Equity Group Foundation <img src={Kenya}/></li> 

                    <li><a href="tel:+254 (020) 2744000">+254 (020) 2744000</a></li>

                    <li class="footer-space"><a
                            href="support@equitygroupfoundation.org">support@equitygroupfoundation.org</a></li>

                    <li>Equity Group Foundation International <img src={Usa}/></li>

                    <li><a href="tel:+1 345 678 903">+1 345 678 903 (USA)</a></li>

                </ul>
            </div>
            <div className='our-work'>
                <h3>OUR WORK</h3>
                <ul>

                    <li><a href="">Education & Leadership
                            Development</a></li>

                    <li><a href="#">Agriculture</a></li>

                    <li><a href="#">Health</a></li>

                    <li><a href="#">Entrepreneurship &
                            Financial Education</a></li>

                    <li><a href="#">Energy & Environment</a></li>

                </ul>
            </div>
            <div className='links'>
                 <h3>QUICK LINKS</h3>
                 <ul>

                    <li><a href="#">About EGF</a></li>

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
                <a class="copyright">© Equity Group Foundation 2022</a>


            </div>
        </div>
    </footer>
  )
}

export default Footer