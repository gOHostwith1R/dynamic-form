import React, { useEffect, useState } from 'react';
import { apiProject } from '../../api/apiProject';
import { Project } from '../../components';
import './style.css';

export const MainPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    apiProject.apiFetchAllProject().then(data => setProjects(data.data));
  }, []);
  const handleOpenEdit = id => {
    setOpen(true);
    console.log(id);
  };
  console.log(projects);
  return (
    <div className="main">
      {projects.map((elem, index) => (
        <Project data={elem} key={index} handleOpenEdit={handleOpenEdit} />
      ))}
    </div>
  );
};
