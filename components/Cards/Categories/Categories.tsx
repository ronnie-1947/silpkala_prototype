import React from 'react'
import styles from './Categories.module.scss'
import Image from 'next/image'

interface Props {
   backgroundImageSrc:string
   title: string
}

const ProductCategories = ({backgroundImageSrc, title}:Props) => {
    return (
        <div className={styles.prodCategory}>
            <Image src={backgroundImageSrc} className={styles.prodCategory__img} alt="background img" layout="fill" />
            <span className={styles.prodCategory__title}>{title}</span>
        </div>
    )
}

export default ProductCategories
