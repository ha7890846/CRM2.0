const express = require("express");
const { getEmp, addEmp } = require("../controllers/empController");
const router = express.Router();

router.get("/",getEmp);
router.post("/add",addEmp);
module.exports= router;