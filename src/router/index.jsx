import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { BizHaqimizda } from "../pages/Bizhaqimizda";
import { NotFound } from "../components/NotFound";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { ElonBerish } from "../pages/Elon";
import { Admin } from "../pages/Admin";
import { Accepted } from "../pages/Accepted";
import { Canceled } from "../pages/cancelled";
import { SinglePage } from "../pages/SinglePage";
import { useState } from "react";

export const RouteWrapper = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState([]);

  const getToken = localStorage.getItem("token");

  return (
    <Routes>
      {getToken ? (
        <Route path="/home" element={<Home info={info} setInfo={setInfo} />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/biz" element={getToken ? <BizHaqimizda /> : <Login />} />
      <Route path="/login" element={getToken ? <Login /> : <Login />} />
      <Route path="/" element={getToken ? <Register /> : <Login />} />
      <Route path="/elon" element={getToken ? <ElonBerish /> : <Login />} />
      {getToken ? (
        <Route
          path="/admin"
          element={<Admin search={search} setSearch={setSearch} />}
        />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      {getToken ? (
        <Route
          path="/accepted"
          element={<Accepted search={search} setSearch={setSearch} />}
        />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      {getToken ? (
        <Route
          path="/waiting"
          element={<Admin search={search} setSearch={setSearch} />}
        />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      {getToken ? (
        <Route
          path="/canceled"
          element={<Canceled search={search} setSearch={setSearch} />}
        />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/single" element={getToken ? <SinglePage /> : <Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
