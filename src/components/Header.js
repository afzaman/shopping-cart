import {Link} from "react-router-dom";

function Header(props) {

  const {
    cartValue
  } = props

  return (
    <ul className="navbar">
        <li className="navbar-list"><Link to="/Store">Odin Project Shopping Cart Project</Link></li>
        <li className="navbar-list cart-display"><Link to="/Cart">Cart $ {cartValue.toFixed(2)}</Link></li>
    </ul>
  );
}

export default Header;