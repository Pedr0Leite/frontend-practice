import { ReactNode, createContext, useEffect, useState } from "react";
import mainImg1 from "../assets/images/image-product-1.jpg";
import mainImg2 from "../assets/images/image-product-2.jpg";
import mainImg3 from "../assets/images/image-product-3.jpg";
import mainImg4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

var productImgArr = [
     {
      index: 0,
      img: mainImg1,
      thumbnail: thumbnail1
    },
    {
        index: 1,
        img: mainImg2,
        thumbnail: thumbnail2
    },
    {
        index: 2,
        img: mainImg3,
        thumbnail: thumbnail3
    },
    {
        index: 3,
        img: mainImg4,
        thumbnail: thumbnail4
    },
  ];

export interface ProductImgProps {
    index?: number,
    img?: string,
    thumbnail?: string
}

export interface ProductImgProviderProps {
  children: ReactNode;
}

interface productImgInterface {
  productImg: ProductImgProps;
  setProductImg: (productImg: ProductImgProps) => void;
}

export const ProductImgContext = createContext<productImgInterface>({
  productImg: {},
  setProductImg: function (productImg: ProductImgProps) {
    return productImg;
  },
});

export function ProductImgProvider({ children }: ProductImgProviderProps) {
  const [productImg, setProductImg] = useState({});

  useEffect(() => {
    setProductImg(productImgArr);
  }, []);

  return (
    <ProductImgContext.Provider value={{ productImg, setProductImg }}>
      {children}
    </ProductImgContext.Provider>
  );
}
