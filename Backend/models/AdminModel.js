const { mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String },
  activity: { type: Object },
});
module.exports = mongoose.model("Admin", adminSchema);
