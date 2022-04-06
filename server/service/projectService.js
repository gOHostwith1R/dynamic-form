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
      item,
      textNotRequired,
      selectNotRequired,
      item,
    });
  }
  async getAllProjects() {
    return await Project.findAll();
  }
}

module.exports = new ProjectService();
