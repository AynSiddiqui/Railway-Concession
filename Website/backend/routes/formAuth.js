const express = require("express");
const FormUser = require("../models/FormUser");
const User = require("../models/User");
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
    body("ticketNo", "Enter a ticket Number").isLength(),
    // body('class2', 'Enter a valid dob').isLength(),
    // body('periodfrom', 'Enter a valid dob').isLength(),
    // body('periodto', 'Enter a valid dob').isLength(),
    body("category", "Enter a valid dob").isLength(),
    body("address", "Enter a valid dob").isLength(),
    body("regId", "Enter a valid username").isLength(),
    body("startdate", "Enter start date").isLength(),
    body("enddate", "Enter end date").isLength(),
    body("isPresent", "True if address matches").isLength(),
    // mo
  ],
  async (req, res) => {
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      if (req.body.isPresent == false) {
        console.log(
          req.body.isPresent,
          "ID card address not matching to station from"
        );
        return res.status(400).json({
          error:
            "Sorry the entered station does not match with your ID card address",
        });
      }
      let user1 = await FormUser.findOne({ phnNumber: req.body.phnNumber });
      if (user1) {
        return res.status(400).json({
          error: "Sorry a user with this phone number already exists",
        });
      }

      const currentDate = new Date();

      // Function to format date to dd-mm-yyyy
      const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };

      // Get the date after 1 month
      const dateAfterOneMonth = new Date(currentDate);
      dateAfterOneMonth.setMonth(dateAfterOneMonth.getMonth() + 1);

      // Get the date after 4 months
      const dateAfterFourMonths = new Date(currentDate);
      dateAfterFourMonths.setMonth(dateAfterFourMonths.getMonth() + 4);

      // Set the duration based on your condition (e.g., "monthly" or "quarterly")
      const duration = req.body.duration; // Change this value as needed

      let enddate;

      if (duration === "Monthly") {
        enddate = formatDate(dateAfterOneMonth);
      } else if (duration === "Quarterly") {
        enddate = formatDate(dateAfterFourMonths);
      }

      const startdate = formatDate(currentDate);

      console.log("Start Date:", startdate);
      console.log("End Date:", enddate);

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
        // class2: req.body.class2,
        // periodfrom: req.body.periodfrom,
        // periodto: req.body.periodto,
        category: req.body.category,
        address: req.body.address,
        phnNumber: req.body.phnNumber,
        regId: req.body.regId,
        startdate: startdate,
        enddate: enddate,
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

// ROUTE 2: Retrieve form user data using: GET "/api/formAuth/formusers".
router.get("/formusers", async (req, res) => {
  try {
    const formUsers = await FormUser.find();
    res.json(formUsers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Retrieve form user data using: GET "/api/formAuth/formusers".
router.get("/getformuser", async (req, res) => {
  // Assuming you have the user's regId from the decoded token
  const userRegId = req.query.regId;
  // console.log("formAuth:", userRegId);

  if (!userRegId) {
    return res.status(400).json({ message: "RegId is required" });
  }

  // Find the user in the example data
  const user = await FormUser.findOne({ regId: userRegId });

  // console.log("FormuserRegId-->", user);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Return the user details
  res.json(user);
});

module.exports = router;
