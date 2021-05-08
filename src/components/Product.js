function Product(props) {

  const {
    product: {name, src, price}
  } = props

    return (
      <div>
        <img src={src} alt=""/>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <button>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;