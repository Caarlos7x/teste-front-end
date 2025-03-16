import React from "react";
import "./PartnerBanner.scss";
import partnerBanner from "../../assets/images/partnerBanner.png";

const PartnerBanner: React.FC = () => {

  return (
    <div className="partner-banner">
      <div className="partner-banner__column">
        <img src={partnerBanner} alt="Imagem de computadores Apple" />
        <div className="partner-banner__overlay">
          <h2 className="partner-banner__title">Parceiros</h2>
          <p className="partner-banner__description">Lorem ipsum dolor sit <br /> amet, consectetur</p>
          <button className="partner-banner__button">CONFIRA</button>
        </div>
      </div>
      <div className="partner-banner__column">
        <img src={partnerBanner} alt="Imagem de computadores Apple" />
        <div className="partner-banner__overlay">
          <h2 className="partner-banner__title">Parceiros</h2>
          <p className="partner-banner__description">Lorem ipsum dolor sit <br /> amet, consectetur</p>
          <button className="partner-banner__button">CONFIRA</button>
        </div>
      </div>
    </div>
  );
}

export default PartnerBanner;