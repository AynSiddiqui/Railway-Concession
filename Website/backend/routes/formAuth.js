const express = require("express");
const FormUser = require("../models/FormUser");
//const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const bodyParser = require("body-parser");
const JWT_SECRET = "Harryisagoodb$oy";

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
let success = false;
router.post(
  "/fillForm",
  [
    body("firstname", "Enter a valid name").isLength({ min: 3 }),
    //body('middlename', 'Enter a valid name').isLength({ min: 3 }),
    body("surname", "Enter a valid name").isLength({ min: 3 }),
    body("dob", "Enter a valid dob").isLength(),
    body("age", "Enter a valid age").isLength({ max: 2, min: 1 }),
    body("gender", "Enter a valid dob").isLength(),
    body("course", "Enter a valid dob").isLength(),
    body("year", "Enter a valid dob").isLength(),
    body("duration", "Enter a valid dob").isLength(),
    body("class1", "Enter a valid dob").isLength(),
    //body('stationfrom', 'Enter a valid dob').isLength(),
    body("stationto", "Enter a valid dob").isLength(),
    // body('passduration', 'Enter a valid dob').isLength(),
    // // body('ticketNo', 'Enter a ticket Number').isLength({ max: 4,min:4 }),
    // body('class2', 'Enter a valid dob').isLength(),
    // body('periodfrom', 'Enter a valid dob').isLength(),
    // body('periodto', 'Enter a valid dob').isLength(),
    // body('category', 'Enter a valid dob').isLength(),
    body("address", "Enter a valid dob").isLength(),
    body("regId", "Enter a valid username").isLength({ min: 9 }),
    // mo
  ],
  async (req, res) => {
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user1 = await FormUser.findOne({ phnNumber: req.body.phnNumber });
      if (user1) {
        return res.status(400).json({
          error: "Sorry a user with this phone number already exists",
        });
      }

      // Create a new user
      user = await FormUser.create({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        surname: req.body.surname,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        course: req.body.course,
        year: req.body.year,
        duration: req.body.duration,
        class1: req.body.class1,
        stationfrom: req.body.stationfrom,
        stationto: req.body.stationto,
        passduration: req.body.passduration,
        ticketNo: req.body.ticketNo,
        class2: req.body.class2,
        periodfrom: req.body.periodfrom,
        periodto: req.body.periodto,
        category: req.body.category,
        address: req.body.address,
        phnNumber: req.body.phnNumber,
        regId: req.body.regId,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // res.json(user)
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 2: Retrieve form user data using: GET "/api/auth/formusers". No login required

router.get("/formusers", async (req, res) => {
  try {
    const formUsers = await FormUser.find();
    res.json(formUsers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// router.get("/formusers", async (req, res) => {
//   try {
//     const { regId } = req.query;
//     const formUsers = await FormUser.findOne({ regId });
//     res.json(formUsers);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

module.exports = router;
