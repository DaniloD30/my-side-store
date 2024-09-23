"use client";

import { useProduct } from "@/context/ProductContext";
import style from "./cart.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
//TODO: your cart is empty
//TODO: Verificar a quantidade de itens do carrinho
//TODO: Remover item do carrinho

export default function Cart() {
  const { productsCart } = useProduct();

  const router = useRouter();

  const label = productsCart.length > 1 ? "Produtos" : "Produto";
  return (
    <section className="container mainContainer">
      <div className={style.containerTitleAndButton}>
        <div className={style.containerTitle}>
          <h1 className="title">Carrinho</h1>
          {productsCart.length > 0 && (
            <h5>{`(${productsCart.length} ${label})`}</h5>
          )}
        </div>
        <div>
          <button
            className={style.selectCategory}
            onClick={() => router.push("/")}
          >
            Voltar para os produtos
          </button>
        </div>
      </div>
      {productsCart.map((product) => (
        <div className={style.containerCardCart}>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            sizes="80vw"
          />
          <div>
            <div className={style.titleProduct}>
              <h4>{product.title}</h4>
            </div>
            <div className={style.containerText}>
              <h4>Marca:</h4>
              <p>{product.brand.toUpperCase()} </p>
            </div>
            <div className={style.containerText}>
              <h4>Modelo:</h4>
              <p>{product.model.toUpperCase()} </p>
            </div>
            <div className={style.containerText}>
              <h4>Cor:</h4>
              <p>{product.color.toUpperCase()} </p>
            </div>
            <div className={style.containerText}>
              <h4>Preço:</h4>
              <p>${product.price} </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
