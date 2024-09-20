import productsGet from "@/actions/products-get";
import CardProduct from "../CardProduct";
import { ResponseProduct } from "../CardProduct/types";
import styles from "./products.module.css";

export default async function Products() {
  const data: ResponseProduct = await productsGet();

  //TODO: Products contem uma lista de card Products e a paginação
  //TODO: Loading

  return (
    <div className={styles.containerProducts}>
      {data.products.map((item, index) => (
        <CardProduct key={item.id + index} product={item} />
      ))}
    </div>
  );
}
