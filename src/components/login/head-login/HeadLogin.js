import React from "react";
import styles from "./head.module.scss";


export default function HeadLogin() {
  return (
    <div className={styles.header}>
      <div className={styles.content_logo}>
        <div>
          <img
            className={styles.logo}
            // src='https://res.cloudinary.com/perusap/image/upload/v1630260224/EXAM/azul_mejor_htm58e.png'
            src="https://res.cloudinary.com/perusap/image/upload/v1653543834/EXAM/3_u8kl7v.png"
            alt="No tienes acceso a internet"
          />
        </div>
      </div>
      <p className={styles.sub_title}>Examen App</p>
    </div>
  );
}
