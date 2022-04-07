import React, { useEffect, useState } from 'react';
import { apiProject } from '../../api/apiProject';
import { Modal, Project } from '../../components';
import './style.css';
import { validateForm } from '../../helpers/validateForm';
import { Link } from 'react-router-dom';

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
    const validateData = validateForm(data);
    apiProject.apiEditProject(id, validateData);
    apiProject.apiFetchAllProject().then(data => setProjects(data.data));
  };

  return (
    <div className="main">
      <Link to="/create">Create Project</Link>
      <div className="project__wrapper">
        {projects.map((elem, index) => (
          <Project data={elem} key={index} handleOpenEdit={handleOpenEdit} />
        ))}
        {open && (
          <Modal
            handleCloseEdit={handleCloseEdit}
            id={id}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
};
