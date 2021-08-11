import {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Header from '../page_components/home/header/Header'
import Why_us from '../page_components/home/why_us/Why_us'
import ProductCategories from '../page_components/home/product_categories/ProductCategories'
import Footer from '../page_components/home/footer/Footer'



export default function Home() {
  return (
    <Fragment>
      <Header/>
      <Why_us/>
      <ProductCategories/>
      <Footer/>
    </Fragment>
  )
}
