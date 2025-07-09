const express = require("express");
const {
  getEmp,
  addEmp,
  deleteEmp,
  updateEmp,
} = require("../controllers/empController");
const router = express.Router();

router.get("/", getEmp);
router.post("/add", addEmp);
router.delete("/:id", deleteEmp);
router.put("/:id", updateEmp);
module.exports = router;
