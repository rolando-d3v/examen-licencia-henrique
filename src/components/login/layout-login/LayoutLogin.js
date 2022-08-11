import AsideImg from "../aside-img/AsideImg";
import FooterLogin from "../footer-login/FooterLogin";
import FormLogin from "../form-login/FormLogin";
import HeadLogin from "../head-login/HeadLogin";
import React from "react";
import styles from './layout.module.scss';


export default function LayoutLogin() {
  return (
    <div className={styles.wrapper_screen} >
      <div className={styles.right_side} >
        <HeadLogin />
        <FormLogin />
        <FooterLogin />
      </div>
      <AsideImg />
    </div>
  );
}
