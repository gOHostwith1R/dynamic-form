import React, { useEffect, useState } from 'react';
import { apiProject } from '../../api/apiProject';
import { Modal, Project } from '../../components';
import './style.css';

export const MainPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    apiProject.apiFetchAllProject().then(data => setProjects(data.data));
  }, []);
  const handleOpenEdit = id => {
    setOpen(true);
    setId(id);
  };
  const handleCloseEdit = () => {
    setOpen(false);
  };

  const onSubmit = data => {
    let filteredObj = {};
    for (const [key, value] of Object.entries(data)) {
      if (value !== '' && value !== undefined && value.length !== 0) {
        if (Array.isArray(value)) {
          value.forEach(elem => {
            if (elem.name !== '') {
              return (filteredObj[key] = value);
            }
          });
        } else {
          filteredObj[key] = value;
        }
      }
    }
    apiProject.apiEditProject(id, filteredObj);
    apiProject.apiFetchAllProject().then(data => setProjects(data.data));
  };

  return (
    <div className="main">
      {projects.map((elem, index) => (
        <Project data={elem} key={index} handleOpenEdit={handleOpenEdit} />
      ))}
      {open && (
        <Modal handleCloseEdit={handleCloseEdit} id={id} onSubmit={onSubmit} />
      )}
    </div>
  );
};
