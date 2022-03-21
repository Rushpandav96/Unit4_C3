const express = require ("express");

const {body, validationResult} = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

module.exports = router;