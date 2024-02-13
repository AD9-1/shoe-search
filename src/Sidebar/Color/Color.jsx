import React from "react";
import Input from "../../components/Input";
import "./Color.scss";
const Color = ({ handleRadio }) => {
  return (
    <div className="sidebar-container color">
      <h2 className="sidebar-title ">Color</h2>
      <div className="sidebar-container__label">
        <section className="sidebar-label">
          <input type="radio" name="test1" value="" onChange={handleRadio} />
          <p className="checkmark all"></p>All
        </section>
        <Input
          handleRadio={handleRadio}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <Input
          handleRadio={handleRadio}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleRadio={handleRadio}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleRadio={handleRadio}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <section className="sidebar-label">
          <input type="radio" name="test1" value="white" />
          <span className="checkmark white"></span><p>White</p>
        </section>
      </div>
    </div>
  );
};

export default Color;
