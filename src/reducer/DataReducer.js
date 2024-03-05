export const dataReducer = (state, action) => {
switch (action.type) {
 case "ADD_TO_CART":
    return {...state, cartItems:[...state.cartItems, action.payload]}
 case "REMOVE_FROM_CART":
  return {...state, cartItems: state.cartItems.filter((item) => item.id !== action.payload)}
 case "ADD_TO_WISHLIST":
  return {...state, WishListItems: [...state.WishListItems, action.payload]}
 case "REMOVE_FROM_WISHLIST":
  return {...state, WishListItems: state.WishListItems.filter((item) => item.id !== action.payload)}
    default:
      return null;
}

}