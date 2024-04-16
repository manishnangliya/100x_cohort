const express = require('express');
const { getAllMessage, getAllUser, createService, deleteService, deleteUser } = require('./controllers/admin-conroller');
const validate = require('../middlewares/validate-middleware');
const serviceValidationSchema = require('../validators/service-validator');
const router = express.Router();


router.get('/getuser',getAllUser);
router.get('/getmessage',getAllMessage)
router.post('/newservice',validate(serviceValidationSchema) , createService);
router.delete('/deleteservice',deleteService)
router.delete('/deleteuser',deleteUser);

module.exports = router;