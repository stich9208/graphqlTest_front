import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Detail from "./Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Detail />} path="/book/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
