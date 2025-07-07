const { default: mongoose } = require("mongoose");

const empSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  LastName: { type: String, required: true },
  email: { type: String, required: true },
  empId: { type: Number, required: false},
  location:{type:String,required:true},
  activity:{type:String},
  assignedLead:{type:Number},
  closedLead:{type:Number},
  activeIndicator:{type:Boolean}
});

module.exports = mongoose.model("Emp", empSchema);