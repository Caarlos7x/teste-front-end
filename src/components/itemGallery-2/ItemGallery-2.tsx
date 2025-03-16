import React, { useState, useRef, useEffect } from "react";
import previousBtn from "../../assets/images/previousBtn.png";
import nextBtn from "../../assets/images/nextBtn.png";
import ProductModal from "../modal/ProductModal";
import "./ItemGallery-2.scss";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  formattedPrice: string;
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

const ProductCarousel: React.FC = () => {
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
          formattedPrice: product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
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
        <h2>Ver todos</h2>
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
          {products.slice(0, 4).map((product) => {
            const installmentPrice = (product.price / 2).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });

            return (
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
                <p className="product-card__price">{product.formattedPrice}</p>
                <p className="product-card__installments">ou 2x de {installmentPrice} sem juros</p>
                <p className="product-card__free-shipping">Frete grátis</p>
                <button className="product-card__buy-button">COMPRAR</button>
              </div>
            );
          })}
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
        productPrice={selectedProduct?.formattedPrice || "R$ 0,00"}
        productDescription={selectedProduct?.description || ""}
      />
    </section>
  );
};

export default ProductCarousel;
