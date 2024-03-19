import React from "react";
import Main from "./containers/Main/Main";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Details from "./containers/Details/Details";
import SearchPage from "./containers/SearchPage/SearchPage";
import Random from "./containers/Random/Random";
import Alphabit from "./containers/Alphabit/Alphabit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/searchPage" element={<SearchPage />} />
      <Route path={`/searchPage/details/:id`} element={<Details />} />
      <Route path={`/randomCoctail/:id`} element={<Random />} />
      <Route path={`/alphabit/:id`} element={<Alphabit />} />
    </Routes>
  );
};

export default App;
