import React from 'react'
import styles from './Why_us.module.scss'

import FeatureCard from '../../../components/Cards/FeatureCard/FeatureCard'

const featureArr = [
    {
        title: 'silk route',
        para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus cumque inventore non enim'
    },
    {
        title: 'silk route',
        para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus cumque inventore non enim'
    },
    {
        title: 'silk route',
        para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus cumque inventore non enim'
    },
    {
        title: 'silk route',
        para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus cumque inventore non enim'
    }
]

const Why_us = () => {
    return (
        <section className={styles.whyus} style={
            {
                background: "linear-gradient(rgb(27 20 100 / 60%), rgb(27 20 100 / 99%)), url(/images/header-img-1.jpg)",
                backgroundSize: "cover"
            }
        }>
            <div>
                <h2 className=" u-center-text u-mar-b-4 heading-secondary color--white">why us?</h2>
            </div>

            <div className={styles.feature_container}>
                {
                    featureArr.map((c, i) => (
                        <FeatureCard key={i} {...c} />
                    ))
                }
            </div>

        </section>
    )
}

export default Why_us
