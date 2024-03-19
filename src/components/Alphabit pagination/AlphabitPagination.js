import React from "react";
import { letters } from "../../constants";
import s from "./AlphabitPagination.module.scss";
import { useNavigate } from "react-router-dom";

const AlphabitPagination = ({ id }) => {
  const navigate = useNavigate();
  const render = letters.map((el, index) => {
    return (
      <div
        className={id === el ? s.letter__active : s.letter__wrap}
        onClick={() => navigate("/alphabit/" + el)}
      >
        <p key={index} className={s.letters}>
          {el}
        </p>
      </div>
    );
  });
  return <div className={s.pagination}>{render}</div>;
};

export default AlphabitPagination;
