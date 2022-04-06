const ProjectService = require('../service/projectService');

class ProjectController {
  async createProject(req, res) {
    const { data } = req.body;
    const project = await ProjectService.createProject(data);
    return res.status(200).json(project);
  }
  async getAllProjects(req, res) {
    const projects = await ProjectService.getAllProjects();
    return res.status(200).json(projects);
  }
  async editProject(req, res) {
    const { id, data } = req.body;
    const editProject = await ProjectService.editProject(id, data);
    return res.status(200).json(editProject);
  }
}

module.exports = new ProjectController();
