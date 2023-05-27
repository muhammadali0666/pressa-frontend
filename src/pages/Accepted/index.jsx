import "./accepted.css"

import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarHeader } from "../../components/SidebarHeader";
import { AdminNavbar } from "../../components/adminNavbar";
import { QabulQilingan } from "../../components/QabulQilingan";

export const Accepted = ({search, setSearch}) => {
  return (
    <div className="container">
      <div className="admin_box" style={{ display: "flex" }}>
        <Sidebar />
        <div className="admin_box_inner" style={{ marginLeft: "47px" }}>
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
              marginTop: "29px"
            }}
          >
            Eng so’ngi xabarnomalar
          </p>
          <QabulQilingan search={search}/>
        </div>
      </div>
    </div>
  );
};
