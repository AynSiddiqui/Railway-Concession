const express = require("express");
const RenewUser = require("../models/Renewal");
//const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const bodyParser = require("body-parser");
const JWT_SECRET = "Harryisagoodb$oy";

let success = false;
router.post(
  "/renewForm",
  [
   
    body('ticketNo', 'Enter a ticket Number').isLength({ max: 4,min:4 }),
    // body('class2', 'Enter a valid dob').isLength(),
    // body('periodfrom', 'Enter a valid dob').isLength(),
    // body('periodto', 'Enter a valid dob').isLength(),
    
  ],
  async (req, res) => {
    //If there are errors, return Bad request and the errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
      let user1 = await RenewUser.findOne({ phnNumber: req.body.phnNumber });
      if (user1) {
        return res.status(400).json({
          error: "Sorry a user with this phone number already exists",
        });
      }

      
      user = await RenewUser.create({
        ticketNo: req.body.ticketNo,
        class2: req.body.class2,
        periodfrom: req.body.periodfrom,
        periodto: req.body.periodto,
        phnNumber: req.body.phnNumber,
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

// // ROUTE 2: Retrieve form user data using: GET "/api/auth/formusers". No login required
// router.get("/formusers", async (req, res) => {
//   try {
//     const formUsers = await FormUser.find();
//     res.json(formUsers);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

module.exports = router;
