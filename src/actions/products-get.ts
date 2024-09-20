"use server";

import { ResponseProduct } from "@/components/CardProduct/types";

export default async function productsGet() {
  const response = await fetch("https://fakestoreapi.in/api/products");

  const data = (await response.json()) as ResponseProduct;

  return data;
}
