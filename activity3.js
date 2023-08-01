const express= require('express');
const app=express();
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index3.html');
});

app.post('/',(req,res)=>{
    var cnt=0;
    var str=req.body.str;
    var arr=str.split(' ');
    cnt=arr.length;
    res.send("Number of words = "+ cnt);
});

app.listen(8000,()=>{
    console.log("server running on 8000...");
});