import './footerBanner.css'
import { urlFor } from '../../../data/client'

export const FooterBanner = ({ props }) => {
  const data = props[0]
  return (
    <>
      {data && (
        <div className="footerBanner-container">
          <div>
            <div className="product-textWrapper">
              <p className="product-solo">{data.smallText}</p>
              <h3>{data.midText}</h3>
              <h1>{data.largeText1}</h1>
            </div>
            <img
              src={urlFor(data.image)}
              alt=""
              className="footerBanner-image"
            />
          </div>
          <div className='footerBanner-btn'>
            <a href="/product">
              <button>{data.buttonText}</button>
            </a>
          </div>
          <div>
            <div className="description">
              <h5>{data.desc}</h5>
              <p>DESCRIÇÃO</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
