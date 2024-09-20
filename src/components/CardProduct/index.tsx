import Image from "next/image";
import { Product } from "./types";
import Link from "next/link";
import styles from "./card-product.module.css";

//TODO: Toast de Produto adicionado no carrinho ou algum feedback
//TODO: Componetizar Button

export default function CardProduct({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <h5 className={styles.title}>{product.title}</h5>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.title}
            width={220}
            height={220}
            sizes="80vw"
          />
        </div>
        <h5 className={styles.description}>{product.description}</h5>
        <div className={styles.containerTitle}>
          <h5 className={styles.title}>${product.price}</h5>
        </div>
        <div className={styles.containerTitle}>
          <button>Adicionar ao carrinho</button>
        </div>
      </Link>
      {/* <h4>{product.title}</h4> */}
    </div>
  );
}
