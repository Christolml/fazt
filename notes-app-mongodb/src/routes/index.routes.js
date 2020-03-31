
const { Router } = require('express');
const router = Router();
// with router I'll define the url

const { renderIndex, renderAbout } = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

module.exports = router;
