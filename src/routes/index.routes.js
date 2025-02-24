const express = require('express');
const router = express.Router();
const {indexController} = require('../controllers/index.controller')
const {createUser,readUser,edituser,updateuser,deleteuser} = require('../controllers/index.controller')
const userModel = require("../models/user")

router.get('/',indexController)
router.post('/create',createUser)
router.get('/read',readUser)
router.get('/edit/:userid',edituser)
router.post('/update/:userid',updateuser)
router.get('/delete/:userid',deleteuser)


module.exports = router