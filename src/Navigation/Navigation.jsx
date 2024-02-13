import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Navigation.scss";
const Navigation = ({handleSearch,query}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="nav-container__input"
          placeholder="Enter your search item"
          value={query} onChange={handleSearch}
        />
      </div>
      <div className="nav-container__profile">
        <FiHeart className="nav-icons" />
        <AiOutlineShoppingCart className="nav-icons" />
        <AiOutlineUserAdd className="nav-icons" />
      </div>
    </nav>
  );
};

export default Navigation;
