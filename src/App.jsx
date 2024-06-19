/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { data } from "./data.js";
import ProductDetail from "./components/ProductDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data} />} />
        </Route>
        <Route path="/:id" element={<Layout />}>
          <Route index element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
