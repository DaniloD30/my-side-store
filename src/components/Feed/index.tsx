"use client";
import {
  productsGet,
  productsCategoriesGet,
  productsCategoryGet,
} from "@/actions/products-get";
import {
  ResponseProduct,
  ResponseProductCategories,
} from "../CardProduct/types";
import Filters from "../Filters";
import Products from "../Products";
import { startTransition, useEffect, useState } from "react";

//TODO: Testes Unitarios

//TODO: Lembre das responsabilidades

//TODO: Tirar os contextos, usar state no Feed
//      e tirar o async do function e por dentro de um async no useEffect

export default function Feed() {
  const [categories, setCategories] = useState<ResponseProductCategories>();
  const [products, setProducts] = useState<ResponseProduct>();
  const [nameSearch, setNameSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    startTransition(async () => {
      const data: ResponseProduct = await productsGet();
      const dataCategories: ResponseProductCategories =
        await productsCategoriesGet();
      setProducts(data);
      setCategories(dataCategories);
    });
  }, []);

  useEffect(() => {
    if (category !== "") {
      startTransition(async () => {
        const dataFilterByCategories: ResponseProduct =
          await productsCategoryGet(category);
        setProducts(dataFilterByCategories);
      });
    }
  }, [category]);

  return (
    <>
      <Filters
        categories={categories?.categories}
        setCategorySearch={setCategory}
        setNameSearch={setNameSearch}
      />
      <Products data={products} nameSearch={nameSearch} />
    </>
  );
}
