const initialState = {
  cart: {
    items: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cart.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = state.cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            items: updatedItems,
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: [...state.cart.items, { ...action.payload, quantity: 1 }],
          },
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter((item) => item.id !== action.payload),
        },
      };

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        },
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [],
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
