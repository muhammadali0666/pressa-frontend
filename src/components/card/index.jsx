import "./card.css";
import CardImg from "../../assets/img/announcment.png";
import User from "../../assets/img/user.png";
import Data from "../../assets/img/data.png";
import Clock from "../../assets/img/clock.png";
import Eye from "../../assets/img/eye.png";
import Network from "../../assets/img/network.png";
import Chart from "../../assets/img/chart.png";
import { useEffect, useState } from "react";

export const Card = ({ info }) => {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_card")
      .then((res) => res.json())
      .then((mydata) => setDataCard(mydata));
  }, []);

  return (
    <div>
      <div className="wrapper">
        {info.length !== 0
          ? info.map((e, idx) =>
              e.isActive === true && e.isApply === true ? (
                <div className="card" key={idx}>
                  <div className="card_inner">
                    <div className="card_box">
                      <img
                        src={e.img}
                        alt="card img"
                        className="card_img"
                        width={397}
                        height={417}
                        style={{ borderRadius: "4px" }}
                      />
                      <div className="card_inner_box">
                        <h4 className="card_paragraph">{e.title}</h4>
                        <div className="card_bottom_box">
                          <div className="card_bottom_box_left">
                            <ul className="card_bottom_box_left_list">
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={User}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={12}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.fullname}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Data}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.date}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Network}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={11}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.network}
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="card_bottom_box_right"
                            style={{ marginLeft: "50px" }}
                          >
                            <ul className="card_bottom_box_left_list">
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Chart}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={15}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.profession}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Clock}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.time}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Eye}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={17}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.view}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )
          : dataCard.map((e, idx) =>
              e.isActive === true && e.isApply === true ? (
                <div className="card" key={idx}>
                  <div className="card_inner">
                    <div className="card_box">
                      <img
                        src={e.img}
                        alt="card img"
                        className="card_img"
                        width={397}
                        height={417}
                        style={{ borderRadius: "4px" }}
                      />
                      <div className="card_inner_box">
                        <h4 className="card_paragraph">{e.title}</h4>
                        <div className="card_bottom_box">
                          <div className="card_bottom_box_left">
                            <ul className="card_bottom_box_left_list">
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={User}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={12}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.fullname}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Data}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.date}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Network}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={11}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.network}
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="card_bottom_box_right"
                            style={{ marginLeft: "50px" }}
                          >
                            <ul className="card_bottom_box_left_list">
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Chart}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={15}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.profession}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Clock}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={16}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.time}
                                </p>
                              </li>
                              <li className="card_bottom_box_left_item">
                                <img
                                  src={Eye}
                                  alt="icon"
                                  className="card_bottom_box_left_img"
                                  width={17}
                                  height={16}
                                />
                                <p className="card_bottom_box_left_p">
                                  {e.view}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
      </div>
      <button className="card_btn">Ko’proq ko’rish</button>
    </div>
  );
};
