"use client";
import CardProduct from "../CardProduct";
import { ResponseProduct } from "../CardProduct/types";
import styles from "./products.module.css";
import searchProductsByTitle from "@/utils/searchProductsByTitle";

//TODO: Testes Unitarios

export default function Products({
  data,
  nameSearch,
}: {
  data?: ResponseProduct;
  nameSearch: string;
}) {
  //TODO: Products contem uma lista de card Products e a paginação
  //TODO: Loading

  return (
    <div className={styles.containerProducts}>
      {searchProductsByTitle(nameSearch, data)?.products.map((item, index) => (
        <CardProduct key={item.id + index} product={item} />
      ))}
    </div>
  );
}
