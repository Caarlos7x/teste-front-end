import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

export interface Product {
  id: string;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: string;
  image: string;
  name: string;
  description: string;
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<Product[]>([]);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((res) => {
        console.log("API Response:", res.data); // Para depuração no console
        if (res.data && Array.isArray(res.data.products)) {
          setProducts(res.data.products); // Agora products será um array
        } else {
          console.error("Erro: Estrutura inesperada no JSON", res.data);
          setProducts([]); // Evita erro ao tentar usar .map()
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setProducts([]); // Evita crash na aplicação
      });
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
