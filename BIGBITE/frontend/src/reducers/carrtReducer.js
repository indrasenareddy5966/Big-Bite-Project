import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
} from "../constants/cartConstant";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.fooditem === item.fooditem
      );
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.fooditem === isItemExist.fooditem ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.fooditem === action.payload.fooditemId
            ? {
                ...item,
                quantity: action.payload.quantity,
              }
            : item
        ),
      };
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.fooditem !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
