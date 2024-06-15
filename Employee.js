const mongoose =require('mongoose')

const employeeSchema =new mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const EmployeeModel =mongoose.model("employee",employeeSchema)

module.exports=EmployeeModel;