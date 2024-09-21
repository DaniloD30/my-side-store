"use client";

import { Product } from "@/components/CardProduct/types";
import React, { createContext, ReactNode, useContext } from "react";

type ProductContextProps = {
  productsCart: Product[];
  handleAddProduct: (product: Product) => void;
};

export const ProductContext = createContext({} as ProductContextProps);

interface ProviderProps {
  children: ReactNode;
}
export function ProductContextProvider({ children }: ProviderProps) {
  const [productsCart, setProductCart] = React.useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    //TODO: Precisa de um debounce para não clicar no botão varias vezes
    setProductCart([...productsCart, product]);
  };
  return (
    <ProductContext.Provider value={{ productsCart, handleAddProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
