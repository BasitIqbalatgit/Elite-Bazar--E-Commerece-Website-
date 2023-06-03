export const actionType ={
    // SET_USER : 'SET_USER'
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_ADD_PRODUCT:"SET_ADD_PRODUCT"
}

const reducer = (state,action)=>{
    console.log(action);

    switch(action.type){
        case actionType.SET_CART_SHOW:
        return{
                ...state, 
                cartShow: action.cartShow,
        }
        case actionType.SET_CART_ITEMS:
        return{
                ...state, 
                cartItems: action.cartItems,
        }
        case actionType.SET_ADD_PRODUCT:
            return  [...state, action.payload ];


            default:
                return state;
    }
}
export default reducer;