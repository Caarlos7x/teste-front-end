interface ProductCardProps {
  product: {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
  };
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
    </div>
  );
};

export default ProductCard;

// export interface Product {
//     // Corrigido para corresponder ao JSON da API
//   descriptionShort: string;
//   photo: string;
//   price: number;
// }