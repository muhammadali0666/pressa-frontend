import React, { Children } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layouts = ({children}) => {
  return (
    <>
      <Header />
      {
        children
      }
      <Footer />
    </>
  );
};
