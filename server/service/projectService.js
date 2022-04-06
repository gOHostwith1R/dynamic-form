const { getAllProjects } = require('../contoller/projectController');
const { Project } = require('../models/models');

class ProjectService {
  async createProject(data) {
    const {
      name,
      title,
      subtitle,
      type,
      catName,
      dogName,
      notice,
      item,
      textNotRequired,
      selectNotRequired,
    } = data;
    return await Project.create({
      name,
      title,
      subtitle,
      type,
      catName,
      dogName,
      notice,
      textNotRequired,
      selectNotRequired,
      item,
    });
  }
  async getAllProjects() {
    return await Project.findAll();
  }
  async editProject(id, data) {
    return (await Project.findByPk(id)).update(data);
  }
}

module.exports = new ProjectService();
