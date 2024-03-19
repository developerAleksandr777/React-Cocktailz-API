import React from "react";
import s from "./LabelInput.module.scss";

const LabelInput = ({ inputId, inputRef, handleValue }) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor={inputId}>Focus</label>
      <input ref={inputRef} id={inputId} type="text" onChange={handleValue} />
    </div>
  );
};

export default LabelInput;
