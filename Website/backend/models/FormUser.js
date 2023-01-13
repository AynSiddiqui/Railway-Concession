const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormUserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    fullname:{
        type: String,
        required: true
    },
   regId:{
        type: String,
       required:true,
       unique:true
    },
    phnNumber:{
        type: String,
       required:true,
       unique:true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    },
  });
  const FormUser = mongoose.model('FormUser', FormUserSchema);
  module.exports = FormUser;