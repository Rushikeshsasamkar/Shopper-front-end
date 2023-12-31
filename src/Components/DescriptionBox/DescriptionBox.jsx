import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
              <p>An e-commerce website is an online platform that facilitates the buying and selling of goods or services. It allows businesses to showcase products, handle transactions, and manage inventory electronically. Users can browse, select, and purchase items securely, making it a convenient and efficient way to conduct commercial transactions over the internet.</p>
              <p>By seamlessly connecting buyers and sellers, e-commerce platforms redefine retail dynamics, offering convenience, accessibility, and efficiency. This digital evolution transcends geographical boundaries, transforming traditional commerce into a dynamic, 24/7 accessible, and interconnected ecosystem for businesses and consumers alike.</p>
        </div>
    </div>
  )
}

export default DescriptionBox