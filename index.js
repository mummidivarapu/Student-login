const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Employee = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


app.post('/login',(req,res)=>{
  const {email,pass}=req.body;
  Employee.findOne({email:email})
  .then(user =>{
    if(user){
      if(user.pass === pass)
      {
        res.json("success");
      }
      else{
        res.json("the password is incorrect")
      }
    }
    else{
      res.json("no record is existed");
    }
  })
})

app.post('/register', (req, res) => {
    const { name, email, pass } = req.body;
    console.log("Received data:", { name, email, pass }); // Add this line for debugging
    const newEmployee = new Employee({ name, email, pass }); 
  
    newEmployee.save()
      .then(employee => {
        console.log("Employee inserted successfully:", employee);
        res.json(employee);
      })
      .catch(err => {
        console.error("Error inserting employee:", err);
        res.status(500).json({ error: "Failed to create employee"  });
      });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
