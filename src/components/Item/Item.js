import React from "react";
import s from "./Item.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Item = ({ item, func }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="col">
      <div
        className={s.box}
        onDoubleClick={
          func ||
          (() => navigate(`${location.pathname}/details/` + item.idDrink))
        }
        key={item.idDrink}
      >
        <h4>{item.strDrink}</h4>
        <LazyLoadImage alt="cocktails" effect="blur" src={item.strDrinkThumb} />
      </div>
    </div>
  );
};

export default Item;
