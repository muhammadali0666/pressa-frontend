import "./elon.css";

import React from "react";

export const ElonTashkilotchi = () => {
  return (
    <div className="tashkilotchi">
      <p className="tashkilotchi_p">Tashkilotchi</p>
      <div className="tashkilotchi_bottom">
        <div className="tashkilotchi_left">
          <div className="tashkilotchi_label_wrapper">
            <label htmlFor="tashkilot" className="tashkilotchi_label">
              Yuridik nomi
            </label>
            <input
              id="tashkilot"
              type="text"
              className="tashkilotchi_input"
              placeholder="Najot Ta’lim MCHJ"
            />
          </div>
          <div className="tashkilotchi_label_wrapper">
            <label htmlFor="tashkilot2" className="tashkilotchi_label">
              Professiya
            </label>
            <input
              id="tashkilot2"
              type="text"
              className="tashkilotchi_input"
              placeholder="Product designer"
            />
          </div>
          <div className="tashkilotchi_label_wrapper">
            <label htmlFor="tashkilot3" className="tashkilotchi_label">
              Qo’shimcha tel raqam
            </label>
            <input
              id="tashkilot3"
              type="tel"
              className="tashkilotchi_input"
              placeholder="+998"
            />
          </div>
        </div>
        <div className="tashkilotchi_right">
          <div className="tashkilotchi_label_wrapper">
            <label htmlFor="tashkilot4" className="tashkilotchi_label">
              Ismi sharifi
            </label>
            <input
              id="tashkilot4"
              type="text"
              className="tashkilotchi_input"
              placeholder="Abbos Janizakov"
            />
          </div>
          <div className="tashkilotchi_label_wrapper">
            <label htmlFor="tashkilot5" className="tashkilotchi_label">
              Telefon raqami
            </label>
            <input
              id="tashkilot5"
              type="tel"
              className="tashkilotchi_input"
              placeholder="+998"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
