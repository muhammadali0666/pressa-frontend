import "./single.css";
import Alisher from "../../assets/img/alisher.png";
import Location from "../../assets/img/location.png"
import Date from "../../assets/img/date_r.png"
import Youtube from "../../assets/img/youtube.png"
import Time from "../../assets/img/clock_r.png"

export const SingleRighr = () => {
  return (
    <div className="single_right">
      <h2 className="single_right_paragraph">
        Alisher Isaevdan biznes va IT bo’yicha master klass
      </h2>
      <p className="single_right_p">
        Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
        musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch
        soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni
        "bir dasturxon atrofida" to'plashga qaror qildik.
      </p>
      <img
        src={Alisher}
        alt="img"
        width={764}
        height={468}
        className="single_right_img"
      />
      <p className="single_right_bottom_p">
        Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
        musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch
        soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni
        "bir dasturxon atrofida" to'plashga qaror qildik. Kuni kecha bo'lib
        o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib,
        ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va
        oflayn tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb
        sahifa tayyorlash vazifasi topshirildi. Demak, roppa-rosa 2 haftadan
        keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar
        tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho
        sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.
      </p>
      <ul className="single_right_list">
        <li className="single_right_item">
          <a href="#" className="single_right_link">
            <img src={Location} width={16} height={20} alt="icon" className="single_right_bottom_img" />
            <p className="single_right_bottom_p_next">
            Google kartadan aniqlash
            </p>
          </a>
        </li>
        <li className="single_right_item">
          <a href="#" className="single_right_link">
            <img src={Youtube} width={20} height={16} alt="icon" className="single_right_bottom_img" />
            <p className="single_right_bottom_p_next">
            Youtubedan tomosha qilish
            </p>
          </a>
        </li>
        <li className="single_right_item">
          <a href="#" className="single_right_link">
            <img src={Date} width={18} height={18} alt="icon" className="single_right_bottom_img" />
            <p className="single_right_bottom_p_nexts">
            22 / 01 / 2022
            </p>
          </a>
        </li>
        <li className="single_right_item">
          <a href="#" className="single_right_link">
            <img src={Time} width={18} height={18} alt="icon" className="single_right_bottom_img" />
            <p className="single_right_bottom_p_nexts">
            14:00
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};
