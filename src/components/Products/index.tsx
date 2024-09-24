"use client";
import CardProduct from "../CardProduct";
import { ResponseProduct } from "../CardProduct/types";
import styles from "./products.module.css";
import searchProductsByTitle from "@/utils/searchProductsByTitle";

export default function Products({
  data,
  nameSearch,
}: {
  data?: ResponseProduct;
  nameSearch: string;
}) {
  return (
    <div className={styles.containerProducts}>
      {searchProductsByTitle(nameSearch, data)?.products?.length! > 0 ? (
        searchProductsByTitle(nameSearch, data)?.products.map((item, index) => (
          <CardProduct key={item.id + index} product={item} />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            minHeight: "50vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>Produto não encontrado!</h3>
        </div>
      )}
    </div>
  );
}
