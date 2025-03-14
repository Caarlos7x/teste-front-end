import React from 'react';
import ReactModal from 'react-modal';

interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <button onClick={onClose} className="close-btn">X</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Preço:</strong> {product.price}</p>
    </ReactModal>
  );
};

export default ProductModal;