"use server";

import {
  ResponseProduct,
  ResponseProductCategories,
} from "@/components/CardProduct/types";

export async function productsGet(page: number) {
  const response = await fetch(`https://fakestoreapi.in/api/products?page=${page}&limit=10`);

  const data = (await response.json()) as ResponseProduct;

  return data;
}
//TODO: Controle de erros

export async function productsCategoriesGet() {
  const response = await fetch("https://fakestoreapi.in/api/products/category");

  const data = (await response.json()) as ResponseProductCategories;

  return data;
}
//TODO: Controle de erros

export async function productsCategoryGet(category: string) {
  const response = await fetch(
    `https://fakestoreapi.in/api/products/category?type=${category}`
  );

  const data = (await response.json()) as ResponseProduct;

  return data;
}

//TODO: Controle de erros
