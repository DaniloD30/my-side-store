"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

type ProductContextProps = {
  nameSearch: string;
  setNameSearch: Dispatch<SetStateAction<string>>;
};

export const ProductContext = createContext({} as ProductContextProps);

interface ProviderProps {
  children: ReactNode;
}
export function ProductContextProvider({ children }: ProviderProps) {
  const [nameSearch, setNameSearch] = React.useState<string>("");

  return (
    <ProductContext.Provider value={{ setNameSearch, nameSearch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
