import React from 'react';

export const Select = ({ defaultValue, options, inputRef, onChange }) => (
  <select name="pets" id="pet-select" ref={inputRef} onChange={onChange}>
    <option value="">{defaultValue}</option>
    {options.map(elem => (
      <option value={elem}>{elem}</option>
    ))}
  </select>
);
