import React from 'react';
import './style.css';
import { Form } from '../Form';

export const Modal = ({ handleCloseEdit }) => (
  <div className="modal">
    <p className="close" onClick={handleCloseEdit} />
    <Form />
  </div>
);
