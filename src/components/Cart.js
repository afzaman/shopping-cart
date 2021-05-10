import React from 'react';
import CartItem from './CartItem';
import {Link} from "react-router-dom";

function Store(props) {

  const {
    cart,
    cartValue,
    handleRemoveFromCart
  } = props

  var cartValueDisplay = cartValue.toFixed(2)

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart">
        {cart.map((product)=> 
          <CartItem 
            key={product.key}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        )}
      </div>
      <div className="cart-total">
        <h2>Total: ${cartValueDisplay}</h2>
        <Link to="/ThankYou"><button className="submit-order-button">Submit Order</button></Link>
      </div>
    </div>
  );
}

export default Store;