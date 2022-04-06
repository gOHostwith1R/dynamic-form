import React from 'react';
import './style.css';

export const Select = ({
  defaultValue,
  options,
  inputRef,
  onChange,
  disabled,
}) => (
  <select
    ref={inputRef}
    onChange={onChange}
    disabled={disabled}
    className="select"
  >
    <option value="">{defaultValue}</option>
    {options.map(elem => (
      <option value={elem.item} key={elem.key}>
        {elem.item}
      </option>
    ))}
  </select>
);
