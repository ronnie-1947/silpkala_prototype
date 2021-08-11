import {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Header from '../page_components/home/header/Header'



export default function Home() {
  return (
    <Fragment>
      <Header/>
    </Fragment>
  )
}
