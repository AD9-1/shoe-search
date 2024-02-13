import React from "react";
import Input from "../../components/Input";

const Price = ({ handleRadio }) => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Price</h2>
      <div className="sidebar-container__label">
        <section className="sidebar-label">
          <input type="radio" name="test2" value="" onChange={handleRadio} />
          <p className="checkmark"></p>
          All
        </section>
        <Input
          handleRadio={handleRadio}
          value={50}
          title="$0-$50"
          name="test2"
        />
        <Input
          handleRadio={handleRadio}
          value={100}
          title="$51-$100"
          name="test2"
        />
        <Input
          handleRadio={handleRadio}
          value={200}
          title="$101-$200"
          name="test2"
        />
        <Input
          handleRadio={handleRadio}
          value={250}
          title="over $200"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
