import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useRef } from "react";

import "./details.css";
import movie from "../../db.json";

export default function Details() {
  const params = useParams();

  const movieSlug = params.movieSlug;

  const movieDet = movie.filter(function (item) {
    return item.imdbid === movieSlug;
  })[0];
  //   console.log(movieDet);

  //   console.log(movieSlug);
  function PlayerComponent() {
    const playerRef = useRef(null);
    return (
      <div>
        <ReactPlayer ref={playerRef} url={movieDet.trailer} controls={true} />
      </div>
    );
  }
  return (
    <div className="movieDetails">
    <ul className="dataMap">
      <li className="media">
        <PlayerComponent  />
      </li>
      <li>
        <b style={{color: "goldenrod"}}>Rank: </b>
        {movieDet.rank}
      </li>
      <li>
        <b style={{color: "goldenrod"}}>Genre: </b>
        {movieDet.genre.join(",")}
      </li>
      <li>
        <b style={{color: "goldenrod"}}>Directed by: </b>
        {movieDet.director}
      </li>
      <li>
        <b style={{color: "goldenrod"}}>Written by: </b>
        {movieDet.writers.join(",")}
      </li>
      <li>
        <b style={{color: "goldenrod"}}>Description: </b>
        {movieDet.description}
      </li>
    </ul>
    </div>
  );
}
