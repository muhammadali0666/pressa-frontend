import "./register.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleData = (e) => {
    e.preventDefault()

    let data = {
      username: username,
      email: email,
      password: password
    }

    fetch("https://pressa-backend-end.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error));

    window.location.href = "/login";
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login_inner">
          <a href="#" className="login_logo">
            <p className="login_p">Pressa</p>
          </a>

          <div className="login_box">
            <h2 className="login_paragraph">Ro'yxatdan o'tish</h2>
            <form className="login_form" onSubmit={handleData}>
              <input
                type="text"
                placeholder="Username"
                className="login_input login_input_extra"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="login"
                className="login_input login_input_extra"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="parol"
                className="login_input login_input_extra"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <NavLink to='/login' className="login_check">
                login
              </NavLink>
              <button className="login_btn" type="submit">Kirish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
