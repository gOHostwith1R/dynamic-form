import React from 'react';
import './style.css';
import { apiProject } from '../../api/apiProject';
import { Form } from '../../components';
import { validateForm } from '../../helpers/validateForm';

export const CreatePage = () => {
  const onSubmit = data => {
    const validateData = validateForm(data);
    apiProject.apiCreateProject(validateData);
  };
  return <Form onSubmit={onSubmit} />;
};
