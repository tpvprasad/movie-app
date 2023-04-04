import "./movies.css";
import { Link } from "react-router-dom";

export default function Movies({movies}) {
  return (
    <div className="movieData">
      {movies.map((data) => {
        return (
            <ul className="listMap" key={data.id}>
              <li>
              <Link key={data.rank} to={`/${data.imdbid}`}>
                <img src={data.image} alt="" className="movieImage"/>
              </Link>
              </li>
              <b><li className="movieText">{data.title} ({data.year})</li></b>
              <li className="movieRating">Rating: {data.rating}</li>
            </ul>
        );
      })}
    </div>
  );
}
