const ProjectService = require('../service/projectService');

class ProjectController {
  async createProject(req, res) {
    const { data } = req.body;
    console.log(data);
    const project = await ProjectService.createProject(data);
    return res.status(200).json(project);
  }
  async getAllProjects(req, res) {
    const projects = await ProjectService.getAllProjects();
    return res.status(200).json(projects);
  }
}

module.exports = new ProjectController();
