import './style.css'
import { urlFor } from '../../../data/client'

export const HeroBanner = ({ props }) => {
  const data = props[0]
  return (
    <div className="heroBanner-container">
      <div>
        <p className="product-solo">{data.smallText}</p>
        <h3>{data.midText}</h3>
        <h1>{data.largeText1}</h1>
        <img src={urlFor(data.image)} alt="" className="heroBanner-image" />
      </div>

      <div>
        <a href="/product">
          <button>{data.buttonText}</button>
        </a>
        <div className="description">
          <h5>{data.desc}</h5>
          <p>DESCRIÇÃO</p>
        </div>
      </div>
    </div>
  )
}
