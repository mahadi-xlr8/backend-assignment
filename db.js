const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/employee")
  .then(() => console.log("connected to the database!"))
  .catch((err) => console.log(err));

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    fullName: {
      type: String,
      minlength: 2,
      maxlength: 100,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      maxlength: 100,
      required: true,
    },
    phone:{
        type:String,
        minlength:11,
        maxlength:14,
        required:true
    },
    block:{
        type:Boolean,
        default:false,
    }
  })
);

module.exports=Employee;
