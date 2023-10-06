import React, { useState } from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data';
import CardType from '../card-type/card-type';
import PropTypes from 'prop-types';

function BurgerIngredients() {
  const [current, setCurrent] = useState('one');
  const bun = data.filter(item => item.type === 'bun');
  const main = data.filter(item => item.type === 'main');
  const sauce = data.filter(item => item.type === 'sauce');

  const handleTabClick = (value) => {
    setCurrent(value);
  };

  return (
    <div>
      <h1 className={`mb-5 mt-10 text text_type_main-large ${burgerIngredientsStyles.title}`}>Соберите бургер</h1>
      <div className={burgerIngredientsStyles.menu}>
        <Tab value="one" active={current === 'one'} onClick={() => handleTabClick('one')}>Булки</Tab>
        <Tab value="two" active={current === 'two'} onClick={() => handleTabClick('two')}>Соусы</Tab>
        <Tab value="three" active={current === 'three'} onClick={() => handleTabClick('three')}>Начинки</Tab>
      </div>
      <div className={`custom-scroll ${burgerIngredientsStyles.container}`}>
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
      _id: PropTypes.string,
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
};

export default BurgerIngredients;