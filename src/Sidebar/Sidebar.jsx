import React from "react";
import "./Sidebar.scss";
import Category from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";
const Sidebar = ({handleRadioCategory,handleRadioColor,handleRadioPrice}) => {
  return (
    <div>
      {" "}
      <section className="sidebar">
        <Category handleRadio={handleRadioCategory}/>
        <Color handleRadio={handleRadioColor}/>
        <Price handleRadio={handleRadioPrice}/>
      </section>
    </div>
  );
};

export default Sidebar;
