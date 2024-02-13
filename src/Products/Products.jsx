import React from "react";

import "./Products.scss";
const Products = ({result}) => {
  return (
    <section className="card-container">
     {result}
    </section>
  );
};

export default Products;
