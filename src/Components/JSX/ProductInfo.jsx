import React from 'react'

const ProductInfo = () => {
    const Product = {
        name: 'Laptop',
        price: '$1209',
        availability: "In stock"
    }
  return (
    <div>
        <h2>ProductInfo</h2>
        <p>name: {Product.name}</p>
        <p>price: {Product.price}</p>
        <p>availability: {Product.availability}</p>
    </div>
  )
}

export default ProductInfo