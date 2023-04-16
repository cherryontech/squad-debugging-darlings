const express = require('express');
const router = express.Router();

const SignupController = require('../controllers/signupController');
const SigninController = require('../controllers/signinController');
const ProfileController = require('../controllers/profileController');
const MatchingController = require('../controllers/matchingController');

router.get('/test', (req,res)=>{
    res.json({
        message:"Test router"
    });
});

// Authentication
router.post('/signup', SignupController);
router.post('/signin', SigninController);
router.get('/userProfile/:userId', ProfileController);
router.patch('/userProfile/:userId', ProfileController);

// Matching
router.get('/lists', MatchingController);


module.exports = router;
