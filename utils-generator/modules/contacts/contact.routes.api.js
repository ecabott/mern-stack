const express = require('express');
const contactController = require('./contact.controller');
const router = express.Router();

router.post('/form', (req, res, next) => {
    console.log({data: req.body});
    contactController.create(req.body);
    res.json({msg: "Thank you form submitting the form"});
  });
  module.exports = router;