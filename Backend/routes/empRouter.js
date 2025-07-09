const express = require("express");
const { getEmp, addEmp,deleteEmp } = require("../controllers/empController");
const router = express.Router();

router.get("/",getEmp);
router.post("/add",addEmp);
router.delete("/:id", deleteEmp);
module.exports= router;