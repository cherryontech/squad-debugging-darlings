const express = require('express');
const router = express.Router();

const SignupController = require('../controllers/signupController');
const SigninController = require('../controllers/signinController');
const ProfileController = require('../controllers/profileController');

router.get('/test', (req,res)=>{
    res.json({
        message:"Test router"
    });
});

router.post('/signup', SignupController);
router.post('/signin', SigninController);
router.patch('/userProfile/:userId', ProfileController);


module.exports = router;
