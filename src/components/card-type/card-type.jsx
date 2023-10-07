import React from 'react';
import cardTypeStyles from './card-type.module.css';
import Card from '../card/card';
import PropTypes from 'prop-types';

function CardType({ data, title }) {
  return (
    <div>
      <h3 className={`text text_type_main-medium`}>{title}</h3>
      <ul className={`ml-4 mt-6 mb-10 ${cardTypeStyles.list}`}>
        {data.map((card) => (
          <Card key={card._id} cardContent={card} />
        ))}
      </ul>
    </div>
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
};

export default CardType;
