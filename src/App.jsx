import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Aboutpage from "./Pages/About/AboutPage";
import DepartmentPage from "./Pages/Department/DeptPage";
import HomePage from "./Component/Home/page";
import CalenderPage from "./Pages/Calender/CalenderPage";
import GetInfo from "./Component/GetInfo/GetInfo";
import Footer from "./Component/Footer/Footer";
import FooterBottom from "./Component/Footer/FooterBottom";
import { Contact } from "./Pages/Contact/Contact";
import HeaderPages from "./Pages/HeaderPages/HeaderPages";
import News from "./Pages/News/page";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPages />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutpage" element={<Aboutpage />} />
          <Route path="news" element={<News />} />
          <Route path="admissionpage" element={<DepartmentPage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <GetInfo />
        <Footer />
        <FooterBottom />
      </BrowserRouter>
    </>
  );
}
export default App;
