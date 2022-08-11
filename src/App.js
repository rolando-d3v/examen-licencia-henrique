import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRouter from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";


export default function App() {

  

  return (
    <div  >
      <BrowserRouter>
       <Sidebar  />
        <AppRouter />
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
