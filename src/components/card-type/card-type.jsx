import cardTypeStyles from './card-type.module.css';
import Card from '../card/card';

function CardType({ data, title }) {
  return (
      <div>
          <h3 className={`text text_type_main-medium`}>{title}</h3>
          <ul className={`ml-4 mt-6 mb-10 ${cardTypeStyles.list}`}>
              {data.map((card) => {
                  return (
                      <Card key={card._id} cardContent={card} />
                  )
              })}
          </ul>
      </div>
  )
}

export default CardType;