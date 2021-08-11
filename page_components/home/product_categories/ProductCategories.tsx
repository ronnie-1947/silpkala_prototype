import React from 'react'
import Link from 'next/link'
import styles from './ProductCategories.module.scss'

import Categories from '../../../components/Cards/Categories/Categories'

const categories = [
    {
        backgroundImageSrc: '/images/bouble-1.jpg',
        title: 'Silk'
    },
    {
        backgroundImageSrc: '/images/bouble-1.jpg',
        title: 'Silk'
    },
    {
        backgroundImageSrc: '/images/bouble-1.jpg',
        title: 'Silk'
    },
    {
        backgroundImageSrc: '/images/bouble-1.jpg',
        title: 'Silk'
    },
    {
        backgroundImageSrc: '/images/bouble-1.jpg',
        title: 'Silk'
    }
]

const ProductCategories = () => {



    return (
        <section id='products' className={styles.categories}>

            <div className={styles.categories__head_box}>
                <h2 className={styles.categories__header}>explore our collections</h2>
            </div>
            <div className={styles.categories__container}>
                {
                    categories.map((c, i) => (
                        <Link href='/'>
                            <a>
                                <Categories
                                    key={i}
                                    {...c}
                                />
                            </a>
                        </Link>
                    ))
                }

            </div>
        </section>
    )
}

export default ProductCategories
