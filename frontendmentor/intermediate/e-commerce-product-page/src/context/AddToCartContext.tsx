import React from 'react';
import { ReactNode, useState } from 'react';

interface AddToCartProviderProps {
  children: ReactNode;
}

interface AddToCartInterface {
  AddToCart: object;
  setAddToCart: (AddToCart: object) => void;
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
