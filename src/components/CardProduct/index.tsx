import Image from "next/image";
import { Product } from "./types";

//TODO:  Card Product: menos a imagem, o nome, o preço e uma breve descrição, botão
//       adicionar no carrinho{" "}

//TODO: Toast de Produto adicionado no carrinho ou algum feedback

export default function CardProduct({ product }: { product: Product }) {
  return (
    <div style={{padding: 10}}>
      <Image src={product.image} alt={product.title} width={500} height={500} />
      {/* <h4>{product.title}</h4> */}
    </div>
  );
}
