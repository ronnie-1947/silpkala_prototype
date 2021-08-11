import React from 'react'
import { Link } from 'react-scroll'
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav__logo}>
                {/* <img src="/images/logo_1_transparent.png" alt="logo img"/> */}
                {/* <img src="/images/temp_logo.jpg" alt="logo img" /> */}
            </div>
            <ul className={styles.nav__links}>
                <Link className={styles.nav__link} activeClass="active" spy={true} to="whyus" offset={50} smooth={true} duration={500}>Why us</Link>
                <Link className={styles.nav__link} activeClass="active" to="products" smooth={true} duration={1000}>products</Link>
                <Link className={styles.nav__link} activeClass="active" to="contact" smooth={true} duration={1000}>contact</Link>
            </ul>
        </div>
    )
}

export default Nav
