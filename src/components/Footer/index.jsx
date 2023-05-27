import React from "react";
import Logo from "../../assets/img/logo.png";
import Call from "../../assets/img/phone.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Telegram from "../../assets/img/telegram.png";
import "./footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_inner">
          <a href="/home" className="footer_link">
            <img
              src={Logo}
              alt="logo"
              className="footer_img"
              width={35}
              height={108}
            />
          </a>

          <div className="footer_right">
            <ul className="footer_list">
              <li className="footer_item">
                <NavLink to="/biz" className="footer_item_link">
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="footer_item">
                <NavLink to="/single" className="footer_item_link">
                  Savol va Javoblar
                </NavLink>
              </li>
            </ul>

            <div className="footer_middle_box">
              <a href="tel://904565025" className="footer_call">
                <img src={Call} alt="call" className="footer_call_img" />
                <p className="footer_middle_p">904565025</p>
              </a>
            </div>

            <ul className="footer_end_list">
              <li className="footer_end_item">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100076524691842&mibextid=ZbWKwL" className="footer_social">
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="footer_social_img"
                    width={11}
                    height={18}
                  />
                </a>
              </li>
              <li className="footer_end_item">
                <a target="_blank" href="https://www.instagram.com/muhammadali122222/?igshid=ZDc4ODBmNjlmNQ%3D%3D" className="footer_social">
                  <img
                    src={Instagram}
                    alt="facebook"
                    className="footer_social_img"
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              <li className="footer_end_item">
                <a target="_blank" href="https://t.me/Sh_Muhammadali5" className="footer_social">
                  <img
                    src={Telegram}
                    alt="facebook"
                    className="footer_social_img"
                    width={18}
                    height={16}
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
