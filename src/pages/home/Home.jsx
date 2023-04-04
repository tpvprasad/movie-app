import React, { useEffect, useState } from "react";
import "./home.css";
import Movies from "../../components/main/Movies";
import Topbar from "../../components/topbar/Topbar";
import movie from "../../db.json";

export default function Home() {
  const [movies, setMovies] = useState(movie);
  const [genreselected, setGenreSelected] = useState("");
  const [orderselected, setOrderSelected] = useState("");
  // const movieRef = useRef();

  // useEffect(() => {
  //   if (genreselected === "All") setMovies(movie);
  //   else {
  //     const sortedMovies = movie.filter((item) =>
  //       item.genre.includes(genreselected)
  //     );
  //     setMovies(sortedMovies);
  //   }
  // }, [genreselected]);

  useEffect(() => {
    if (genreselected === "All") {
      setMovies(movie);
      // console.log(movies);
      if (orderselected === "Rating") {
        const tempMovies = movies;
        tempMovies.sort((a, b) => {
          let fa = a.rating,
            fb = b.rating;

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });
        setMovies([...tempMovies]);
        console.log(movies);
      } else if (orderselected === "Z-A") {
        // const tempMovies = movies;
        const tempMovies = movies;
        tempMovies.sort((a, b) => {
          let fa = a.title,
            fb = b.title;

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });

        setMovies([...tempMovies]);

        console.log(movies);
      } else if (orderselected === "A-Z") {
        // const tempMovies = movies;
        const tempMovies = movies;
        tempMovies.sort((a, b) => {
          let fa = a.title,
            fb = b.title;

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });

        setMovies([...tempMovies]);
        console.log(movies);
      }
    } else {
      const sortedMovies = movie.filter((item) =>
        item.genre.includes(genreselected)
      );
      setMovies(sortedMovies);
      // console.log(movies);
      if (orderselected === "Rating") {
        const tempMovies = sortedMovies ;
        tempMovies.sort((a, b) => {
          let fa = a.rating,
            fb = b.rating;

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });
        setMovies([...tempMovies]);
        console.log(movies);
      } else if (orderselected === "Z-A") {
        // const tempMovies = movies;
        const tempMovies = sortedMovies ;

        tempMovies.sort((a, b) => {
          let fa = a.title,
            fb = b.title;

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });

        setMovies([...tempMovies]);

        console.log(movies);
      } else if (orderselected === "A-Z") {
        // const tempMovies = movies;
        const tempMovies = sortedMovies ;

        tempMovies.sort((a, b) => {
          let fa = a.title,
            fb = b.title;

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });

        setMovies([...tempMovies]);
        console.log(movies);
      }
    }
  }, [genreselected, orderselected]);

  // useEffect(() => {

  //   console.log(orderselected);
  //   if (orderselected === "Rating") {
  //      movies.sort((a, b) => {
  //       let fa = a.rating,
  //           fb = b.rating;

  //      if (fa < fb) {
  //       return 1;
  //   }
  //      if (fa > fb) {
  //       return -1;
  //   }
  //   return 0;
  //   });
  //   setMovies([...movies]);
  //   console.log(movies);

  //  }
  //    else if (orderselected === "Z-A") {
  //     // const tempMovies = movies;

  //     movies.sort((a, b) => {
  //       let fa = a.title,
  //           fb = b.title;

  //       if (fa < fb) {
  //           return 1;
  //       }
  //       if (fa > fb) {
  //           return -1;
  //       }
  //       return 0;
  //   });

  //   setMovies([...movies]);

  //   console.log(movies);

  //   }
  //    else {

  //     // const tempMovies = movies;

  //     movies.sort((a, b) => {
  //       let fa = a.title,
  //           fb = b.title;

  //       if (fa < fb) {
  //           return -1;
  //       }
  //       if (fa > fb) {
  //           return 1;
  //       }
  //       return 0;
  //   });

  //   setMovies([...movies]);
  //   console.log(movies);

  //   }
  // },[orderselected]);

  // console.log(movies);

  return (
    <div className="homeContainer">
      <Topbar
        genreselected={genreselected}
        setGenreSelected={setGenreSelected}
        orderselected={orderselected}
        setOrderSelected={setOrderSelected}
      />
      <Movies movies={movies} />
    </div>
  );
}
