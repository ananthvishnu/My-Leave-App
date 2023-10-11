const express = require('express');
const {UserModel, getAllRecords,singleRecord,updateRecord,deleteRecord} = require('../controllers/userController') 

const router = express.Router();


router.post('/applyleave', UserModel);
router.get('/records',getAllRecords);
router.get('/record/:id',singleRecord);
router.put('/edit/:id',updateRecord);
router.delete('/delete/:id',deleteRecord);





module.exports = router;