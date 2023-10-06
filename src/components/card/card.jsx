import cardStyles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

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

export default Card;