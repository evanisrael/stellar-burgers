import React, { useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import CardType from '../card-type/card-type';
import PropTypes from 'prop-types';

function BurgerIngredients({ data, isLoading, error }) {
  const [current, setCurrent] = useState('buns');
  const bun = data.filter(item => item.type === 'bun');
  const main = data.filter(item => item.type === 'main');
  const sauce = data.filter(item => item.type === 'sauce');

  const handleTabClick = (value) => {
    setCurrent(value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1 className={`mb-5 mt-10 text text_type_main-large ${styles.title}`}>Соберите бургер</h1>
      <div className={styles.menu}>
        <Tab value="buns" active={current === 'buns'} onClick={() => handleTabClick('buns')}>Булки</Tab>
        <Tab value="sauses" active={current === 'sauses'} onClick={() => handleTabClick('sauses')}>Соусы</Tab>
        <Tab value="mains" active={current === 'mains'} onClick={() => handleTabClick('mains')}>Начинки</Tab>
      </div>
      <div className={`custom-scroll ${styles.container}`}>
        <CardType data={bun} title="Булки" />
        <CardType data={sauce} title="Соусы" />
        <CardType data={main} title="Начинки" />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};

export default BurgerIngredients;
