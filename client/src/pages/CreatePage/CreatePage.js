import React from 'react';
import './style.css';
import { apiProject } from '../../api/apiProject';
import { Form } from '../../components';

export const CreatePage = () => {
  const onSubmit = data => {
    apiProject.apiCreateProject(data);
  };
  return <Form onSubmit={onSubmit} />;
};
