function CartItem(props) {

    const {
      product: {name, src, price, key},
      handleRemoveFromCart
    } = props
  
      return (
        <div>
          <div className="cart-item">
            <img className="cart-image" src={src} alt=""/>
            <div>
              <h2>{name}</h2><br/>
              <button
                className="remove-item-button"
                onClick={handleRemoveFromCart.bind(
                  this, {"name": name, "src": src, "price": price, "key": key}
                )}>Remove Item
              </button>
            </div>
            <a className="cart-item-price">${price}</a>
          </div>
          <hr></hr>
        </div>
      );
    }
    
    export default CartItem;