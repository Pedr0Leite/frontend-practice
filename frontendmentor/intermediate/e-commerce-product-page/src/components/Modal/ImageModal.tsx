import * as React from "react";
import { useContext, useEffect, useReducer, useState } from "react";
import {
  ReducerImgModalArrows,
  REDUCER_ACTION,
} from "../../hooks/reducer/ReducerImgModalArrows";
import { ReactComponent as CloseCross } from "../../assets/icons/icon-close.svg";
import { ReactComponent as PrevArrow } from "../../assets/icons/icon-previous.svg";
import { ReactComponent as NextArrow } from "../../assets/icons/icon-next.svg";

import { ProductImgContext } from "../../context/ProductImgContext";

interface ImageModalInterface {
  showModal: () => void;
}

export default function ImageModal({ showModal }: ImageModalInterface) {
  const { productImg, setProductImg } = useContext<any>(ProductImgContext);

  const [arrowIndex, dispatch] = useReducer(ReducerImgModalArrows, 0);
  const currentImg = productImg[arrowIndex];

  const onClickClose = (e: Event) => {
    e.preventDefault();
    showModal();
  };

  const onClickSmallImg = (e: Event, index: number) => {
    e.preventDefault();
    dispatch({ type: REDUCER_ACTION.SPECIFIC, payload: index });
  };

  return (
    <div className="ImageModal">
      <div className="ImageModalCross">
        <CloseCross onClick={(e: any) => onClickClose(e)} />
      </div>
      <div className="ImageModalGrey" />
      <div className="ImageModalMainDiv">
        <div
          className="ImageModalArrow right"
          onClick={(e: any) => dispatch({ type: REDUCER_ACTION.DECREASE })}
        >
          <PrevArrow />
        </div>
        <div className="mainImgModal">
          <img src={productImg[currentImg.index].img} />
        </div>
        <div
          className="ImageModalArrow left"
          onClick={(e: any) => dispatch({ type: REDUCER_ACTION.INCREASE })}
        >
          <NextArrow />
        </div>
      </div>
      <div className="smallImgDivModal">
        {productImg.map((imgElem: any) => {
          return (
            <div
              className="smallImgModal"
              key={imgElem.index.toString()}
              onClick={(e: any) => onClickSmallImg(e, imgElem.index)}
            >
              <img src={productImg[imgElem.index].thumbnail} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
