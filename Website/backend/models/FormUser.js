const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormUserSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
   middlename:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true,
       
    },
    age:{
        type: String,
        required: true,
       
    },
    gender:{
        type: String,
        required: true,
       
    },
    courses:{
        type: String,
        required: true,
       
    },
    year:{
        type: String,
        required: true,
       
    },
    duration:{
        type: String,
        required: true,
       
    },
    class:{
        type: String,
        required: true,
       
    },
    stationFrom:{
        type: String,
        required: true,
       
    },
    stationTo:{
        type: String,
        required: true,
       
    },
    passduration:{
        type: String,
        required: true,
       
    },
   
    ticketNumber:{
        type: String,
       required:true,
       unique:true
    },
    class1:{
        type: String,
        required: true,
       
    },
    periodFrom:{
        type: String,
        required: true,
       
    },
    periodTo:{
        type: String,
        required: true,
       
    },
    category:{
        type: String,
        required: true,
       
    },
   address:{
        type: String,
        required: true,
       
    },
    phnNumber:{
        type: String,
       required:true,
       unique:true
    },

  });
  const FormUser = mongoose.model('FormUser', FormUserSchema);
  module.exports = FormUser;