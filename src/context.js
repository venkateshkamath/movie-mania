import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=7d14152a`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //useState
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("avengers");

  //fetch the movies

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      if (data.Response === "True") {
        setError({ show: false, msg: "" });

        setMovies(data.Search);
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);
  return (
    <AppContext.Provider
      value={{ isLoading, query, movies, error, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
