const express= require('express');
const bodyParser= require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index2.html');
});

app.post('/',(req,res)=>{
    var sum=0;
    var nums=req.body.nums;
    var arr=nums.split(' ');
    for(var nm of arr){
        var n=Number(nm);
        sum += n;
    }
    res.send("Sum of " + arr+ " is " +sum);
});

app.listen(8000,()=>{
    console.log("server running on 8000...");
});