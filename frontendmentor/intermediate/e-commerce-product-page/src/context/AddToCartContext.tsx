import React from 'react';
import { ReactNode, useState } from 'react';

interface AddToCartProviderProps {
  children: ReactNode;
}

export interface CartProductProps {
  name?:string,
  thumbnail?: string,
  qnty?: number,
  value?: number
}

interface AddToCartInterface {
  AddToCart: CartProductProps;
  setAddToCart: (AddToCart: CartProductProps) => void;
}

export const AddToCartContext = React.createContext<AddToCartInterface>({
  AddToCart: {},
  setAddToCart: function (AddToCart: object) {
    return AddToCart;
  },
});

export function AddToCartProvider({ children }: AddToCartProviderProps) {
  const [AddToCart, setAddToCart] = useState({});

  return (
    <AddToCartContext.Provider value={{ AddToCart, setAddToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
}
