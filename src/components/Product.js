function Product(props) {

  const {
    product: {name, src, price},
    handleAddToCart
  } = props

    return (
      <div className="product">
        <img className="img" src={src} alt=""/>
        <div className="product info">
          <div>{name}</div>
          <div>${price}</div>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart.bind(this, {"name": name, "src": src, "price": price, "key": Date.now()})}>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;