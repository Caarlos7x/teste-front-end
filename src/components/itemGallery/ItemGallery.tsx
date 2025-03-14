import React, { useState, useRef } from "react";
import previousBtn from "../../assets/images/previousBtn.png";
import nextBtn from "../../assets/images/nextBtn.png";
import ProductModal from "../modal/ProductModal";
import "./ItemGallery.scss";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 11 Pro Max Branco",
    price: 15000,
    oldPrice: 16000,
    description: "Descrição do produto"
  },
  {
    id: 2,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 13 Mini",
    price: 9000,
    description: "Descrição do produto"
  },
  {
    id: 3,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 11 Pro Max Branco",
    price: 14990,
    oldPrice: 15500,
    description: "Descrição do produto"
  },
  {
    id: 4,
    image: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    title: "iPhone 13 Mini",
    price: 12000,
    description: "Descrição do produto"
  },
];

const categories = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"];

const ProductCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("CELULAR");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right"): void => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.offsetWidth * 0.8;
    const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;

    setScrollPosition(newPosition);
    containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="product-carousel">
      <h1 className="product-carousel__title">Produtos relacionados</h1>

      <nav className="product-carousel__categories" aria-label="Categorias de produtos">
        <ul>
          {categories.map((category, index) => (
            <li
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`product-carousel__category ${activeCategory === category || index === 0 ? 'active' : ''}`}
              aria-label={`Selecionar categoria ${category}`}
              tabIndex={0}
            >
              <button
                className="category-button"
                onClick={() => setActiveCategory(category)}
                aria-label={`Selecionar categoria ${category}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="product-carousel__carousel">
        <button
          onClick={() => handleScroll("left")}
          className="product-carousel__scroll-button left"
          aria-label="Anterior"
        >
          <img src={previousBtn} alt="Ícone de botão para rolar para a esquerda" />
        </button>

        <div ref={containerRef} className="product-carousel__scroll-container">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => openModal(product)}
            >
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

        <button
          onClick={() => handleScroll("right")}
          className="product-carousel__scroll-button right"
          aria-label="Próximo"
        >
          <img src={nextBtn} alt="Ícone de botão para rolar para a direita" />
        </button>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productImage={selectedProduct?.image || ""}
        productTitle={selectedProduct?.title || ""}
        productPrice={`R$ ${selectedProduct?.price || 0}`}
        productDescription={selectedProduct?.description || ""}
      />
    </section>
  );
};

export default ProductCarousel;