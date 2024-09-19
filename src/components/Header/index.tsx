import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/assets/myside-logo.svg"}
            alt="MySide"
            width={118}
            height={32}
            priority
          />
        </Link>

        <Link className={styles.cart} href={"/cart"}>Carrinho</Link>
      </nav>
    </header>
  );
}
