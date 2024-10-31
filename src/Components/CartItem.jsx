import { useDispatch } from "react-redux";
import {removeFromCart, updateCartByQuantity} from '../redux/actions'

function CartItem ({item}){
    const dispatch = useDispatch();
    function handleRemove() {
        dispatch(removeFromCart(item.id));
    }

    function handleIncrease(){
        dispatch(updateCartByQuantity(item.id, item.quantity + 1))
    }
    function handleDecrease(){
        if(item.quantity > 1){
            dispatch(updateCartByQuantity(item.id, item.quantity - 1))
        }
        else{
            handleRemove();
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