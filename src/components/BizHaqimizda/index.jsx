import "./biz.css";
import User from "../../assets/img/user.png";

import React from "react";

export const Biz = () => {
  return (
    <div className="biz">
      <div className="container">
        <div className="biz_inner">
          <div className="biz_top_box">
            <img
              src={User}
              alt="img"
              className="biz_img"
              width={18}
              height={18}           />
            <p className="biz_top_p">Biz haqimizda</p>
          </div>
          <p className="biz_top_p_bottom">Biz haqimizda</p>
          <p className="biz_text">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
          </p>
          <p className="biz_bottom">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
            <br />
            <br />
            Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
            guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
            shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli
            ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi
            topshirildi.
            <br />
            <br /> Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning
            qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib,
            dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan
            taqdirlanadi. Biz barchaga omad tilab qolamiz.
          </p>
        </div>
      </div>
    </div>
  );
};
