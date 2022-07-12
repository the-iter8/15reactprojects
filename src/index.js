import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Tours from "./Components/Tours_src/Tours";
import Restaurant from "./Components/Restaurant_src/Restaurant";
import Birthday from "./Components/Birthday_src/Birthday";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Everything in the app should be under the Browser Router. hence placed Backbtn under this*/}

      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/tours" element={<Tours />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
        <Route exact path="/birthday" element={<Birthday />} />
        <Route exact path="*" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
