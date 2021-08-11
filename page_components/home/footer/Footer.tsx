import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <section id='contact' className={styles.footer}>
            <ul className={styles.footer__box}>
                <li className={`${styles.footer__link} cap-txt`}>silpkala copyrights {'\u00a9'} {new Date().getFullYear()}</li>
            </ul>
            <ul className={styles.footer__box}>
                <li className={styles.footer__link}>Email : team_admin@kolart.co</li>
                <li className={`${styles.footer__link} cap-txt`}>Phone : +91 1111111111</li>
            </ul>
        </section>
    )
}

export default Footer
