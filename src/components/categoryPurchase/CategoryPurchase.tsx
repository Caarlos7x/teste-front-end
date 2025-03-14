import React from 'react';
import styles from './CategoryPurchase.module.scss';

import TechIcon from '../../assets/svgs/tech.svg';
import SupermarketIcon from '../../assets/svgs/supermarket.svg';
import DrinksIcon from '../../assets/svgs/drinks.svg';
import ToolsIcon from '../../assets/svgs/tools.svg';
import HealthIcon from '../../assets/svgs/health.svg';
import FitnessIcon from '../../assets/svgs/fitness.svg';
import FashionIcon from '../../assets/svgs/fashion.svg';

const categories = [
  { id: 1, name: 'Tecnologia', Icon: TechIcon },
  { id: 2, name: 'Supermercado', Icon: SupermarketIcon },
  { id: 3, name: 'Bebidas', Icon: DrinksIcon },
  { id: 4, name: 'Ferramentas', Icon: ToolsIcon },
  { id: 5, name: 'Saúde', Icon: HealthIcon },
  { id: 6, name: 'Esporte e Fitness', Icon: FitnessIcon },
  { id: 7, name: 'Moda', Icon: FashionIcon },
];

const CategoryPurchase: React.FC = () => {
  return (
    <div className={styles['category-purchase']}>
      {categories.map((category) => (
        <div className={styles['purchase-card-wrapper']} key={category.id}>
          <div className={styles['purchase-card']}>
            <div className={styles['purchase-icon']}>
              <img src={category.Icon} alt={category.name} width="64" height="64" />
            </div>
          </div>
          <div className={styles['purchase-title']}>
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPurchase;