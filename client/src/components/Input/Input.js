import React from 'react';
import './style.css';

export const Input = ({ placeholder, onChange, inputRef, type, disabled }) => (
  <input
    type={type || 'text'}
    className="input"
    placeholder={placeholder}
    onChange={onChange}
    ref={inputRef}
    disabled={disabled}
  />
);
