import React from 'react';
import OrderDetailsStyles from './order-details.module.css';
import DoneImage from '../../images/done.png';

function OrderDetails() {
  return (
    <div className={OrderDetailsStyles.container}>
      <h2 className={`text text_type_digits-large ${OrderDetailsStyles.number}`}>034536</h2>
      <p className={`text text_type_main-medium ${OrderDetailsStyles.id}`}>идентификатор заказа</p>
      <img src={DoneImage} alt="Заказ готов" className={OrderDetailsStyles.image} />
      <p className={`text text_type_main-default ${OrderDetailsStyles.start}`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;