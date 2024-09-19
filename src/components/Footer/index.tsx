import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/myside-logo.svg"}
        alt="MySide"
        width={118}
        height={32}
        priority
      />
      <p>
        MySide - MySide Serviços Imobiliários LTDA CNPJ: 35.895.467/0001-21 ©Todos os direitos reservados
      </p>
    </footer>
  );
}
