import React, { useState } from "react";
import "./topbar.css";
// import { Link } from "react-router-dom";

const genre = [
  // "All",
  "Action",
  "Adventure",
  "Biography",
  "Comedy",
  "Crime",
  "Drama",
  "History",
  "Romance",
  "Thriller",
];
const order = ["Rating", "A-Z", "Z-A"];

export default function Topbar({
  genreselected,
  setGenreSelected,
  orderselected,
  setOrderSelected,
}) {
  const [genretext, setGenreText] = useState("Genre");
  const [ordertext, setOrderText] = useState("Category");

  return (
    <div className="topbar">
      <div className="topbarLeft">
    
        <a href="/"><img src="/imdblogo.png" alt="" className="icon"/></a>
    
      </div>
      <div className="topbarCenter">
        <p>Top 100 best rated movies on imdb</p>
      </div>
      <div className="topbarRight">
        <div className="dropdown">
          <button className="dropbtn">{ordertext}</button>
          <div className="dropdownOptions">
            {order.map((item) => (
              <p
                onClick={() => {
                  setOrderText(item);
                  setOrderSelected(item);
                }}
                className="genreOption"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">{genretext}</button>
          <div className="dropdownOptions">
            {genre.map((item) => (
              <p
                onClick={() => {
                  if (item === "All") setGenreText("Genre");
                  else {
                    setGenreText(item);
                  }
                  setGenreSelected(item);
                }}
                className="genreOption"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
