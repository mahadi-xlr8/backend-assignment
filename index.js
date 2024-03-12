const express=require("express")
const app=express();
const addEmployee=require("./routes/task_1")
const getEmployee=require("./routes/task_2")
const getEmployeeById=require("./routes/tast_3")


app.use(express.json())


app.use("/employee-info",addEmployee);
app.use("/employee-list",getEmployee)
app.use("/employee-by-id",getEmployeeById)



const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}...`)
})
