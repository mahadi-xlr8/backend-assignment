const app=require("express").Router()
const Employee=require("../db")

app.delete("/",async (req,res)=>{
    try{
        const {id}=req.query;
        const result=await Employee.findByIdAndDelete(id)
        let message="Employee deleted successfully!"
        if(result==null)message="User id does not exist!";
        res.status(200).send(message)
    }
    catch(err){
        console.log(err.message)
        res.status(400).send("Something went wrong!")
    }
})


module.exports=app;