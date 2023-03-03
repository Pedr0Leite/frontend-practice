import * as React from 'react';
import { faLemon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSetCounter from '../hooks/useSetCounter';
import { AddToCartContext } from '../context/AddToCartContext';
import { useContext } from 'react';

export default function InfoDiv() {
  const { counterValue, increment, decrement } = useSetCounter();
  const { AddToCart, setAddToCart } = useContext(AddToCartContext);

  return (
    <div className="infoDivMainGrid">
      <div className="infoDivMainGridTitle">Sneaker Company</div>
      <div className="infoDivMainSubTitle">Fall Limited Edition Sneakers</div>
      <div className="infoDivMainGridText">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </div>
      <div className="real-price">
        $125.00 <span>50%</span>
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
        <button className="btn-add-cart">
          <FontAwesomeIcon icon={faLemon} />
          Add to cart
        </button>
      </div>
    </div>
  );
}
