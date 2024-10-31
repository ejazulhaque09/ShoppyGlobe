import { useDispatch } from "react-redux";
import {removeFromCart, updateCartByQuantity} from '../redux/actions'

function CartItem ({item}){
    const dispatch = useDispatch();
    //function to handle removing the item from the cart
    function handleRemove() {
        dispatch(removeFromCart(item.id));
    }

    //function to handle increasing the quantity of cart
    function handleIncrease(){
        dispatch(updateCartByQuantity(item.id, item.quantity + 1))
    }

        //function to handle increasing the quantity of cart

    function handleDecrease(){
        if(item.quantity > 1){
            dispatch(updateCartByQuantity(item.id, item.quantity - 1))
        }
        else{
            handleRemove();  // if quantity is 1 removes the item on decreasing
        }
    }
    return(
        <div className="cart-item">
            <img src={item?.thumbnail} alt={item?.title} className="small-image"/>
            <div className="details">
                <h3>{item?.title}</h3>
                <p className="price">₹{item?.price}</p>
                <div className="quantity-controls">
                    <button onClick={handleDecrease}>-</button>
                    <span>{item?.quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
            <button className="remove" onClick={handleRemove}>Remove</button>
        </div>
    )
}
export default CartItem;