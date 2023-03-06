import React, { useContext, useReducer, useState } from "react";
// import { faLemon } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSetCounter from "../../hooks/useSetCounter";
import { AddToCartContext } from "../../context/AddToCartContext";
import mainThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { ReactComponent as CartCar } from "../../assets/icons/icon-cart.svg";


import {
  REDUCER_CART_ACTION,
  ReducerCart,
} from "../../hooks/reducer/ReducerCart";

export default function InfoDiv() {
  const productValue = "125.00";
  const productName = "Fall Limited Edition Sneakers";
  const { counterValue, increment, decrement } = useSetCounter();
  const { AddToCart, setAddToCart } = useContext(AddToCartContext);
  const [cartClicked, setCartClicked] = useState(false);
  const animation = useAnimationControls()

  // const [cartState, dispatch] = useReducer(ReducerCart, {});

  async function sequence() {
    await animation.start({ x: [0, 25, 50, 75, 100, 125, 100, 75, 50, 25, 0], transition: { duration: 1} })
    await animation.start({ rotate: [0, -30, 0], transition: { duration: 0.5 }})
    await animation.start({ scaleY: -1 })
    await animation.start({ scaleY: 1 })
}


  const handleAddCart = (e: Event) => {
    e.preventDefault();
    // setCartClicked(true);
    if (counterValue !== 0 && Object.keys(AddToCart).length == 0) {
      let sendToPayload = {
        name: productName,
        value: Number(productValue),
        qnty: counterValue,
        thumbnail: mainThumbnail,
      };
      setAddToCart(sendToPayload);
      // dispatch({ type: REDUCER_CART_ACTION.ADD, payload: sendToPayload });
    } else if (counterValue !== 0 && Object.keys(AddToCart).length != 0) {
      if (AddToCart.qnty != undefined) {
        setAddToCart({ ...AddToCart, qnty: AddToCart.qnty + counterValue });
      }
    }

    // setTimeout(() =>{
    //   setCartClicked(false);
    // }, 2000);
  };

  const variants = {
    rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
    stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } },
    ride: {x: [0, 25, 50, 75, 100, 125, 100, 75, 50, 25, 0], transition: { duration: 1}}
  };

  return (
    <div className="infoDivMainGrid">
      <div className="infoDivMainGridTitle">Sneaker Company</div>
      <div className="infoDivMainSubTitle">{productName}</div>
      <div className="infoDivMainGridText">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </div>
      <div className="real-price">
        ${productValue} <span>50%</span>
      </div>
      <div className="previous-price">
        <span>$250.00</span>
      </div>
      <div className="qtyBtnDiv">
        <div className="qty-btn">
          <button className="qty-btn-increment" onClick={decrement}>
            -
          </button>
          <span className="qty-btn-increment-value">{counterValue}</span>
          <button className="qty-btn-increment" onClick={increment}>
            +
          </button>
        </div>
        <AnimatePresence initial={false}>
          <button
            className="btn-add-cart"
            onClick={(e: any) => handleAddCart(e)}
            >
            <motion.div
              variants={variants}
              animate={animation}
              onTap={() => sequence()}
              // animate={cartClicked && variants.ride}
              // whileTap={variants.ride}
            >
              <CartCar/>
            </motion.div>
            Add to cart
          </button>
        </AnimatePresence>
      </div>
    </div>
  );
}