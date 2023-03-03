import * as React from 'react';
import { useContext, useReducer, useState } from 'react';
import {
  ReducerImgModalArrows,
  REDUCER_ACTION,
} from '../hooks/reducer/ReducerImgModalArrows';

interface ImageModalInterface {
  showModal: () => void;
}

var imageArr = [
  {
    index: 0,
    img: '0',
  },
  {
    index: 1,
    img: '1',
  },
  {
    index: 2,
    img: '2',
  },
  {
    index: 3,
    img: '3',
  },
];

export default function ImageModal({ showModal }: ImageModalInterface) {
  const [arrowIndex, dispatch] = useReducer(ReducerImgModalArrows, 0);
  console.log('arrowIndex :', arrowIndex);
  const currentImg = imageArr[arrowIndex];

  const onClickClose = (e: Event) => {
    e.preventDefault();
    showModal();
  };

  const onClickSmallImg = (e: Event, index: string) => {
    e.preventDefault();
    // dispatch({ type: REDUCER_ACTION.SPECIFIC, payload: Number(index) });
  };

  return (
    <div className="ImageModal">
      <div className="ImageModalCross">
        <div onClick={(e: any) => onClickClose(e)}>X</div>
      </div>
      <div className="ImageModalGrey" />
      <div className="ImageModalMainDiv">
        <div className="ImageModalArrow right">
          <div
            // onClick={(e: any) => dispatch({ type: REDUCER_ACTION.DECREASE })}
          >
            &#x3c;
          </div>
        </div>
        <div className="mainImgModal">{currentImg.index}</div>
        <div className="ImageModalArrow left">
          <div
            // onClick={(e: any) => dispatch({ type: REDUCER_ACTION.INCREASE })}
          >
            &#x3e;
          </div>
        </div>
      </div>
      <div className="smallImgDivModal">
        {imageArr.map((imgElem) => {
          return (
            <div
              className="smallImgModal"
              onClick={(e: any) => onClickSmallImg(e, imgElem.index.toString())}
            >
              {imgElem.index}
            </div>
          );
        })}
      </div>
    </div>
  );
}
