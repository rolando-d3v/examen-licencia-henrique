import React from "react";
import { toast} from "react-toastify";
import red from '../assets/img/logo.png'

export const ToastSuccess = (text) => {
  toast.success(text, {
    icon: "😃",
    theme: "dark",
  });
};

export const ToastError = (text) => {
  toast.error(text, {
    icon: "😕",
    theme: "dark",
  });
};

export const ToastResult = (text) => {
  toast.info(text, {
    icon: "✨",
    // icon: ({theme, type}) =>  <img src={red}  width='26px' alt='red'  />,
    theme: "colored",
  });
};
