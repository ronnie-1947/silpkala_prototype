import React from 'react'
import styles from './Header.module.scss'

import Image from 'next/image'
import Nav from '../../../components/Nav/nav_home/Nav'
import Bouble from '../../../components/Bouble/Bouble'

const boubles = [
    {
        imgSrc: '/images/bouble-1.jpg',
        _id: 'dJf8yjWkshPCkRt89WNoM'
    },
    {
        imgSrc: '/images/bouble-2.jpg',
        _id: 'gnFcmwk8WFZb3BxUegaRu'
    },
    {
        imgSrc: '/images/bouble-3.jpg',
        _id: 'FTbG538nrKRfCgYNa4Ko8'
    }
]

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__lft}>
                <Nav />
                <div className={styles.header__main_content}>
                    <Bouble images={boubles} />
                    <div className={styles.header__content_right}>
                        <div className={styles.header__content}>
                            <h1 className={styles.heading_primary}>Bulk Store</h1>
                            <p className={styles.paragraph_primary}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus cumque inventore non enim, optio modi esse vitae rerum a temporibus consequuntur neque! Aut commodi, ab esse corrupti officia quas?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__rght}>
                <Image className="u-fluid-img" src="/images/header-img-2.jpg" alt="header-img" layout="fill" />
            </div>
        </header>
    )
}

export default Header
