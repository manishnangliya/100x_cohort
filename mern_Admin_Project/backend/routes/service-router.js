const express = require('express');
const getCourse = require('./controllers/service-controller');
const router = express.Router();

router.get('/getcourse',getCourse);

module.exports = router;