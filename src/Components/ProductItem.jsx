import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
    alert("Added to cart");
  }

  const mrp = product.price / (1-(product.discountPercentage)/100) // calculates actual price

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />
        </Link>
        <h3>{product.title}</h3>
        <h3 className="mrp" >M.R.P: ₹{mrp.toFixed(2)}</h3>
        <h3 className="discount" >-{product.discountPercentage}% OFF</h3>
        <p>₹{product.price}</p>
      
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
export default ProductItem;
