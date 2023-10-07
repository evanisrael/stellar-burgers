import React from 'react';
import IngredientDetailsStyles from './ingredient-details.module.css';
import { ingredientPropType } from '../../utils/prop-types';

function IngredientDetails({ ingredient }) {
  return (
    <div className={IngredientDetailsStyles.container}>
      <h2 className={`text text_type_main-large ${IngredientDetailsStyles.name}`}>Детали ингредиента</h2>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className={`text text_type_main-medium ${IngredientDetailsStyles.type}`}>{ingredient.name}</p>
      <ul className={IngredientDetailsStyles.box}>
        <li className={IngredientDetailsStyles.item}>
         <p className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.text}`}>Калории,ккал</p>
          <p className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.text}`}>{ingredient.calories}</p>
        </li>
        <li className={IngredientDetailsStyles.item}>
          <p className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.text}`}>Белки, г</p>
          <p className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.text}`}>{ingredient.proteins}</p>
        </li>
        <li className={IngredientDetailsStyles.item}>
          <p className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.text}`}>Жиры, г</p>
          <p className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.text}`}>{ingredient.fat}</p>
        </li>
        <li className={IngredientDetailsStyles.item}>
          <p className={`text text_type_main-default text_color_inactive ${IngredientDetailsStyles.text}`}>Углеводы, г</p>
          <p className={`text text_type_digits-default text_color_inactive ${IngredientDetailsStyles.text}`}>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = ingredientPropType;

export default IngredientDetails;