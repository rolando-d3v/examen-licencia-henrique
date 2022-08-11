import React from "react";
import styles from "./footer.module.scss";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";

export default function FooterLogin() {
  return (
    <div className={styles.footer}>
      <div className={styles.ex9}>
        <Link to="/intro" className={styles.link_text}>
          <span className={styles.text}> Regresar a pagina principal</span>
          <TiIcons.TiArrowBackOutline className={styles.icon} />
        </Link>
      </div>
      <div className={styles.ex3}>
        <a href="#!" className={`${styles.text}  ${styles.version} `}>
          ramf
        </a>
      </div>
    </div>
  );
}
