import React from 'react';
import './ProductModal.scss';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productImage: string;
  productTitle: string;
  productPrice: string;
  productDescription: string;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, productImage, productTitle, productPrice, productDescription }) => {
  if (!isOpen) return null;

  return (
    <div className="product-modal">
      <div className="product-modal__content">
        <button className="product-modal__close" onClick={onClose}>
          X
        </button>
        <div className="product-modal__image">
          <img src={productImage} alt={productTitle} />
        </div>
        <div className="product-modal__details">
          <h2 className="product-modal__title">{productTitle}</h2>
          <p className="product-modal__price">{productPrice}</p>
          <p className="product-modal__description">{productDescription}</p>
          <a href="#" className="product-modal__link">
            Veja mais detalhes do produto
          </a>
          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button>-</button>
              <span>01</span>
              <button>+</button>
            </div>
            <button className="product-modal__buy">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;