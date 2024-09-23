"use server";

import {
  ResponseProduct,
  ResponseProductCategories,
  ResponseSingleProduct,
} from "@/components/CardProduct/types";
import apiError from "@/functions/api-error";

export async function productsGet(page: number) {
  try {
    const response = await fetch(
      `https://fakestoreapi.in/api/products?page=${page}&limit=9`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!response.ok) throw new Error("Erro ao listar produtos");
    const data = (await response.json()) as ResponseProduct;
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}

export async function productGet(product: number) {
  try {
    const response = await fetch(
      `https://fakestoreapi.in/api/products/${product}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) throw new Error("Erro ao listar o produto");
    const data = (await response.json()) as ResponseSingleProduct;
    return data;
  } catch (error) {
    return apiError(error);
  }
}

export async function productsCategoriesGet() {
  try {
    const response = await fetch(
      "https://fakestoreapi.in/api/products/category",
      {
        next: {
          revalidate: Infinity,
        },
      }
    );
    if (!response.ok) throw new Error("Erro ao listar categorias");
    const data = (await response.json()) as ResponseProductCategories;

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}


export async function productsCategoryGet(category: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.in/api/products/category?type=${category}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) throw new Error("Erro produtos da categoria");
    const data = (await response.json()) as ResponseProduct;

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}

