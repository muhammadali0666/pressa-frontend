import "./hero.css";
import { useState, useEffect } from "react";

export const Hero = ({ setInfo }) => {
  const [dataCard, setDataCard] = useState([]);

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
        search: date.value || network.value
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
    // profession.value = "";
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
                  <input type="date" className="hero_input" name="date" />
                </div>
              </li>
              <li className="hero_item hero_item_2">
                <select className="hero_select">
                  <option className="hero_option">Bo'limni tanlang</option>
                  <option value="1" className="hero_option">
                    <input
                      type="radio"
                      name="profession"
                      value="developer"
                    />
                    developer
                  </option>
                </select>
              </li>
              {/* <option value="2" className="hero_option">
                  <input type="radio" name="web1" value="Mobile dasturlash"/>
                    Mobile dasturlash
                  </option> */}
              {/* <option
                    style={{ fontSize: "20px", color: "#000" }}
                  
                    className="hero_option"
                  >
                    <input type="radio" name="web2" value="Dizayn"/>
                    Dizayn
                  </option> */}
              {/* <option className="hero_option">
                  <input type="radio" name="web3" value="UX/UI dizayn"/>
                    UX/UI dizayn
                  </option>
                  <option className="hero_option">
                  <input type="radio" name="web4" value="Mobile dasturlash"/>
                    Grafik dizayn
                  </option>
                  <option
                    style={{ fontSize: "20px", color: "#000" }}
                  
                    className="hero_option"
                  >
                    <input type="radio" name="web5" value="Biznes"/>
                    Biznes
                  </option>
                  <option className="hero_option">
                  <input type="radio" name="web" value="Menegment"/>
                    Menegment
                  </option>
                  <option className="hero_option">
                  <input type="radio" name="web6" value="Kredit va audit"/>
                    Kredit va audit
                  </option>
                  <option
                    style={{ fontSize: "20px", color: "#000" }}
                  
                    className="hero_option"
                  >
                    <input type="radio" name="web7" value="Ta'lim"/>
                    Ta'lim
                  </option>
                  <option className="hero_option">
                  <input type="radio" name="web8" value="Matematika"/>
                    Matematika
                  </option>
                  <option className="hero_option">
                  <input type="radio" name="web9" value="Fizka"/>
                    Fizika
                  </option> */}
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
                <select name="fullname" id="" className="hero_select">
                  <label value="" className="hero_option">
                    Ism-familya
                  </label>
                  {dataCard.map(
                    (e, idx) =>
                      e.isActive === true &&
                      e.isApply === true && (
                        <option value="" className="hero_option" key={idx}>
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
