import React from "react";
import FoodIcon from "../Icons/food-logo.svg";


const Header = () => {
    return (
      <div className="header">
        <img className="img" src={FoodIcon} alt="Food-Logo"></img>
        <ul className="nav">
          <li className="nav-list"> HOME </li>
          <li className="nav-list"> ABOUT US </li>
          <li className="nav-list"> CONTACT US </li>
          <li className="nav-list"> CART </li>
        </ul>
      </div>
    );
  };
  export default Header;