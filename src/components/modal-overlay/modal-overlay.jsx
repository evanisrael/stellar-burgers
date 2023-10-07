import React from 'react';
import ReactDOM from 'react-dom';
import modalOverlayStyles from './modal-overlay.module.css';
import { childrenPropType } from '../../utils/prop-types'; 

const ModalOverlay = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={modalOverlayStyles.background}>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

ModalOverlay.propTypes = childrenPropType;

export default ModalOverlay;
