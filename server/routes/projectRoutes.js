const Router = require('express');
const router = new Router();
const ProjectController = require('../contoller/projectController');

router.post('/create', ProjectController.createProject);
router.get('/projects', ProjectController.getAllProjects);
router.post('/edit', ProjectController.editProject);

module.exports = router;
