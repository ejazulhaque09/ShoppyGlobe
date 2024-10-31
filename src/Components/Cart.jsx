import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-container" >
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <>
          <p>Your Cart is empty</p>
          <p>Please add Items to cart</p>
          <Link to="/checkout">
            <button className="button" disabled>Proceed to CHeckout</button>
          </Link>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))}
          <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
