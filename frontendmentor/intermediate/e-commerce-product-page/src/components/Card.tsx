import * as React from 'react';
import { useState } from 'react';
import useShowModal from '../hooks/useShowModal';
import ImageModal from './ImageModal';

export default function Card() {
  const { modalShow, toggleModal } = useShowModal();

  return (
    <div className="cardGrid">
      <div className="mainCardImg">main</div>
      <div className="smallMainCardDiv">
        <div onClick={toggleModal} className="smallCardImg">
          1
        </div>
        <div onClick={toggleModal} className="smallCardImg">
          2
        </div>
        <div onClick={toggleModal} className="smallCardImg">
          3
        </div>
        <div onClick={toggleModal} className="smallCardImg">
          4
        </div>
      </div>
      {modalShow ? <ImageModal showModal={toggleModal} /> : null}
    </div>
  );
}
