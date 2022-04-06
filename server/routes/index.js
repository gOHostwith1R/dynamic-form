const Router = require('express');
const router = new Router();
const projectRouter = require('./projectRoutes');

router.use('/', projectRouter);

module.exports = router;
