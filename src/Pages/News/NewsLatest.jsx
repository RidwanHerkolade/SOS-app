import React, { useState } from "react";
import "./NewsLatest.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

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
    id: 4,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Students were on a trip Jakarta, Indonesia",
    img: "./placeholder2.png",

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 5,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Jobs, career presentation to Coincide with Conference",
    img: "./placeholder1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 6,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "JFall Sports Practices,  Meeting in December",
    img: "./placeholder2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 7,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Jobs, career presentation to Coincide with Conference",
    img: "./placeholder1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 8,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Students were on a trip Jakarta, Indonesia",
    img: "./placeholder2.png",

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  },
  {
    id: 9,
    date: "By Admin, on Nov 23th, 2020 | 1 days ago",
    title: "Jobs, career presentation to Coincide with Conference",
    img: "./placeholder1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...",
  }
];

const NewsLatest = () => {
  // Use the useState hook inside the function component
  const [currentPage, setCurrentPage] = useState(0);
  const itemPage = 6;
  const totalPage = Math.ceil(newsData.length / itemPage);

  const itemDisplay = newsData.slice(
    currentPage * itemPage,
    (currentPage + 1) * itemPage
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

  return (
    <motion.div
      className="latest__divs"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="latest__news">
        {/* <div className="newss__head">
        <div className="newsss__head"> */}
        <h1>Latest News</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        {/* </div> */}
        {/* <div className="newslatest__btn">
            <div className="newss__btn">All </div>
            <div className="newss__btn">Our Campus</div>
            <div className="newss__btn">Others</div>
            <div className="newss__btn">Education</div>
        </div> */}
        {/* </div> */}
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
            {/* </button> */}
            {/* <button > */}
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
          {/* <div className="readmore__btn">Read more</div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLatest;
