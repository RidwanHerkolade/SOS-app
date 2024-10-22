import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import HeaderContent from "./HeaderContent";
import HeaderDisplay from "./HeaderDisplay/HeaderDisplay";
import HeaderFooter from "./HeaderFooter/HeaderFooter";
import "./Header.css";
const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["./header1.png", "./classroom.jpg", "./header1.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="header__div"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <header>
        <Nav />
        <HeaderContent />
        <HeaderDisplay />
        <HeaderFooter />
      </header>
    </div>
  );
};
export default Header;
