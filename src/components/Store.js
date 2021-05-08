import React from 'react';
import Product from './Product'
import Images from './Images'

function Store() {

  return (
    <div>
        {Images.map((product)=> 
          <Product 
            key={product.name}
            product={product}
            price={product}
          />
        )}
    </div>
  );
}

export default Store;