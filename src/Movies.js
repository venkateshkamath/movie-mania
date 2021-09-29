import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
export const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  console.log(movies);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const {
          Title: title,
          imdbID: id,
          Poster: poster,
          Type: type,
          Year: year,
        } = movie;
        return (
          <Link to={`/movies/${id}`} className="movie" key={id}>
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>Year: {year}</p>
                <p>Type: {type}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
