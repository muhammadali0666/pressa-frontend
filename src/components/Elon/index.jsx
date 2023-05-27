import "./elon.css";
import HomeImg from "../../assets/img/home.png";
import { ElonTop } from "../ElonTop";

export const Elon = () => {
  return (
    <div className="elon">
      <div className="elon_inner">
        <div className="elon_top_box-one">
          <img
            src={HomeImg}
            alt="home"
            className="elon_top_img"
            width={18}
            height={20}
          />
          <p className="elon_top_p">E’lon berish</p>
        </div>
        <ElonTop />
      </div>
    </div>
  );
};
