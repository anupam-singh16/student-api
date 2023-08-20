const express = require('express');
const dbconnect =  require('./mongoose/src/insert')
var cors = require('cors')
const Student =  require('./mongoose/src/app');
// const db = require('./mongoose/src/app')

const app = express();
app.use(cors())
app.use(express.json())




app.post('/student', (req,res)=>{
    
    let data = new Student(req.body);

       data.save().then(()=>{
         res.status(201).send(data)
       }).catch((e)=>{
        res.status(400).send(e)
       })
    console.log("data",data)
    res.send(data);
})



app.get('/student',async (req,res)=>{
   let studentData = await Student.find({})
   res.send(studentData)
})




app.post('/login',async (req,res)=>{
   try {
   const { email,password} = req.body
      let userDetail = await  Student.findOne({email:email});

      if(userDetail.password === password){
        console.log('successful login')
      }else{
         console.log("inavlid password")
      }
      // res.send(emailData.password)
      // console.log("SADFSGDHFG",userDetail)
   } catch (error) {
     res.send("invalid details")
   }
})

app.get('/login',async (req,res)=>{
   const { email,password} = req.body

   let userDetail = await  Student.findOne({email:email});
   res.send(userDetail)
})




app.listen(5000)