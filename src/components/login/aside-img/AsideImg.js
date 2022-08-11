import React from "react";
import styles from "./asideImg.module.scss";

export default function AsideImg() {
  return (
    <div
      className={styles.aside_img}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/perusap/image/upload/v1630265683/EXAM/ww_ogvgmz.jpg)",
          // "url(https://res.cloudinary.com/perusap/image/upload/v1629824743/EXAM/wall_ghyhf4.jpg)",
      }}
    ></div>
  );
}
