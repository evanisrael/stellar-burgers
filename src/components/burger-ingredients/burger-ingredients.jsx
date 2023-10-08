import React, { useState, useEffect } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import CardType from '../card-type/card-type';
import { ingredientPropType } from '../../utils/prop-types';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ModalOverlay from '../modal-overlay/modal-overlay';

function BurgerIngredients({ data, isLoading, error }) {
  const [currentTab, setCurrentTab] = useState('buns');
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const bun = data.filter(item => item.type === 'bun');
  const main = data.filter(item => item.type === 'main');
  const sauce = data.filter(item => item.type === 'sauce');

  const handleTabClick = (value) => {
    setCurrentTab(value);
    scrollToCategory(value);
  };

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const handleCloseModal = () => {
    setSelectedIngredient(null);
  };

  const scrollToCategory = (category) => {
    const categoryRef = document.getElementById(category);
    if (categoryRef) {
      console.log('Scrolling to category:', category);
      categoryRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('Category not found:', category);
    }
  };

  useEffect(() => {
    scrollToCategory(currentTab);
  }, [currentTab]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1 className={`mb-5 mt-10 text text_type_main-large`}>Соберите бургер</h1>
      <div className={styles.menu}>
        <Tab value="buns" active={currentTab === 'buns'} onClick={() => handleTabClick('buns')}>
          Булки
        </Tab>
        <Tab value="sauces" active={currentTab === 'sauces'} onClick={() => handleTabClick('sauces')}>
          Соусы
        </Tab>
        <Tab value="mains" active={currentTab === 'mains'} onClick={() => handleTabClick('mains')}>
          Начинки
        </Tab>
      </div>
      <div className={`custom-scroll ${styles.container}`}>
        <CardType data={bun} title="Булки" onItemClick={handleIngredientClick} id="buns" />
        <CardType data={sauce} title="Соусы" onItemClick={handleIngredientClick} id="sauces" />
        <CardType data={main} title="Начинки" onItemClick={handleIngredientClick} id="mains" />
      </div>
      {selectedIngredient && (
        <ModalOverlay onClose={handleCloseModal}>
          <Modal onClose={handleCloseModal}>
            <IngredientDetails ingredient={selectedIngredient} />
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};

export default BurgerIngredients;
