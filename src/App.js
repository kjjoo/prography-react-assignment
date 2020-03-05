import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";


import "./styles.css";
import Header from "./components/header/header";
import Movie from "./components/movie/movie";
import Todo from "./components/todo/todo";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
