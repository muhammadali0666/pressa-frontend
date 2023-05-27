import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarHeader } from "../../components/SidebarHeader";
import { AdminNavbar } from "../../components/adminNavbar";
import { Notification } from "../../components/Notification";
import "./admin.css";

export const Admin = ({ search, setSearch }) => {
  return (
    <div className="container">
      <div className="admin_box" style={{ display: "flex" }}>
        <Sidebar />
        <div className="admin_box_inner">
          <SidebarHeader setSearch={setSearch}/>
          <AdminNavbar />
          <p
            className="admin_p"
            style={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineLeight: "13px",
              color: "#193951",
              marginTop: "29px",
            }}
          >
            Eng so’ngi xabarnomalar
          </p>
          <Notification search={search}/>
        </div>
      </div>
    </div>
  );
};
