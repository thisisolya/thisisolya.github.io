import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/homepage";
import Legal from "./containers/legal";
import Error from "./containers/error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="legal" element={<Legal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
