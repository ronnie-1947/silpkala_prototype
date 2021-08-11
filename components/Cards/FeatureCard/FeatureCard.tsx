import React from 'react'
import styles from './FeatureCard.module.scss'

interface Props{
    title: string
    para: string
}

const FeatureCard = ({title, para}:Props) => {
    return (
        <div className={styles.feature}>
            <div className="feature__title u-mar-b-2">
                <h3 className="heading-tertiary u-center-text">{title}</h3>
            </div>
            <div className={styles.feature__content}>
                <p className="paragraph-secondary">{para}</p>
            </div>
        </div>
    )
}

export default FeatureCard
