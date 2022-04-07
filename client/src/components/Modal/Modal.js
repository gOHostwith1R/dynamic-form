import React from 'react';
import './style.css';
import { Form } from '../Form';

export const Modal = ({ handleCloseEdit, onSubmit }) => {
  return (
    <div className="modal">
      <p className="close" onClick={handleCloseEdit} />
      <Form onSubmit={onSubmit} />
    </div>
  );
};
