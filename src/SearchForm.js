import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const {
    error: { msg, show },
    query,
    setQuery,
  } = useGlobalContext();

  /* destructure */
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>
        Movie<span style={{ color: "red" }}>Mania</span>.
      </h2>
      <p>Movie Search Spot</p>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {show && <div className="error">{msg}</div>}
    </form>
  );
};

export default SearchForm;
