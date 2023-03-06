import * as React from 'react';
import { useContext, useState } from 'react';
import useShowModal from '../../hooks/useShowModal';
import ImageModal from './../Modal/ImageModal';

import { ProductImgContext } from '../../context/ProductImgContext';

export default function Card() {
  const { modalShow, toggleModal } = useShowModal();
  const { productImg } = useContext<any>(ProductImgContext);

  return (
    <div className="cardGrid">
      {Object.keys(productImg).length !== 0 ? <>
      <div className="mainCardImg"><img src={productImg[0].img} alt="mainImg" /></div>
      <div className="smallMainCardDiv">
        <div onClick={toggleModal} className="smallCardImg">
          <img src={productImg[0].img} alt="thumbnail1" />
        </div>
        <div onClick={toggleModal} className="smallCardImg">
          <img src={productImg[1].thumbnail} alt="thumbnail2" />
        </div>
        <div onClick={toggleModal} className="smallCardImg">
          <img src={productImg[2].thumbnail} alt="thumbnail3" />
        </div>
        <div onClick={toggleModal} className="smallCardImg">
          <img src={productImg[3].thumbnail} alt="thumbnail4" />
        </div>
      </div>
      </> : <></>}
      {modalShow ? <ImageModal showModal={toggleModal} /> : null}
    </div>
  );
}
