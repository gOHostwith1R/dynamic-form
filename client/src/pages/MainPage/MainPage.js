import React, { useEffect, useState } from 'react';
import { apiProject } from '../../api/apiProject';
import { Modal, Project } from '../../components';
import './style.css';

export const MainPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    apiProject.apiFetchAllProject().then(data => setProjects(data.data));
  }, []);
  const handleOpenEdit = id => {
    setOpen(true);
  };
  const handleCloseEdit = () => {
    setOpen(false);
  };
  return (
    <div className="main">
      {projects.map((elem, index) => (
        <Project data={elem} key={index} handleOpenEdit={handleOpenEdit} />
      ))}
      {open && <Modal handleCloseEdit={handleCloseEdit} />}
    </div>
  );
};
