import "./hero.css";
import { useState, useEffect } from "react";

export const Hero = ({ setInfo }) => {
  const [dataCard, setDataCard] = useState([]);
  const [fullname, setFullname] = useState("");
  const [profession, setProfession] = useState("");

  useEffect(() => {
    fetch("https://pressa-backend-end.onrender.com/get_card")
      .then((res) => res.json())
      .then((mydata) => setDataCard(mydata));
  }, []);

  ////////////////////////////////////////////  Search

  const searchFunction = async (e) => {
    e.preventDefault();
    const { date, network } = e.target;

    await fetch("https://pressa-backend-end.onrender.com/search", {
      method: "GET",
      headers: {
        search: date.value || network.value || fullname || profession,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Ma'lumot topilmadi!!!") {
          alert(data.msg);
        }
        if (data.msg !== "Ma'lumot topilmadi!!!") {
          setInfo(data);
        }
      });
    date.value = "";
    setFullname("");
    setProfession('')
    network.value = "";
  };

  return (
    <div className="hero">
      <form onSubmit={(e) => searchFunction(e)}>
        <div className="container">
          <div className="hero_inner">
            <h1 className="hero_paragraph">
              Eng so’ngi master klasslar va tadbirlar bizning saytda
            </h1>
            <ul className="hero_list">
              <li className="hero_item hero_item_1">
                <div className="hero_box">
                  <input type="date" className="hero_input" name="date" placeholder="date"/>
                </div>
              </li>
              <li className="hero_item hero_item_2">
                <select
                  className="hero_select"
                  defaultValue=""
                  onChange={(e) => setProfession(e.target.value)}
                >
                  Bo'limni tanlang
                  {dataCard.map(
                    (e, idx) =>
                      e.isActive === true &&
                      e.isApply === true && (
                        <option
                          value={e.profession}
                          className="hero_option"
                          key={idx}
                        >
                          {e.profession}
                        </option>
                      )
                  )}
                </select>
              </li>
              <li className="hero_item hero_item_3">
                <div className="hero_item_box_mini">
                  <label className="search_radio_input" form="radio">
                    <input
                      className="search_radio_input"
                      type="radio"
                      name="network"
                      value="online"
                    />
                    Online
                  </label>

                  <label className="search_radio_input" form="radio">
                    <input
                      className="search_radio_input"
                      type="radio"
                      name="network"
                      value="offline"
                    />
                    Offline
                  </label>
                </div>
                {/* <select className="hero_select" name="network" id="">
                  <option value="" className="hero_option">
                    Online
                  </option>
                  <option value="" className="hero_option">
                    Offline
                  </option>
                </select> */}
              </li>
              <li className="hero_item hero_item_4">
                <select
                  name="fullname"
                  className="hero_select"
                  defaultValue=""
                  onChange={(e) => setFullname(e.target.value)}
                >
                  Ism-familya
                  {dataCard.map(
                    (e, idx) =>
                      e.isActive === true &&
                      e.isApply === true && (
                        <option
                          value={e.fullname}
                          className="hero_option"
                          key={idx}
                        >
                          {e.fullname}
                        </option>
                      )
                  )}
                </select>
              </li>
              <li className="hero_item hero_item_5">
                <button className="hero_btn" type="submit">
                  Izlash
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};
