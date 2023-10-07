import React from 'react';
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
  ).isRequired,
  title: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default CardType;
