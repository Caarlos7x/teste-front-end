import React, { useState, useRef } from "react";
import previousBtn from "../../assets/images/previousBtn.png";
import nextBtn from "../../assets/images/nextBtn.png";
import "./ItemGallery-2.scss";

const mockProducts = [
  {
    id: 1,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 11 Pro Max Branco",
    price: 15000,
    oldPrice: 16000,
  },
  {
    id: 2,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 13 Mini",
    price: 9000,
  },
  {
    id: 3,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 11 Pro Max Branco",
    price: 14990,
    oldPrice: 15500,
  },
  {
    id: 4,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 13 Mini",
    price: 12000,
  },
];


const ProductCarousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right"): void => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.offsetWidth * 0.8;
    const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;

    setScrollPosition(newPosition);
    containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  return (
    <section className="product-carousel">
      <h1 className="product-carousel__title">Produtos relacionados</h1>

      {/* Categorias */}
      <nav className="product-carousel__categories" aria-label="Categorias de produtos">
        <h2>Ver todos</h2>
      </nav>


      {/* Carrossel */}
      <div className="product-carousel__carousel">
        {/* Botão Esquerdo */}
        <button
          onClick={() => handleScroll("left")}
          className="product-carousel__scroll-button left"
          aria-label="Anterior"
        >
          <img src={previousBtn} alt="Ícone de botão para rolar para a esquerda" />
        </button>

        {/* Container de Scroll */}
        <div ref={containerRef} className="product-carousel__scroll-container">
          {mockProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={`Imagem do produto ${product.title}`}
                className="product-card__image"
                loading="lazy"
              />
              <p className="product-card__title">{product.title}</p>
              {product.oldPrice && (
                <p className="product-card__old-price">R$ {product.oldPrice}</p>
              )}
              <p className="product-card__price">R$ {product.price}</p>
              <p className="product-card__installments">
                ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
              </p>
              <p className="product-card__free-shipping">Frete grátis</p>
              <button className="product-card__buy-button">COMPRAR</button>
            </div>
          ))}
        </div>

        {/* Botão Direito */}
        <button
          onClick={() => handleScroll("right")}
          className="product-carousel__scroll-button right"
          aria-label="Próximo"
        >
          <img src={nextBtn} alt="Ícone de botão para rolar para a direita" />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;