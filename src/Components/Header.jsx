import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(cartItems.length);   //set the cart count
  }, [cartItems]);
  return (
    <header>
      <nav>
        <h2 className="title">ShoppyGlobe</h2>
        <div>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/cart">
            <h2>🛒<sup style={{fontSize:"15px"}}> {count} </sup></h2>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
