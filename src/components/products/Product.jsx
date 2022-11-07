import './style.css'
import { urlFor } from "../../../data/client"

export const Product = ({ props }) => {
  console.log(props)
  return (
    <>
      {props[0] && (
        <section className="product-container">
          {props.map(product => {
            return (
              <article key={product._id} className='product-card'>
                <div className='product-wrapper'>
                <img src={urlFor(product.image[0])} alt={product.slug} className='product-image'/>
                <p className='product-name'>{product.name}</p>
                <p className='product-price'>{product.price}</p>
                </div>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}
