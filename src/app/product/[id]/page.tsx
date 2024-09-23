import { productGet } from "@/actions/products-get";
import { Product } from "@/components/CardProduct/types";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductDetailContainer({
  params,
}: {
  params: Product;
}) {
  const { data } = await productGet(params.id);

  return (
    <section className="container mainContainer">
      <h1 className="title">Detalhes do produto - {params.id}</h1>
      <div>{data && <ProductDetail product={data.product} />}</div>
    </section>
  );
}
