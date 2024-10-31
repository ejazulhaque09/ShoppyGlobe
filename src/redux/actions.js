export const addToCart =(products)=>({
    type: 'ADD_TO_CART',
    payload: products,
})

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
})
export const updateCartByQuantity = (id, quantity) =>{
    return{
        type: 'UPDATE_CART_QUANTITY',
        payload: {id, quantity}
    }
}