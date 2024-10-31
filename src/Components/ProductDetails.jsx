import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

function ProductDeatails() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
    alert("Added to cart");
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)  // fetch the data
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching products"));
  }, [id]);

  
  if (!product) return <p>Loading...</p>;
    const mrp = product.price / (1-(product.discountPercentage)/100) // calculates actual price

  return (
    <div className="product-details">
      <div className="image">
        {product.images.map((image) => (
          <img className="large-image" src={image} alt={product.title} />
        ))}
      </div>
      <div className="details">
        <h3>{product.title}</h3>
        <h3 className="mrp">M.R.P: ₹{mrp.toFixed(2)}</h3>
        <h3 className="discount">-{product.discountPercentage}% OFF</h3>
        <p className="price">₹{product.price}</p>
        <h3>Rating:{product.rating}</h3>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
        <h3>Product Details:</h3>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Weight: {product.weight}</p>
        <p>Warranty: {product.warrantyInformation}</p>
        <p>Shipping: {product.shippingInformation}</p>
        <h3>Stock left: {product.stock}</h3>
        <p className="return-policy"> Return: {product.returnPolicy}</p>

        <div className="review-section">
          <h2>Reviews: </h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="reviewer-name">{review.reviewerName}</p>
              <p className="reviewer-email">{review.reviewerEmail}</p>
              <h3 className="review-rating">Rating: {review.rating}</h3>
              <p className="review-comment">Comment: {review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductDeatails;
