"use server";

import { ResponseProduct } from "@/components/CardProduct/types";
import searchProductsByTitle from "@/utils/searchProductsByTitle";

export default async function productsGet(nameSearch?: string) {
  const response = await fetch("https://fakestoreapi.in/api/products");

  const data = (await response.json()) as ResponseProduct;

  //TODO: Controle de erros

  return searchProductsByTitle(data, nameSearch);
}
