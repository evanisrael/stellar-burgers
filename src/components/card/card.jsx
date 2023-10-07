import cardStyles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


function Card({ cardContent }) {
  return (
      <li key={cardContent._id} className={cardStyles.card}>
          <Counter count={1} size="default" />
          <img src={cardContent.image} alt={cardContent.name}></img>
          <div className={`mb-2 ${cardStyles.price}`}>
              <p className={`mr-2 ${cardStyles.count}`}>{cardContent.price}</p>
              <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-small ${cardStyles.description}`}>{cardContent.name}</p>
      </li>
  )
}

Card.propTypes = {
  cardContent: PropTypes.shape({
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
  }),
};

export default Card;