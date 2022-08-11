import React from "react";
import css from "./img_pre.module.scss";

export default function Img_pre({ img_pre }) {
  return (
    <div className={css.content_img}>
      <img src={img_pre} alt="" className={css.img_pre} />
    </div>
  );
}
