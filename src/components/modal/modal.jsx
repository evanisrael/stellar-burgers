import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import { childrenPropType } from '../../utils/prop-types';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleOutsideClick = (e) => {
      if (!e.target.closest(`.${modalStyles.modal}`)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={modalStyles.modal}>
      <div className={modalStyles.content}>
        <button className={modalStyles.close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  children: childrenPropType,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
