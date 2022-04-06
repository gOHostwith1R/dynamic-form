import React from 'react';
import './style.css';

export const Button = ({ children, onClick, type }) => (
  <button className="button" onClick={onClick} type={type || 'button'}>
    {children}
  </button>
);
