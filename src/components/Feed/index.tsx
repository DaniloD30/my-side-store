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
import { useEffect, useState, useTransition } from "react";
import Pagination from "../Pagination";

//TODO: Testes Unitarios

//TODO: Lembre das responsabilidades
//TODO: Diminuir UseState
//TODO: Resetar filtros
//TODO: Componentes Condicionais
//TODO: Responsividade
//TODO: Disabled Resetar Filtros
//TODO: Carrinho
//TODO: Publicação na Vercel
//TODO: Testes Unitarios

export default function Feed() {
  const [categories, setCategories] = useState<ResponseProductCategories>();
  const [products, setProducts] = useState<ResponseProduct>();
  const [nameSearch, setNameSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const { data } = await productsCategoriesGet();
      if (data) {
        setCategories(data);
      }
    });
  }, []);

  useEffect(() => {
    startTransition(async () => {
      const { data } = await productsGet(page);
      if (data) {
        setProducts(data);
      }
    });
  }, [page]);

  useEffect(() => {
    if (category !== "") {
      startTransition(async () => {
        const { data } = await productsCategoryGet(category);
        if (data) {
          setProducts(data);
        }
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
      {isPending && <h4>Loading</h4>}
      <Products data={products} nameSearch={nameSearch} />
      {nameSearch !== "" || category !== "" ? null : (
        <Pagination page={page} total={150} setPage={setPage} />
      )}
    </>
  );
}
