import React from "react";
import Input from "../../components/Input";
import "./Category.scss";
const Category = ({handleRadio}) => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-container__label">
        <section className="sidebar-label">
          <input type="radio"  onChange={handleRadio} name="test" value="" />
          <p className="checkmark"></p>All
        </section>
        <Input handleRadio={handleRadio} value="sneakers" title="Sneakers" name="test" />
        <Input handleRadio={handleRadio} value="flats" title="Flats" name="test" />
        <Input handleRadio={handleRadio} value="sandals" title="Sandals" name="test" />
        <Input handleRadio={handleRadio} value="heels" title="Heels" name="test" />
      </div>
    </div>
  );
};

export default Category;
