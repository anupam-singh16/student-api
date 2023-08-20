const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log("err", err));

const userList = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    minlength:3
  },
  email: {
   type: String,
   required:true,
   unique:true,
  //  validate(value){
  //       if(!validator.isEmail(value)){
  //            throw new Error ("Invalid email")
  //       }
  //  }
},

  number:{
    type :  Number,
    min:10,
    required:true,
    unique:true
  },
  password: {
    type: String,
    unique:true,
    required:true
 },
    });

// let userData = new mongoose.model("userList", userList);


const student = new mongoose.model('Student',userList)
module.exports = student;


// const dataFunc = async () => {
//   try {
//     const Data = new userData({
//       usedId: 1,
//       name: "anupam singh",
//       email: "anupam@gmail.com",
//       mobile_number:7210599458,
//     });

//     let result = await Data.save();
//     // console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };


// dataFunc();