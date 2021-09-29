import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        {/* has 2 more components */}
      </Route>
      <Route path="/movies/:id" children={<Movie />}></Route>{/* make sure it matches */}
      <Route path="*">Error, this is invalid</Route>
    </Switch>
  );
}

export default App;
