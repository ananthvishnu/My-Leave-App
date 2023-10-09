const express = require('express');
const {UserModel, getAllRecords} = require('../controllers/userController') 

const router = express.Router();


router.post('/applyleave', UserModel);
router.get('/records',getAllRecords)


module.exports = router;