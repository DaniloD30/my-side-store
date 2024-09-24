"use client";
import Image from "next/image";
import styles from "./product-detail.module.css";
import { Product } from "../CardProduct/types";
import { useProduct } from "@/context/ProductContext";

export default function ProductDetail({ product }: { product: Product }) {
  const { handleAddProduct } = useProduct();

  return (
    <>
      <div className={styles.containerDetail}>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.title}
            width={520}
            height={240}
            loading="lazy"
            sizes="80vw"
          />
        </div>
        <div className={styles.description}>
          <h2>{product.title}</h2>
          <div>
            <h4>Sobre o produto</h4>
            <h5>{product.description}</h5>
          </div>
          <div>
            <div className={styles.containerText}>
              <h4>Marca:</h4>
              <p>{product.brand.toUpperCase()} </p>
            </div>
            <div className={styles.containerText}>
              <h4>Modelo:</h4>
              <p>{product.model.toUpperCase()} </p>
            </div>
            <div className={styles.containerText}>
              <h4>Cor:</h4>
              <p>{product.color.toUpperCase()} </p>
            </div>
            <div className={styles.containerText}>
              <h4>Preço:</h4>
              <p>${product.price} </p>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <button
            className={styles.selectCategory}
            onClick={() => handleAddProduct(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
}
