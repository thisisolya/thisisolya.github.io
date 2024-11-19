import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/home-page/index";
import Legal from "./containers/legal";
import Error from "./containers/error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<HomePage />} />
        <Route path="legal" element={<Legal />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
