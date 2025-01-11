const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

// /login => GET
router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

// /login => POST
router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

// /logout => POST
router.post('/logout', authController.postLogout);

module.exports = router;