
import React from "react";
import "./BrandShop.scss";
import circleBrand from "../../assets/images/econverse-logo.png";

const BrandShop: React.FC = () => {

  return (
    <div className="brand-shop">
      <div className="brand-shop__column">
        <div className="brand-shop__title">
          <h1>Navegue por marcas</h1>
        </div>
      </div>

      <div className="brand-shop__column">
        <div className="brand-shop__circleBrand">
          <div className="brand-shop__circle">
            <img src={circleBrand} alt="" />
          </div>
          <div className="brand-shop__circle">
            <img src={circleBrand} alt="" />
          </div>
          <div className="brand-shop__circle">
            <img src={circleBrand} alt="" />
          </div>
          <div className="brand-shop__circle">
            <img src={circleBrand} alt="" />
          </div>
          <div className="brand-shop__circle">
            <img src={circleBrand} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default BrandShop;