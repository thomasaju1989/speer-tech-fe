import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.js";
import Feed from "./Feed.js";
import Detail from "./Detail.js";
import Archive from "./Archive.js";
import NoPage from "./NoPage.js";
import Layout from "./Layout";

const App = () => {

  return (
    <div className="container">
      <Header />
      <div className="container-view">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="details/:id" element={<Detail />} />
          <Route path="archive" element={<Archive />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
