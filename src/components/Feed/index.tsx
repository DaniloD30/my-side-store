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
import Pagination from "../Pagination";

//TODO: Testes Unitarios

//TODO: Lembre das responsabilidades
//TODO: Diminuir UseState
//TODO: Resetar filtros
//TODO: Componentes Condicionais

export default function Feed() {
  const [categories, setCategories] = useState<ResponseProductCategories>();
  const [products, setProducts] = useState<ResponseProduct>();
  const [nameSearch, setNameSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    startTransition(async () => {
      const dataCategories: ResponseProductCategories =
        await productsCategoriesGet();
      setCategories(dataCategories);
    });
  }, []);

  useEffect(() => {
    startTransition(async () => {
      const data: ResponseProduct = await productsGet(page);
      setProducts(data);
    });
  }, [page]);

  useEffect(() => {
    if (category !== "") {
      startTransition(async () => {
        const dataFilterByCategories: ResponseProduct =
          await productsCategoryGet(category);
        setProducts(dataFilterByCategories);
      });
    }
  }, [category]);

  const resetFilters = () => {
    setNameSearch("");
    setCategory("");
    setPage(1);
  };

  return (
    <>
      <Filters
        nameSearch={nameSearch}
        categories={categories?.categories}
        setCategorySearch={setCategory}
        setNameSearch={setNameSearch}
        resetFilters={resetFilters}
      />
      <Products data={products} nameSearch={nameSearch} />
      {nameSearch !== "" || category !== "" ? null : (
        <Pagination page={page} total={150} setPage={setPage} />
      )}
    </>
  );
}
