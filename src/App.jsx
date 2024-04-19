/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Compiler from "./Compiler.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={ <Compiler />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
};

export default App;
