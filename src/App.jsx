import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Aboutpage from "./Pages/About/AboutPage";
import DepartmentPage from "./Pages/Department/page";
import HomePage from "./Component/Home/page";
import CalenderPage from "./Pages/Calender/page";
import GetInfo from "./Component/GetInfo/GetInfo";
import Footer from "./Component/Footer/Footer";
import FooterBottom from "./Component/Footer/FooterBottom";
import HeaderPages from "./Pages/HeaderPages/HeaderPages";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPages />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutpage" element={<Aboutpage />} />
          <Route path="departmentpage" element={<DepartmentPage />} />
          <Route path="calenderpage" element={<CalenderPage />} />
        </Routes>
        <GetInfo />
        <Footer />
        <FooterBottom />
      </BrowserRouter>
    </>
  );
}
export default App;
