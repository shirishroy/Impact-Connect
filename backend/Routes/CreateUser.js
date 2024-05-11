const express = require('express');
const router = express.Router();
const user = require('../db/user');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "MynameisEndtoEndYouTubeChannel$#";

router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
  
    try {
      const user_1 = new user({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location
      });
      const newuser = await user_1.save();

      const authToken = jwt.sign({
        userId : newuser._id
      }, jwtSecret);
      res.cookie('jwt',authToken);
      res.json({ 
        success: true,
        user : newuser,
        authToken
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({ 
        success: false,
        error
      });
    }
  });

  router.post("/entryuser", [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "try logging with correct credentials" });
      }
      const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
      if (!pwdCompare) { // Corrected condition
        return res.status(400).json({ errors: "try logging with correct credentials" });
      }

      const authToken = jwt.sign({
        userId : userData._id
      }, jwtSecret);

      res.cookie('jwt',authToken);
      
      return res.json({ success: true, user : userData }); // Return success response
    } catch (error) {
      console.log(error);
      res.json({ success: false , error});
    }
  });
  
  module.exports = router;