const express = require('express');
const FormUser = require('../models/FormUser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
let success = false;
router.post('/fillForm', [
  body('firstname', 'Enter a valid name').isLength({ min: 3 }),
  body('middlename', 'Enter a valid name').isLength({ min: 3 }),
  body('surname', 'Enter a valid name').isLength({ min: 3 }),
  
  body('age', 'Enter a valid age').isLength({ max: 2,min:2 }),
 
  body('ticketNo', 'Enter a ticket Number').isLength({ max: 4,min:4 }),

 
  body('phnNumber', 'Enter a valid name').isLength({ max: 10,min:10 }),
  
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    
    
    let user1 = await User.findOne({ phnNumber: req.body.phnNumber });
    if (user1) {
      return res.status(400).json({ error: "Sorry a user with this phone number already exists" })
    }
    
    // Create a new user
    user = await User.create({
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      surname: req.body.surname,
      dob: req.body.dob,
      age: req.body.age,
      gender: req.body.gender,
      courses: req.body.courses,
      year: req.body.year,
      duration: req.body.duration,
      class: req.body.class,
      stationfrom: req.body.stationfrom,
      stationto: req.body.stationto,
      passduration: req.body.passduration,
      ticketnumber: req.body.ticketnumber,
      class1: req.body.class1,
      periodfrom: req.body.periodfrom,
      periodto: req.body.periodto,
      category: req.body.category,
      address: req.body.address,
      phnNumber:req.body.phnNumber,
      
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


    // res.json(user)
    success = true
    res.json({ success,authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



