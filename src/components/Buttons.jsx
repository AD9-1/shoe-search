import React from "react";

const Buttons = ({handleButton,title,value}) => {
  return <button className="btns" onClick={handleButton} value={value}>{title}</button>;
};

export default Buttons;
