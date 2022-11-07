import './style.css'
import { useEffect, useState } from 'react'
import { client } from '../../../data/client'
import { HeroBanner } from '../../components/heroBanner/HeroBanner'
import { Product } from '../../components/products/Product'

export const Home = () => {
  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState([])

  useEffect(() => {
    (async () => {      
      const productsQuery = '*[_type == "product"]'
      const products = await client.fetch(productsQuery)
      setProducts(products)
      
      const bannerQuery = '*[_type == "banner"]'
      const banner = await client.fetch(bannerQuery)
      setBanner(banner)
    })()
  }, [])

  return (
    <main className='container'>
      <HeroBanner props={banner}/>
      <div className='product-top'>
        <h1>os melhores produtos da internet</h1>
        <p>confira nossas variedades de produtos</p>
      </div>
      <Product props={products}/>
    </main>
  )
}
