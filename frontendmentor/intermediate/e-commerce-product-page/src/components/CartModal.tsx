import * as React from 'react';
import { useContext } from 'react';
import { AddToCartContext } from '../context/AddToCartContext';

export default function CartModal() {
  const { AddToCart, setAddToCart } = useContext(AddToCartContext);

  return (
    <div className="cartModal">
      <div className="CartTitle">
        <h1>Cart</h1>
      </div>
      {/* <div className="CartBody">Your cart is empty.</div> */}
      <div className="CartBodyFull">
        <div className="CartBodyDivOne">
          <img
            className="CartBodyDivOneImg"
            src="https://via.placeholder.com/50"
          />
          <div className="CartBodyDivOneSub">
            <h5>TITLE HERE</h5>
            <div className="CartBodyDivValues">Value amount total</div>
          </div>
          <div className="CartBodyDivOneIcon">delete</div>
        </div>
        <div className="CartBodyDivTwo">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
