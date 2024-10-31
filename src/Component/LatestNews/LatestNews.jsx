import React, { useState } from "react";
import "./LatestNews.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { useNavigate } from "react-router-dom";

const newsData = [
  {
    id: 1,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Students were on a trip Jakarta, Indonesia",
    img: "./placeholder.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 2,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Jobs, career presentation to Coincide with Conference",
    img: "./placeholder1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 3,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "JFall Sports Practices,  Meeting in December",
    img: "./placeholder.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 1,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Students were on a trip Jakarta, Indonesia",
    img: "./placeholder2.png",

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 2,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Jobs, career presentation to Coincide with Conference",
    img: "./placeholder1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 3,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "JFall Sports Practices,  Meeting in December",
    img: "./placeholder2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
];

const LatestNews = () => {
  // Use the useState hook inside the function component
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 3;
  const totalPage = Math.ceil(newsData.length / itemPerPage);

  const itemDisplay = newsData.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );

  const handleNextPages = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPages = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const navigate = useNavigate()
  const handleNewsReadMore =() => {
    navigate("./news")
  }

  return (
    <div
      className="latest__divs"
      // variants={fadeIn("up", 0.4)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.4 }}
    >
      <motion.div className="latest__news" variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}>
        <h1>Latest News</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="latestnews__grid">
          {itemDisplay.map((news) => (
            <motion.div
              whileHover={{ scale: [null, 1.1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <div key={news.id} className="new__grids">
                <div className="new__img">
                  <img src={news.img} alt={news.title} />
                </div>
                <div className="new__div">
                  <h1>{news.title}</h1>
                  <small>{news.date}</small>
                  <div className="news__content">{news.content}</div>
                  <div className="read">Read more</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="read__more">
          <div className="readmore__arrow">
            {/* <button> */}
            <img
              src="layer1.png"
              alt="Previous"
              onClick={handlePrevPages}
              style={{
                cursor: currentPage === 0 ? "not-allowed" : "pointer",
                opacity: currentPage === 0 ? 0.5 : 1,
              }}
            />
            <img
              src="layer2.png"
              alt="Next"
              onClick={handleNextPages}
              style={{
                cursor:
                  currentPage === totalPage - 1 ? "not-allowed" : "pointer",
                opacity: currentPage === totalPage - 1 ? 0.5 : 1,
              }}
            />
            {/* </button> */}
          </div>
          <div className="readmore__btn" onClick={handleNewsReadMore}>Read more</div>
        </div>
      </motion.div>
    </div>
  );
};

export default LatestNews;
