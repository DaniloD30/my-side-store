"use client";

import { useProduct } from "@/context/ProductContext";
import style from "./cart.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { productsCart } = useProduct();

  const router = useRouter();

  const label = productsCart.length > 1 ? "Produtos" : "Produto";
  const cartEmpty = productsCart.length === 0;
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
      {cartEmpty ? (
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          O carrinho está vazio! Adicione mais produtos
        </h3>
      ) : (
        productsCart.map((product, index) => (
          <div
            key={`${product.id} ${index}`}
            className={style.containerCardCart}
          >
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
        ))
      )}
    </section>
  );
}
