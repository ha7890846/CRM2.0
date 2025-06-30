const { default: mongoose } = require("mongoose");

const leadSchema = new mongoose.Schema({
    leadType:{type:String},
    issueDate:{type:String},
    status:{type:String}
})
module.exports = mongoose.model("Lead",leadSchema);