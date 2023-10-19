const express = require("express")
const router = express.Router();


const { isLoggedIn }= require("../middlewares/auth.middleware")
const {
    register,
    login,
    logout,
    getProfile
} = require('../controllers/user.controller')




router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/me',isLoggedIn, getProfile);


module.exports = router ;


