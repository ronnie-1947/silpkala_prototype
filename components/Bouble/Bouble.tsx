import React from 'react'
import styles from './Bouble.module.scss'
import Image from 'next/image'

interface Props {
    images: {
        _id: string
        imgSrc: string
    }[]
}

const Bouble = ({images}:Props) => {
    return (
        <div className={styles.bouble__box}>
            {
                images.map(
                    c => (
                        <div key={c._id} className={styles.bouble__container}>
                            <div className={styles.bouble}>
                                <Image src={c.imgSrc} alt="product img" height={120} width={120} />
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Bouble
