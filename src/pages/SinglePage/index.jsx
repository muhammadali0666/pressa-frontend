import React from "react";
import { Layouts } from "../../components/Layouts";
import { SingleLeft } from "../../components/SingleLeft";
import { SingleRighr } from "../../components/SingleRight";
import { Recommad } from "../../components/SingleRecommand";
import "./singlePage.css"

export const SinglePage = () => {
  return (
    <Layouts>
      <div className="container">
        <div className="single_wrapper" style={{ display: "flex" }}>
          <SingleLeft />
          <SingleRighr />
        </div>
        <p className="single_reeco_p" style={{ marginBottom: "50px", fontSize: "22px", fontWeight: "500" }}>
          Tavsiya etamiz
        </p>
        <Recommad />
      </div>
    </Layouts>
  );
};
