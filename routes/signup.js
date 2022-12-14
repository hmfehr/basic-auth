'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { Users } = require('../models/index');

router.post('/signup', async (req, res) => {

  try {
    console.log(Users);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

module.exports = router;
