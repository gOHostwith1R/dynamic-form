import axios from 'axios';

export const apiProject = {
  apiCreateProject: data =>
    axios.post(process.env.REACT_APP_SERVER_URL + 'create', { data }),
  apiFetchAllProject: () =>
    axios.get(process.env.REACT_APP_SERVER_URL + 'projects'),
};
