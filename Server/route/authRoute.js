const userRegister = require('../controller/auth/userRegister')
const router =require("express").Router()

router.route('/register').post(userRegister)
module.exports=router;