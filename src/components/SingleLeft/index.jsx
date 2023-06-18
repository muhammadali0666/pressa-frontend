import "./single.css";
import HomeSingle from "../../assets/img/home.png";
import React from "react";
import Navigat from "../../assets/img/navigate.png";
import SinglDate from "../../assets/img/data.png";
import Clock from "../../assets/img/clock.png";
import Network from "../../assets/img/network.png";
import Share from "../../assets/img/share.png";
import Facebook from "../../assets/img/single_facebook.png";
import Twitter from "../../assets/img/s-twitter.png";
import Insta from "../../assets/img/s-insta.png";
import Tel from "../../assets/img/s-tel.png";
import Bird from "../../assets/img/s-bird.png";

export const SingleLeft = () => {
  return (
    <div className="single">
      <a href="#" className="single_navigate">
        <img src={HomeSingle} alt="img" className="single_link_img" />
        <p className="single_p">Biznes</p>
        <img src={Navigat} alt="img" className="single_link_img_next" />
        <p className="single_p_next">Alisher Isaevdan...</p>
      </a>
      <div className="single_top_box">
        <div className="single_top_box_left">
          <h3 className="single_left_paragraph">
            Alisher Isaevdan biznes va IT bo’yicha master klass
          </h3>
          <span className="single_left_span">
            <div className="simple">
              <img
                src={SinglDate}
                alt="icon"
                className="single_box_left_img"
                width={18}
                height={18}
              />
              <p className="single_box_left_p">17 / 01 / 2022</p>
            </div>
            <div className="simple">
              <img
                src={Clock}
                alt="icon"
                className="single_box_left_img"
                width={18}
                height={18}
                style={{ marginLeft: "42px" }}
              />
              <p className="single_box_left_p">15:00</p>
            </div>
          </span>
          <span className="single_left_span_next">
            <img
              src={Network}
              alt="icon"
              className="single_box_left_img"
              width={18}
              height={12}
            />
            <p className="single_box_left_p">Online</p>
          </span>
          <div className="single_box_left_bottom">
            <div className="single_box_left_bottom_mini">
              <img
                src={Share}
                alt="icon"
                className="single_box_left_img_bottom"
                width={18}
                height={18}
              />
              <p className="single_box_left_p_bottom">Ulashing</p>
            </div>
            <ul className="single_box_left_p_bottom_list">
              <li className="single_box_left_p_bottom_item">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100076524691842&mibextid=ZbWKwL" className="single_box_left_p_bottom_link">
                  <img
                    src={Facebook}
                    alt="icon"
                    width={14}
                    height={22}
                    className="single_box_left_p_bottom_img"
                  />
                </a>
              </li>
              <li className="single_box_left_p_bottom_item">
                <a href="#" className="single_box_left_p_bottom_link">
                  <img
                    src={Twitter}
                    alt="icon"
                    width={13}
                    height={22}
                    className="single_box_left_p_bottom_img"
                  />
                </a>
              </li>
              <li className="single_box_left_p_bottom_item">
                <a  target="_blank" href="https://www.instagram.com/muhammadali122222/?igshid=ZDc4ODBmNjlmNQ%3D%3D" className="single_box_left_p_bottom_link">
                  <img
                    src={Insta}
                    alt="icon"
                    width={20}
                    height={20}
                    className="single_box_left_p_bottom_img"
                  />
                </a>
              </li>
              <li className="single_box_left_p_bottom_item">
                <a href='#' className="single_box_left_p_bottom_link">
                  <img
                    src={Bird}
                    alt="icon"
                    width={22}
                    height={18}
                    className="single_box_left_p_bottom_img"
                  />
                </a>
              </li>
              <li className="single_box_left_p_bottom_item">
                <a target="_blank" href="https://t.me/Sh_Muhammadali5" className="single_box_left_p_bottom_link">
                  <img
                    src={Tel}
                    alt="icon"
                    width={22}
                    height={20}
                    className="single_box_left_p_bottom_img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
