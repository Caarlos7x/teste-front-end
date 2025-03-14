import React, { useState, useRef, useEffect } from "react";
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

interface ApiProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ApiResponse {
  success: boolean;
  products: ApiProduct[];
}

const categories = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"];

const ProductCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("CELULAR");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
      const data: ApiResponse = await response.json();
      if (data.success) {
        const fetchedProducts: Product[] = data.products.map((product, index) => ({
          id: index + 1,
          image: product.photo,
          title: product.productName,
          price: product.price,
          description: product.descriptionShort,
        }));
        setProducts(fetchedProducts);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
          {products.map((product) => (
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