import "./login.css";
import User from "../../assets/img/login_user.png";
import Lock from "../../assets/img/lock.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert(data.msg);
        }
        if (data.token) {
          window.location.href = "/home";
        }
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login_inner">
          <a href="#" className="login_logo">
            <p className="login_p">Pressa</p>
          </a>

          <div className="login_box">
            <h2 className="login_paragraph">Tizimga kirish</h2>
            <form className="login_form" onSubmit={handleSubmit}>
              <div className="login_mini_box">
                <img
                  style={{ marginRight: "-30px" }}
                  src={User}
                  alt="user"
                  className="login_login"
                  width={16}
                  height={16}
                />
                <input
                  type="email"
                  placeholder="login"
                  className="login_input"
                  style={{ marginBottom: "30px", paddingLeft: "40px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login_mini_box">
                <img
                  src={Lock}
                  alt="user"
                  style={{ marginRight: "-30px" }}
                  className="login_login"
                  width={13}
                  height={16}
                />
                <input
                  type="password"
                  placeholder="parol"
                  className="login_input"
                  style={{ paddingLeft: "40px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <NavLink to="/" href="#" className="login_check">
                Parolni unutdingizmi?
              </NavLink>
              <button type="submit" className="login_btn">
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
