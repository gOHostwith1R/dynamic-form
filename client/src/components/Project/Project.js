import React from 'react';
import './style.css';
import pen from '../../images/icons8-insulin-pen-50.png';

export const Project = ({ data, handleOpenEdit }) => {
  const {
    id,
    name,
    title,
    subtitle,
    type,
    catName,
    dogName,
    textNotRequired,
    item,
  } = data;
  return (
    <div className="project" key={id}>
      <div className="wrapper__image">
        <h4>Project name: {name}</h4>
        <img
          src={pen}
          alt="pen"
          className="pen"
          onClick={() => handleOpenEdit(id)}
        />
      </div>
      <h3>Title: {title}</h3>
      <p>Subtitle: {subtitle}</p>
      <p>Type: {type}</p>
      <p>Cat name: {catName}</p>
      <p>Dog Name: {dogName}</p>
      <div>
        Additional information: {textNotRequired}
        {item.length !== 0 && item.map(elem => <p>{elem.name}</p>)}
      </div>
    </div>
  );
};
