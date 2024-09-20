import productsGet from "@/actions/products-get";
import CardProduct from "../CardProduct";
import { ResponseProduct } from "../CardProduct/types";

export default async function Products() {
  const data: ResponseProduct = await productsGet();

  //TODO: Products contem uma lista de card Products e a paginação
  //TODO: Loading
  console.log(data);
  return (
    <div>
      {data.products.map((item, index) => (
        <CardProduct key={index} product={item} />
      ))}
    </div>
  );
}
