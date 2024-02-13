import React from "react";
import Buttons from "../components/Buttons";
import "./Recommended.scss";
export default function Recommended({handleButton}) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons value="" title="All Products" handleButton={handleButton} />
        <Buttons value="Nike" title="Nike" handleButton={handleButton}/>
        <Buttons value="Adidas" title="Adidas" handleButton={handleButton}/>
        <Buttons value="Puma" title="Puma" handleButton={handleButton}/>
        <Buttons value="Vans" title="Vans" handleButton={handleButton}/>
      </div>
    </div>
  );
}
