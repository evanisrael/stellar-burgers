import React from 'react';
import modalOverlayStyles from './modal-overlay.module.css';
import { childrenPropType } from '../../utils/prop-types'; 

const ModalOverlay = ({ children }) => {
  return (
    <div className={modalOverlayStyles.background}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: childrenPropType,
};

export default ModalOverlay;