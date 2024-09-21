"use client";
import CardProduct from "../CardProduct";
import { ResponseProduct } from "../CardProduct/types";
import styles from "./products.module.css";
import searchProductsByTitle from "@/utils/searchProductsByTitle";
import { useProduct } from "@/context/ProductContext";

//TODO: Testes Unitarios

export default function Products({ data }: { data: ResponseProduct }) {
  const { nameSearch } = useProduct();
  
  //TODO: Products contem uma lista de card Products e a paginação
  //TODO: Loading

  //TODO: use effect no nameSearch para o revalidateTag no productsGet
  //TODO: E se ao inves do revalidate, eu utilizar o proprio data para o filtro?
  
  return (
    <div className={styles.containerProducts}>
      {searchProductsByTitle(data, nameSearch).products.map((item, index) => (
        <CardProduct key={item.id + index} product={item} />
      ))}
    </div>
  );
}
