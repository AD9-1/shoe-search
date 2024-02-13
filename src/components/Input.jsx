import React from "react";
import "../Sidebar/Category/Category.scss";
const Input = ({ value, name, title, handleRadio, color }) => {
  return (
    <section className="sidebar-label">
      <input type="radio" value={value} name={name} onChange={handleRadio} />
      <span className="checkmark" style={{ backgroundColor:color}}></span>
      <p className="title">{title}</p>
    </section>
  );
};

export default Input;
