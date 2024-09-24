"use client";
import Image from "next/image";
import { Product } from "./types";
import Link from "next/link";
import styles from "./card-product.module.css";
import { useProduct } from "@/context/ProductContext";

export default function CardProduct({ product }: { product: Product }) {
  const { handleAddProduct } = useProduct();

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
            loading="lazy"
            sizes="80vw"
          />
        </div>
        <h5 className={styles.description}>{product.description}</h5>
        <div className={styles.containerTitle}>
          <h5 className={styles.title}>${product.price}</h5>
        </div>
      </Link>
      <div className={styles.containerTitle}>
        <button onClick={() => handleAddProduct(product)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
