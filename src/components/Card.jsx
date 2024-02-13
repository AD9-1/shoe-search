import React from "react";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ data }) => {
  return (
    <section className="card">
      <img src={data.img} className="card__img" />
      <div className="card__details">
        <h3 className="card__details__title">{data.title}</h3>
        <div className="card__details__reviews">
          {data.star}
          {data.star}
          {data.star}
          {data.star}
          <span className="total-reviews">{data.reviews}</span>
        </div>
        <div className="card__details__price">
          <div className="price">
            {" "}
            <del>{data.prevPrice}</del> {data.newPrice}
          </div>
          <BsFillBagFill className="bag-icon" />
        </div>
      </div>
    </section>
  );
};

export default Card;
