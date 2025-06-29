const express = require("express");
const { demo } = require("../controllers/demo");
const router = express.Router();

router.get("/admin",demo);
module.exports= router;