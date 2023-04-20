const express=require('express');
const router=express.Router();
const fs=require('fs');

router.post('/data',(req,res,next)=>{
    fs.readFile('chat.txt',(err,data)=>{
        fs.writeFileSync('chat.txt',`${data} ${req.body.hiddenName} : ${req.body.userText}`);
    })
   
    res.redirect('/');
})

module.exports=router;