const Chef = require("../models/AdminModel");

exports.getAdmin = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
    console.log("getAdmin Called !")
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};