"use client";
import {
  productsGet,
  productsCategoriesGet,
  productsCategoryGet,
} from "@/actions/products-get";
import Filters from "../Filters";
import Products from "../Products";
import { useEffect, useReducer, useTransition } from "react";
import Pagination from "../Pagination";
import { initialState, reducer } from "@/functions/reducer";

//TODO: Lembre das responsabilidades
//TODO: Componentes Condicionais
//TODO: Responsividade
//TODO: Publicação na Vercel
//TODO: Testes Unitarios

export default function Feed() {
  const [isPending, startTransition] = useTransition();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    startTransition(async () => {
      const { data } = await productsCategoriesGet();
      if (data) {
        dispatch({ type: "SET_CATEGORIES", payload: data });
      }
    });
  }, []);

  useEffect(() => {
    startTransition(async () => {
      const { data } = await productsGet(state.page);
      if (data) {
        dispatch({ type: "SET_PRODUCTS", payload: data });
      }
    });
  }, [state.page]);

  useEffect(() => {
    if (state.category !== "") {
      startTransition(async () => {
        const { data } = await productsCategoryGet(state.category);
        if (data) {
          dispatch({ type: "SET_PRODUCTS", payload: data });
        }
      });
    }
  }, [state.category]);

  return (
    <>
      <Filters
        nameSearch={state.nameSearch}
        category={state.category}
        categories={state.categories?.categories}
        dispatch={dispatch}
      />
      {isPending && <h4>Loading</h4>}
      <Products data={state.products} nameSearch={state.nameSearch} />
      {state.nameSearch !== "" || state.category !== "" ? null : (
        <Pagination page={state.page} total={150} dispatch={dispatch} />
      )}
    </>
  );
}
