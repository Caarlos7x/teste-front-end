import React, { ReactNode } from "react";
import '../styles/global.scss';
import CategoryPurchase from "../components/categoryPurchase/CategoryPurchase";
import ItemGallery from "../components/itemGallery/ItemGallery";
import ItemGallery2 from "../components/itemGallery-2/ItemGallery-2";
import PartnerBanner from "../components/partnerBanner/PartnerBanner";
import BrandShop from "../components/brandShop/BrandShop";
import heroBg from "../assets/images/hero-bg.png";
import NewsletterFooter from "../components/newsLetter-Footer/newsletterFooter";

const Home: React.FC = () => {
  return (
    <div className="econverse-home">
      <div className="hero-wrapper">
        <div className="hero-wrapper__hero">
          <img src={heroBg} alt="Banner loja de roupas" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Venha conhecer nossas</h1>
          <h1 className="hero-title">promoções</h1>
          <p className="hero-subtitle">
            <span>50% Off</span> nos produtos
          </p>
          <button className="hero-button">Ver produto</button>
        </div>
      </div>

      <SectionWrapper>
        <CategoryPurchase />
      </SectionWrapper>

      <SectionWrapper>
        <ItemGallery />
      </SectionWrapper>

      <SectionWrapper>
        <PartnerBanner />
      </SectionWrapper>

      <SectionWrapper>
        <ItemGallery2 />
      </SectionWrapper>

      <SectionWrapper>
        <PartnerBanner />
      </SectionWrapper>

      <SectionWrapper>
        <BrandShop />
      </SectionWrapper>

      <SectionWrapper>
        <ItemGallery2 />
      </SectionWrapper>

      <footer>
        <NewsletterFooter />
      </footer>
    </div>
  );
};

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => (
  <div className="section-wrapper">
    {children}
  </div>
);

export default Home;