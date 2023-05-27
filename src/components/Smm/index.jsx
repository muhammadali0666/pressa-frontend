import "./smm.css";
import SmmOne from "../../assets/img/smmOne.png";
import SmmmTwo from "../../assets/img/smmTwo.png";

export const Smm = () => {
  return (
    <div className="smm">
      <div className="container">
        <div className="smm_inner">
          <div className="smm_box">
            <div className="smm_card">
              <p className="smm_text">E’LONLARINGIZNI BIZNI SAYTDA BERING</p>
              <img
                src={SmmOne}
                alt="img"
                className="smm_img"
                width={297}
                height={377}
              />
            </div>
            <div className="smm_card" style={{marginLeft: "30px"}}>
              <p className="smm_text">ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</p>
              <img
                src={SmmmTwo}
                alt="img"
                className="smm_img"
                width={263}
                height={393}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
