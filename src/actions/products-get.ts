"use server";

import { ResponseProduct } from "@/components/CardProduct/types";
import searchProductsByTitle from "@/utils/searchProductsByTitle";

export default async function productsGet(nameSearch?: string) {
  const response = await fetch("https://fakestoreapi.in/api/products", {
    next: {
      tags: ["get-products"],
    },
  });

  const data = (await response.json()) as ResponseProduct;

  if (nameSearch) {
    return searchProductsByTitle(data, nameSearch);
  }

  return data;
}

//TODO: Controle de erros
