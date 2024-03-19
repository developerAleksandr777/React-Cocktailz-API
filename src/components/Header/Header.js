import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div id={s.header}>
      <div className="container">
        <div className={s.header__wrap}>
          <h1>{title}</h1>
          <div className={s.nav}>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/searchPage">Search page</Link>
              <Link to="/randomCoctail/random">Random coctail</Link>
              <Link to="/alphabit/A">Alphabit</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
