import * as React from "react";
import { useContext, useEffect, useReducer, useState } from "react";
import { AddToCartContext } from "../../context/AddToCartContext";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import { REDUCER_CART_ACTION, ReducerCart } from "../../hooks/reducer/ReducerCart";
import { ReactComponent as DeleteIcon } from "../../assets/icons/icon-delete.svg";


export default function CartModal() {
  const { AddToCart, setAddToCart } = useContext(AddToCartContext);
  const [totalValue, setTotalValue] = useState<Number>(0);
  // const [cartState, dispatch] = useReducer(ReducerCart, {});
  // const [dispatch] = useReducer(ReducerCart, {});

  useEffect(() => {
    if (Object.values(AddToCart).length !== 0) {
      let total = Number(AddToCart.qnty) * Number(AddToCart.value);
      setTotalValue(total);
    }
  }, [AddToCart]);

  const handleDeleteButton = (e: Event) => {
    e.preventDefault();
    setAddToCart({});
    // dispatch({ type: REDUCER_CART_ACTION.REMOVE });

  };

  return (
    <div className="cartModal">
      <div className="CartTitle">
        <h1>Cart</h1>
      </div>
      {Object.values(AddToCart).length == 0 ? (
        <>
          <div className="CartBody">Your cart is empty.</div>
        </>
      ) : (
        <>
          <div className="CartBodyFull">
            <div className="CartBodyDivOne">
              <img
                className="CartBodyDivOneImg"
                // src="https://via.placeholder.com/50"
                src={AddToCart.thumbnail}
              />
              <div className="CartBodyDivOneSub">
                <h5>{AddToCart.name}</h5>
                <div className="CartBodyDivValues">${Number(AddToCart.value).toFixed(2)} x {AddToCart.qnty} <span>${totalValue.toFixed(2)}</span></div>
              </div>
              <div className="CartBodyDivOneIcon" onClick={(e:any) => handleDeleteButton(e)}>
                {/* <img src={deleteIcon} /> */}
                <DeleteIcon />
              </div>
            </div>
            <div className="CartBodyDivTwo">
              <button>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
