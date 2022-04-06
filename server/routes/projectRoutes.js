const Router = require('express');
const router = new Router();
const ProjectController = require('../contoller/projectController');

router.post('/create', ProjectController.createProject);
router.get('/projects', ProjectController.getAllProjects);

module.exports = router;
