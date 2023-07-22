const mongoose = require("mongoose");
const { Schema } = mongoose;

const RenewalSchema = new Schema({
  phnNumber: {
    type: String,
    required: true,
  },
  ticketNo: {
    type: String,
  },
  class2: {
    type: String,
  },
  duration: {
    type: String,
  },
  periodfrom: {
    type: String,
  },
  periodto: {
    type: String,
  },
});
const Renewal = mongoose.model("Renewal",RenewalSchema);
module.exports = Renewal;
