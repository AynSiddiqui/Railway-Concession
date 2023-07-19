const mongoose = require("mongoose");
const { Schema } = mongoose;

const RenewalSchema = new Schema({
  
  phnNumber: {
    type: String,
    required: true,
    unique: true,
  },
  ticketNo: {
    type: String,
  },
  class2: {
    type: String,
  },
  periodFrom: {
    type: String,
  },
  periodTo: {
    type: String,
  },
});
const Renewal = mongoose.model("Renewal",RenewalSchema);
module.exports = Renewal;
