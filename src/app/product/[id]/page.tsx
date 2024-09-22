import { productGet } from "@/actions/products-get";
import { Product, ResponseSingleProduct } from "@/components/CardProduct/types";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductDetailContainer({
  params,
}: {
  params: Product;
}) {
  const data: ResponseSingleProduct = await productGet(params.id);
  //TODO: Loading
  return (
    <section className="container mainContainer">
      <h1 className="title">Detalhes do produto - {params.id}</h1>
      <div>
        <ProductDetail product={data.product} />
      </div>
    </section>
  );
}
