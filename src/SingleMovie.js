import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import { url } from "./Movies";
const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [rate, setRate] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    if (!data.Response) {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setMovie(data); /* object */
      setRate(data.Ratings);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]); /* for safety */
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link className="btn" to="/">
          Back To Movies
        </Link>
      </div>
    );
  }

  return (
    <section className="single-movie">
      <img src={movie.Poster ? movie.Poster : url} alt={movie.Title} />
      <div className="single-movie-info">
        <h2>{movie.Title}</h2>
        <h4>Director: {movie.Director}</h4>
        <h4>Cast: {movie.Actors}</h4>
        <h4>Year of Release: {movie.Year}</h4>
        <p style={{ color: "aqua" }}>Genre: {movie.Genre}</p>
        <p style={{ color: "lightgreen" }}>Story-line: {movie.Plot}</p>
        <p style={{ color: "red" }}>Language: {movie.Language}</p>
        <p style={{ color: "white" }}>Production: {movie.Production}</p>
        <p style={{ color: "white" }}>Runtime: {movie.Runtime}</p>
        <p style={{ color: "orange" }}>Awards: {movie.Awards}</p>
        {rate.map((item, index) => {
          const { Source, Value } = item;
          return (
            <h4 key={index}>
              {" "}
              {`Rating-${index + 1}`}:
              <span style={{ color: "red" }}> Source</span>
              {`: ${Source} `}
              <span> --- </span>
              {`: ${Value} `}
            </h4>
          );
        })}
        <Link className="btn" to="/">
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
