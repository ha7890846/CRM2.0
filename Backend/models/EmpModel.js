const { default: mongoose } = require("mongoose");

const empSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  empId: { type: Number, required: true },
  location:{type:String,required:true},
  activity:{type:String},
  assignedLead:{type:Number},
  closedLead:{type:Number},
});

module.exports = mongoose.model("Emp", empSchema);