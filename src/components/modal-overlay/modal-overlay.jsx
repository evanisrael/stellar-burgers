import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={modalOverlayStyles.background}>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalOverlay;
