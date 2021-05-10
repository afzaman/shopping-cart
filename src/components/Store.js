import React from 'react';
import Product from './Product'
import Images from './Images'

function Store(props) {

  const {
    handleAddToCart
  } = props
  

  return (
    <div className="store-container">
      <div className="store">
        {Images.map((product)=> 
          <Product 
            key={product.name}
            product={product}
            price={product}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
}

export default Store;