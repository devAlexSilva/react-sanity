import { useEffect, useState } from 'react'
import { client } from '../../../data/client'
import { HeroBanner } from '../../components/heroBanner/HeroBanner'
import './style.css'


export const Home = () => {
  const [products, setProducts] = useState([])
  const [banner, setBanner] = useState([])

  const product = [
    {
      name: 'produto1',
      price: `R$ ${25}`,
    },
    {
      name: 'produto2',
      price: `R$ ${81}`,
    },
  ]

  useEffect(() => {
    ;(async () => {
      /*      
      const productsQuery = '*[_type == "product"]'
      const products = await client.fetch(productsQuery)
      setProducts(products)
      */
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
      <section className='product-container'>
        {product.map(item => {
          return (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </article>
          )
        })}
      </section>
    </main>
  )
}
