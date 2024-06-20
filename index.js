const express=require("express")
const app=express()


app.get("/",(req,res)=>{
    res.json({message:"Hello Welcome to EC2"})
})
app.listen(3000,()=>{
    console.log(`Server is Listening on Port 3000`)
})