const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/login',(req,res,next)=>{
    res.contentType('html')
    fs.readFile('login.html',(err,data)=>{
        res.send(data);
    })
    
});

module.exports=router;