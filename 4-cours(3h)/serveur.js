const express=require('express')
const app=express() // return un object

app.use((req,res)=>{
    res.json({
        massage:"express working",
        succes:"true",
        name:"mohammed ezzaim"
    })
})
module.exports= app;


