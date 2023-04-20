const express=require('express');
const router=express.Router();
const fs=require('fs');

router.use('/',(req,res,next)=>{
    fs.readFile('chat.txt','utf-8',(err,data)=>{
        res.contentType('html').send(`<body>
        <h3>${data}</h3>
        <form action="/data" method="post">
            <input type="text" name="userText" id="message">
            <input type="hidden" name="hiddenName" id="hide">
            <button type="submit" id="send">Send</button>
        </form>
    </body>
    <script>
        const btn = document.getElementById('send');
        btn.addEventListener('click', (e) => {
            document.getElementById('hide').value = JSON.parse(localStorage.getItem('user'));
        });
    </script>
    </body>`)
    })
})
module.exports=router;