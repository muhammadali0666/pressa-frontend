import React from "react";
import "./sidebar.css";
import HomeIcon from "../../assets/img/dash_home.png";
import Statistika from "../../assets/img/statistik.png";
import Delete from "../../assets/img/trash.png";
import Settings from "../../assets/img/settings.png";
import Exit from "../../assets/img/chiqish.png";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/home" className="sidebar_logo">
        Pressa
      </a>

      <ul className="sidebar_list">
        <li className="sidebar_item">
          <a href="/home" className="sidebar_link">
            <img
              src={HomeIcon}
              alt="icon"
              className="sidebar_img"
              width={22}
              height={22}
            />
            <p className="sidebar_p">Bosh sahifa</p>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="#" className="sidebar_link">
            <img
              src={Statistika}
              alt="icon"
              className="sidebar_img"
              width={22}
              height={21}
            />
            <p className="sidebar_p">Statistika</p>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="#" className="sidebar_link">
            <img
              src={Delete}
              alt="icon"
              className="sidebar_img"
              width={24}
              height={26}
            />
            <p className="sidebar_p">O’chirilganlar</p>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="#" className="sidebar_link">
            <img
              src={Settings}
              alt="icon"
              className="sidebar_img"
              width={26}
              height={26}
            />
            <p className="sidebar_p">Sozlamalar</p>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="/home" className="sidebar_link">
            <img
              src={Exit}
              alt="icon"
              className="sidebar_img"
              width={22}
              height={22}
            />
            <p className="sidebar_p">Chiqish</p>
          </a>
        </li>
      </ul>
      <p className="sidebar_bottom_p">2022 All Rights</p>
    </div>
  );
};
