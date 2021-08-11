import {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Header from '../page_components/home/header/Header'
import Why_us from '../page_components/home/why_us/Why_us'



export default function Home() {
  return (
    <Fragment>
      <Header/>
      <Why_us/>
    </Fragment>
  )
}
