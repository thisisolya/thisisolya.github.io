import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/home-page/index";
import Legal from "./containers/legal";
import PageNotFound from "./containers/page-not-found";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/"
          element={<HomePage />}
          errorElement={<PageNotFound />}
        />
        <Route
          path="legal"
          element={<Legal />}
          errorElement={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
