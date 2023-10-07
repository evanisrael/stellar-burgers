import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ ingredients }) {
  return (
    <div className={burgerConstructorStyles.block}>
      <div className={`mb-4 pr-2 ${burgerConstructorStyles.card} ${burgerConstructorStyles.locked}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          price={20}
        />
      </div>
      <ul className={`custom-scroll ${burgerConstructorStyles.list}`}>
        {ingredients.map((ingredient) => (
          <li
            key={ingredient._id}
            className={`mb-4 pr-2 ${burgerConstructorStyles.card}`}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={ingredient.name}
              thumbnail={ingredient.image}
              price={ingredient.price}
            />
          </li>
        ))}
      </ul>
      <div className={`mt-4 pr-2 ${burgerConstructorStyles.card} ${burgerConstructorStyles.locked}`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          price={20}
        />
      </div>
      <div className={`mt-10 pb-10 ${burgerConstructorStyles.order}`}>
        <div className={`${burgerConstructorStyles.sum}`}>
          <p className={`mr-2 text text_type_main-large ${burgerConstructorStyles.number}`}>610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType='button' type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
