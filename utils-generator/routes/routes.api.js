const express = require("express");
const router = express.Router();
const contactController = require('../modules/contacts/contact.controller')
const contactRoute = require('../modules/contacts/contact.routes.api')

router.get("/", (req, res, next) => {
  try {
    // Database query goes here
    // Utils query
    res.json({ msg: "Hello from API" });
  } catch (err) {
    next(err);
  }
});
router.use('/contact',contactRoute);

module.exports = router;