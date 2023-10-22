import React, { useContext, useState } from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import { IngredientsContext } from '../services/IngredientsContext';

function BurgerConstructor() {
  const { ingredients, setIngredients } = useContext(IngredientsContext);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
  const bun = ingredients.find(ingredient => ingredient.type === 'bun');
  const otherIngredients = ingredients.filter(ingredient => ingredient.type !== 'bun');

  const totalCost = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);

  const handleOpenOrderDetailsModal = () => {
    setIsOrderDetailsModalOpen(true);
  };

  const handleCloseOrderDetailsModal = () => {
    setIsOrderDetailsModalOpen(false);
  };

  return (
    <div className={burgerConstructorStyles.block}>
      {bun && (
        <div className={`mb-4 pr-2 ${burgerConstructorStyles.card} ${burgerConstructorStyles.locked}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </div>
      )}
      <ul className={`custom-scroll ${burgerConstructorStyles.list}`}>
        {otherIngredients.map((ingredient) => (
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
      {bun && (
        <div className={`mt-4 pr-2 ${burgerConstructorStyles.card} ${burgerConstructorStyles.locked}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </div>
      )}
      <div className={`mt-10 pb-10 ${burgerConstructorStyles.order}`}>
        <div className={`${burgerConstructorStyles.sum}`}>
          <p className={`mr-2 text text_type_main-large ${burgerConstructorStyles.number}`}>{totalCost}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType='button' type="primary" size="large" onClick={handleOpenOrderDetailsModal}>Оформить заказ</Button>
      </div>
      {isOrderDetailsModalOpen && (
        <ModalOverlay onClick={handleCloseOrderDetailsModal}>
          <Modal onClose={handleCloseOrderDetailsModal}>
            <OrderDetails />
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}

export default BurgerConstructor;