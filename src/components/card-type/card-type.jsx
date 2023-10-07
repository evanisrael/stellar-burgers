import React from 'react';
import { ingredientPropType } from '../../utils/prop-types';
import PropTypes from 'prop-types';
import Card from '../card/card';
import cardTypeStyles from './card-type.module.css';

function CardType({ data, title, onItemClick }) {
  return (
    <section>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={cardTypeStyles.list}>
        {data.map((item) => (
          <li key={item._id} onClick={() => onItemClick(item)}>
            <Card cardContent={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

CardType.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  title: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default CardType;
