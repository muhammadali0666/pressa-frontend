import "./qabul.css";

import { useEffect, useState } from "react";

export const QabulQilingan = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pressa-backend-end.onrender.com/get_card")
      .then((res) => res.json())
      .then((mydata) => setData(mydata));
  }, []);

  return (
    <div>
      {search.length !== 0
        ? search.map((e, idx) =>
            e.isActive === true && e.isApply === true ? (
              <div key={idx} className="notification">
                <div className="notification_box">
                  <h4 className="notifction_paragraph">{e.title}</h4>
                </div>
                <div className="notification_bottom_box">
                  <p className="notification_bottom_p">{e.fullname}</p>
                  <p className="notification_bottom_p_next">{e.phoneNumber}</p>
                  <p className="notification_bottom_p_next">{e.date}</p>
                  <p className="notification_bottom_p_next">{e.time}</p>
                  <p className="notification_bottom_p_next">{e.profession}</p>
                </div>
              </div>
            ) : null
          )
        : data.map((e, idx) =>
            e.isActive === true && e.isApply === true ? (
              <div key={idx} className="notification">
                <div className="notification_box">
                  <h4 className="notifction_paragraph">{e.title}</h4>
                </div>
                <div className="notification_bottom_box">
                  <p className="notification_bottom_p">{e.fullname}</p>
                  <p className="notification_bottom_p_next">{e.phoneNumber}</p>
                  <p className="notification_bottom_p_next">{e.date}</p>
                  <p className="notification_bottom_p_next">{e.time}</p>
                  <p className="notification_bottom_p_next">{e.profession}</p>
                </div>
              </div>
            ) : null
          )}
    </div>
  );
};
