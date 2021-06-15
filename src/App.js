import './App.css';
import React, {useState} from 'react'
import { HashRouter as BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Store from './components/Store'
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou';

function App() {
  
  const [cart, updateCart] = useState([])
  const [cartValue, updateCartValue] = useState(0)
  
  function handleAddToCart(product){
    updateCart((prevArray) => [...prevArray, product])
    updateCartValue((prevValue) => prevValue + product.price)
  }

  function handleRemoveFromCart(product){
    updateCart(cart.filter(item => item.key !== product.key))
    updateCartValue((prevValue) => prevValue - product.price)
  }

  return (
    <BrowserRouter>
      <Header cartValue={cartValue}/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Store" />
        </Route>
        <Route path="/Store">
          <Store handleAddToCart={handleAddToCart}/>
        </Route>
        <Route path="/Cart">
          <Cart cartValue={cartValue} cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
        </Route>
        <Route path="/ThankYou" component={ThankYou}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;