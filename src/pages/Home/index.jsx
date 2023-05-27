import React from "react";
import { Layouts } from "../../components/Layouts";
import { Hero } from "../../components/Hero";
import { Card } from "../../components/card";
import "./home.css"
import { Smm } from "../../components/Smm";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = ({info,setInfo}) => {

  // let getToken = localStorage.getItem("token");

  // window.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   if (!getToken) {
  //     window.location.href = "/login";
  //   }
  // });

  return (
    <div>
      <Header setInfo={setInfo}/>
        <Hero setInfo={setInfo}/>
        <div className="container">
          <p className="card_text">Oxirgi e'lonlar</p>
          <div
            className="card_inner"
            style={{ marginBottom: "200px" }}
          >
            <Card info={info}/>
          </div>
        </div>
        <Smm/>
        <Footer/>
    </div>
  );
};
