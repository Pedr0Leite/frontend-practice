import { useContext } from "react";
import {
  AddToCartContext,
  CartProductProps,
} from "../../context/AddToCartContext";

const { AddToCart, setAddToCart } = useContext(AddToCartContext);

export enum REDUCER_CART_ACTION {
  INCREASE = "increase",
  DECREASE = "decrease",
  ADD = "add",
  REMOVE = "remove",
  CURRENT = "current"
}

type CartStateActionType = {
  type: REDUCER_CART_ACTION;
  payload?: CartProductProps | {};
  value?: number;
};

export function ReducerCart(
  cartState: CartProductProps,
  cartAction: CartStateActionType
) {
  switch (cartAction.type) {
    case REDUCER_CART_ACTION.ADD:
      setAddToCart(cartAction.payload as CartProductProps);
      break;
    case REDUCER_CART_ACTION.REMOVE:
      setAddToCart({});
      break;
    // case REDUCER_CART_ACTION.INCREASE:
    //     return;
    // case REDUCER_CART_ACTION.DECREASE:
    //     return;
    // case REDUCER_CART_ACTION.CURRENT:
    //     return AddToCart;
  }
  return AddToCart;
}