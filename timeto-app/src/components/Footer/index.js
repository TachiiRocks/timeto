import React from 'react'
import './index.sass'


function Footer() {
    return <footer className="footer">
            <div className="footer__title">
            <h2 className="footer__title-time">Time</h2>
            <h2 className="footer__title-to">T</h2> 
            <i className="footer__title-clock fas fa-clock"></i>
            </div>
        <div className="footer__logo">

        <a href="https://www.instagram.com/timeetoo/?hl=es" className="footer__logo-insta"  >
            <i className="fab fa-instagram fa-2x"></i>
        </a>

        <a href="https://twitter.com/TimeeToo" className="footer__logo-twitter"  >
            <i className="fab fa-twitter fa-2x"></i>
        </a>

        <a href="https://www.facebook.com/timeto.here.9" className="footer__logo-face"  >
            <i className="fab fa-facebook fa-2x"></i>
        </a>

        </div>
        <p className="footer__copy">&copy; 2019 TimeTo by Tachi </p>
    </footer>
}

export default Footer