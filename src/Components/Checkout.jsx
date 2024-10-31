import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [billingAddress, setBillingAddress] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setBillingAddress((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "CLEAR_CART" });
    navigate("/success");
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Billing Address</h3>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={billingAddress.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={billingAddress.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Postal Code: </label>
          <input
            type="number"
            name="postalCode"
            value={billingAddress.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Country: </label>
          <input
            type="text"
            name="country"
            value={billingAddress.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <h3>Payment Method: </h3>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Credit Card"
              checked={paymentMethod === 'Credit Card'}
              onChange={(e) =>setPaymentMethod(e.target.value)}
              required
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(e) =>setPaymentMethod(e.target.value)}
              required
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="CashOnDelivery"
              checked={paymentMethod === 'CashOnDelivery'}
              onChange={(e) =>setPaymentMethod(e.target.value)}
              required
            />
            Cash On Delivery
          </label>
        </div>

        <h2>Total Amount: ₹ {totalAmount.toFixed(2)}</h2>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
export default Checkout;