//index.jsxと兼任

import "../App.css";
import Layout from "../components/Layout/Layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp, Home } from "../Templates/index";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<h1> Page not Found!</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home:id" element={<Home />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
