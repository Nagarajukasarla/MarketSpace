export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (product) => product.id !== action.payload.id
                ),
            };
        case "SET_PRODCUTS":
            return { ...state, products: action.payload };
            
        default:
            return state;
    }
};

export default cartReducer;
