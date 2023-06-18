import "./admin.css";
import { NavLink } from "react-router-dom";

export const AdminNavbar = () => {
  return (
    <div className="admin_navbar">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/waiting"
      >
        <button className="admin_navbar_btn">Kutilmoqda</button>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/accepted"
      >
        <button className="admin_navbar_btn">Qabul qilingan</button>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/canceled"
      >
        <button className="admin_navbar_btn">Rad etilgan</button>
      </NavLink>
      <div className="admin_navbar_box">
        <label htmlFor="check" className="admin_navbar_label">
          Oxirgilari
        </label>
        <input id="check" type="checkbox" className="admin_navbar_checkbox" />
        <label
          style={{ marginLeft: "50px" }}
          htmlFor="checkbox"
          className="admin_navbar_label"
        >
          Eng so’ngilari
        </label>
        <input
          id="checkbox"
          type="checkbox"
          className="admin_navbar_checkbox"
        />
      </div>
    </div>
  );
};
