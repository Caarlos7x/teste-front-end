import React from "react";
import econverseLogo from "../../assets/images/econverse-logo.png";
import checkIcon from "../../assets/images/checkIcon.png";
import searchIcon from "../../assets/images/searchIcon.png";
import hearthIcon from "../../assets/images/hearthIcon.png";
import userCircle from "../../assets/images/userCircle.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import returnBox from "../../assets/images/returnBox.png";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Primeira Linha */}
      <div className="header-top">
        <div className="center-content">
          <h3 className="h-1">
            <img src={checkIcon} alt="Ícone de Verificação" />
            Compra <span>100% segura</span>
          </h3>
          <h3 className="h-1">
            <img src={checkIcon} alt="Ícone de Verificação" />
            <span>Frete</span> grátis acima de R$ 200
          </h3>
          <h3 className="h-1">
            <img src={checkIcon} alt="Ícone de Verificação" />
            <span>Parcele</span> suas compras
          </h3>
        </div>
      </div>

      <div className="horizon-line" />

      {/* Segunda Linha */}
      <div className="header-middle">
        <img src={econverseLogo} alt="Logo Econverse" className="logo" />
        <div className="search-container">
          <input
            type="text"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <img src={searchIcon} alt="Ícone de Busca" className="search-icon" />
        </div>
        <div className="header-icons-wrapper">
          <nav className="header-icons">
            <a href="/return" className="h-icons" aria-label="Voltar para a página anterior">
              <img src={returnBox} alt="Ícone de retorno" />
            </a>
            <a href="/favorites" className="h-icons" aria-label="Ir para a página de favoritos">
              <img src={hearthIcon} alt="Ícone de coração" />
            </a>
            <a href="/profile" className="h-icons" aria-label="Ver perfil do usuário">
              <img src={userCircle} alt="Ícone de perfil do usuário" />
            </a>
            <a href="/cart" className="h-icons" aria-label="Ir para o carrinho de compras">
              <img src={shoppingCart} alt="Ícone de carrinho de compras" />
            </a>
          </nav>
        </div>
      </div>

      {/* Terceira Linha (Menu) */}
      <nav className="header-bottom">
        <a href="#" className="nav-link">Todas Categorias</a>
        <a href="#" className="nav-link">Supermercado</a>
        <a href="#" className="nav-link">Livros</a>
        <a href="#" className="nav-link">Moda</a>
        <a href="#" className="nav-link">Lançamentos</a>
        <a href="#" className="nav-link isSelected">Ofertas do Dia</a>
        <a href="#" className="nav-link">Assinatura</a>
      </nav>
    </header>
  );
};

export default Header;