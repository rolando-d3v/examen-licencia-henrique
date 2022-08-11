// import React from "react";
import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as FaIcons from "react-icons/fa";
import AuthContext from "../../../context/auth/authContext";
import { types } from "../../../context/auth/types";
import { ToastSuccess, ToastError } from "../../../tools/Toasting";
import styles from "./form.module.scss";

import datos from "../../../data/data.json";

// import { postData } from "../../../utils/fetchData";
// import { DataContext } from "../../../store/GlobalState";
// import {loadingLogo} from '../../../store/actions';

//schema de formualrio con yup
const schema = yup.object().shape({
  email: yup
    .string()
    .required("email es obligatorio")
    .email("email no valido"),
  password: yup
    .string()
    .required("password es obligatorio")
    .min(6, "minimo 6 letras"),
  cheked: yup.boolean(),
});

//component
export default function FormLogin() {
  // const { state, dispath } = useContext(DataContext);
  const [eyePass, setEyePass] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  // history.replace(lastpath)

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { campo: "prueba" },
    resolver: yupResolver(schema),
  });

  //post data in server
  const onSubmit = async (data, e) => {
    console.log(data.email);
    console.log(datos.email);

    if (data.email !== datos.email) {
      return ToastError("Correo incorrecto ❗");
    }

    if (data.password !== datos.password) {
      return ToastError("Password incorrecto ❗");
    }

    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Rolando",
      },
    });

    ToastSuccess("Login Exitoso ✔");
    // dispath(loadingLogo())

    e.target.reset();
    setValue("cheked", false);
  };

  // MOSTRAR UN ERROR PERZONALIZADO
  const errorHookForm = (err) => {
    if (err) {
      return <span className={styles.error_alert}>{err}</span>;
    }
  };

  //efecto de input label hacia arriba
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add(styles.focus);
    }
    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove(styles.focus);
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

  //mostara el eye con el password
  const clickEyePassword = () => {
    setEyePass(!eyePass);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_login}>
      <section className={`${styles.section_input}`}>
        <span className={styles.icon_login}>
          <FaIcons.FaRegEnvelope className="" />
        </span>
        <div className="div_input">
          <label htmlFor="email-for" className={`${styles.label_form} `}>
            tu correo
          </label>
          <input
            // autoFocus={true}
            className={`${styles.input} ${"input"} `}
            autoComplete="off"
            required="on"
            type="email"
            name="email"
            id="email-for"
            {...register("email")}
          />
          {errorHookForm(errors.email?.message)}
        </div>
      </section>
      <section className={`${styles.section_input}`}>
        <span className={styles.icon_login}>
          <FaIcons.FaUserLock className="" />
        </span>
        <div className="control-input">
          <label htmlFor="password" className={`${styles.label_form} `}>
            contraseña
          </label>
          <input
            autoComplete="off"
            type={eyePass ? "text" : "password"}
            name="password"
            id="password"
            className={`${styles.input} ${"input"} `}
            required="on"
            {...register("password")}
          />
          {watch("password") && (
            <span
              className={styles.eye_pass}
              onClick={() => clickEyePassword()}
            >
              {eyePass ? <FaIcons.FaEye /> : <FaIcons.FaEyeSlash />}
            </span>
          )}

          {errorHookForm(errors.password?.message)}
        </div>
      </section>
      {/* <label className={styles.container_check}>
        <input type="checkbox" name="cheked" {...register("cheked")} />
        <span className={styles.label}>Permanecer conectado</span>
        <span className={styles.checkmark}></span>
      </label> */}

      <div className={styles.wrapper_button}>
        {watch("email") ? (
          <button
            type="submit"
            className={`${styles.__login}  ${styles.__checked} `}
          >
            Iniciar sesion
          </button>
        ) : (
          <button className={styles.__login} disabled>
            Iniciar sesion
          </button>
        )}
      </div>
    </form>
  );
}
