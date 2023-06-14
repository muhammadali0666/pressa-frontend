import { Layouts } from "../../components/Layouts";
import React from "react";
import { useState } from "react";
import HomeImg from "../../assets/img/home.png";
import "./elon.css";
import { Navigate } from "react-router-dom";

export const ElonBerish = () => {
  ////////////////////////////////////////////// POSTING CARDS

  const [title, setTitle] = useState("");
  const [fullname, setFullname] = useState("");
  const [profession, setProfession] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [network, setNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  //////////////////////////////////////////////////////////

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "chatImages");

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("https://pressa-backend-end.onrender.com/card", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            img: data.url,
            title: title,
            fullname: fullname,
            profession: profession,
            date: date,
            time: time,
            network: network,
            phoneNumber: phoneNumber,
          }),
        })
          .then((e) => e.json())
          .then((data) => alert(data.msg))
          .catch((error) => console.log(error));
        alert("added card");
        window.location.reload(true);
      });
  };

  //////////////////////////////////////////////////////////

  // const handleData = (e) => {
  //   e.preventDefault();

  //   let data = {
  //     title: title,
  //     fullname: fullname,
  //     profession: profession,
  //     date: date,
  //     time: time,
  //     network: network,
  //     phoneNumber: phoneNumber,
  //   };

  //   fetch("http://localhost:4001/card", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  //   alert("added card");
  //   window.location.href = "http://localhost:5173/home";
  // };

  const handleCancel = (e) => {
    e.preventDefault();

    setTitle("");
    setFullname("");
    setProfession("");
    setDate("");
    setTime("");
    setNetwork("");
    setPhoneNumber("");
    alert("Canceled");
  };

  return (
    <Layouts>
      {
        <form
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleUploadImage}
        >
          <div className="elon">
            <div className="elon_inner">
              <div className="elon_top_box-one">
                <img
                  src={HomeImg}
                  alt="home"
                  className="elon_top_img"
                  width={18}
                  height={20}
                />
                <p className="elon_top_p">E’lon berish</p>
              </div>
              <div className="elon_top">
                <h2 className="elon_date_paragraph">
                  Vaqt va yo’nalishni tanlang
                </h2>
                <p className="elon_date_p">O’tkaziladigan sanani kiriting</p>
                <div className="elon_date__top_box">
                  <input
                    type="date"
                    style={{ color: "black" }}
                    className="elon_date_input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  <input
                    type="time"
                    style={{ padding: "16px" }}
                    className="elon_date_input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
                <div className="elon_date__middle_box">
                  <div className="elon_date__middle_box_mini">
                    <p className="elon_date_middle_select_p">
                      Yo’nalishni belgilang
                    </p>
                    <select
                      name=""
                      id="date"
                      style={{ marginRight: "30px" }}
                      className="elon_date_middle_select"
                    >
                      <option value="" className="elon_date_middle_option">
                        Information Technologies
                      </option>
                    </select>
                  </div>
                  <div className="elon_date__middle_box_mini">
                    <p className="elon_date_middle_select_p">Ichki yo’nalish</p>
                    <select
                      name=""
                      id="date"
                      className="elon_date_middle_select"
                    >
                      <option value="" className="elon_date_middle_option">
                        Java developer
                      </option>
                      <option value="" className="elon_date_middle_option">
                        JS developer
                      </option>
                      <option value="" className="elon_date_middle_option">
                        PY developer
                      </option>
                      <option value="" className="elon_date_middle_option">
                        TS developer
                      </option>
                      <option value="" className="elon_date_middle_option">
                        SMM maneger
                      </option>
                    </select>
                  </div>
                </div>
                <div className="elon_date__bottom_box">
                  <div className="elon_date__bottom_box_left">
                    <p className="elon_date_bottom_select_p">Tadbir turi</p>
                    <div className="elon_date__bottom_box_mini_inner">
                      {/* <button className="elon_date__bottom_box_mini_btn">Online</button> */}
                      <input
                        type="text"
                        className="elon_date__bottom_box_mini_btn"
                        placeholder="Online | Offline"
                        value={network}
                        onChange={(e) => setNetwork(e.target.value)}
                        required
                      />
                      {/* <button className="elon_date__bottom_box_mini_btn"  style={{marginLeft: "20px"}}>Offline</button> */}
                    </div>
                  </div>
                  <div className="elon_date__bottom_box_right">
                    <p className="elon_date_bottom_select_p">Link kiriting</p>
                    <input
                      style={{ color: "#0085FF" }}
                      className="elon_date__bottom_box_mini_btn"
                      placeholder="https://www.youtube.com/liver24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    required
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
                    placeholder="90 *** ** **"
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
                    placeholder="Muhammadali Shuhratjonov"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
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
                    placeholder="90 *** ** **"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="elon_bottom">
            <p className="elon_bottom-p">Post</p>
            <h2 className="elon_bottom_paragraph">Mavzuni sarlavhasi</h2>
            <div className="elon_bottom_box">
              <label htmlFor="elon_bottom" className="elon_bottom_label">
                Description
              </label>
              <input
                type="text"
                id="elon_bottom"
                placeholder="Description"
                className="elon_bottom_input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="elon_btns_box">
              <p className="elon_btn_p">Rasm yuklash</p>
              <div className="elon_btns_mini">
                <input
                  type="file"
                  className="elon_btns_one"
                  placeholder="upload img"
                  // value={selectedFile}
                  // onChange={(e) => setSelectedFile(e.target.files[0])}
                  // onChange={(e) => handleFileInputChange(e)}
                  accept=".txt, .jfif, .jpeg, .png"
                  onChange={(e) => handleFileInputChange(e)}
                />
              </div>
              <p className="elon_btns_bottom_p">
                Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
              </p>
            </div>
            <div className="elon_textarea_box">
              <p className="elon_textarea_p" placeholder="Mavzu matni">
                Mavzu matni
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="elon_textarea"
              ></textarea>
            </div>

            <div className="elon_send_box">
              <button
                className="elon_send_btn"
                onClick={handleCancel}
                type="button"
              >
                Bekor qilish
              </button>
              <button className="elon_send_btn" type="submit">
                E’lonni yuborish
              </button>
            </div>
          </div>
        </form>
      }
    </Layouts>
  );
};
