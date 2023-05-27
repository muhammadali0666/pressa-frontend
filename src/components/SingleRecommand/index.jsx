import "./recomand.css";
import Announ from "../../assets/img/announcment.png";
import User from "../../assets/img/user.png";
import Date from "../../assets/img/data.png";
import Network from "../../assets/img/network.png";
import Time from "../../assets/img/clock.png";
import View from "../../assets/img/eye.png";
import Pro from "../../assets/img/profession.png";
import { useState, useEffect } from "react";

export const Recommad = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pressa-backend-end.onrender.com/get_card")
      .then((res) => res.json())
      .then((mydata) => setData(mydata));
  }, []);

  return (
    <div className="reco_wrapper">
      {data.length &&
        data.map((e) => (
          <>
            {e.isActive === true && e.isApply === true && (
                <div className="recommand">
                  <img
                    src={Announ}
                    alt="img"
                    width={407}
                    height={417}
                    className="recomand_img"
                  />
                  <div className="recommand_box">
                    <h4 className="recommadn_paragraph">
                      {e.title}
                    </h4>
                    <div className="recommand_mini_box">
                      <ul className="recommad_list">
                        <li className="recommand_item">
                          <img
                            src={User}
                            alt=""
                            className="recommand_mini_icon"
                            width={12}
                            height={16}
                          />
                          <p className="recommand_mini_p">{e.fullname}</p>
                        </li>
                        <li className="recommand_item">
                          <img
                            src={Date}
                            alt=""
                            className="recommand_mini_icon"
                            width={16}
                            height={16}
                          />
                          <p className="recommand_mini_p">{e.date}</p>
                        </li>
                        <li className="recommand_item">
                          <img
                            src={Network}
                            alt=""
                            className="recommand_mini_icon"
                            width={16}
                            height={16}
                          />
                          <p className="recommand_mini_p">{e.network}</p>
                        </li>
                      </ul>
                      <ul className="recommad_list" style={{marginLeft: "auto"}}>
                        <li className="recommand_item">
                          <img
                            src={Pro}
                            alt=""
                            className="recommand_mini_icon"
                            width={11}
                            height={16}
                          />
                          <p className="recommand_mini_p">{e.profession}</p>
                        </li>
                        <li className="recommand_item">
                          <img
                            src={Time}
                            alt=""
                            className="recommand_mini_icon"
                            width={16}
                            height={16}
                          />
                          <p className="recommand_mini_p">{e.time}</p>
                        </li>
                        <li className="recommand_item">
                          <img
                            src={View}
                            alt=""
                            className="recommand_mini_icon"
                            width={17}
                            height={17}
                          />
                          <p className="recommand_mini_p">{e.view}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            )}
          </>
        ))}
    </div>
  );
};
