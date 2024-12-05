const express=require('express')
const User=require('./User.json')
const path=require('path')

const app=express();
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
 return res.send("HELLO")
})


app.get('/User',(req,res)=>{
    return  res.json(User)
})

app.get('/User',(req,res)=>{
    res.sendFile(path.json(__dirname,'index.html'))
    console.log(req.headers)
})

// for post
app.post('/User',(req,res)=>{
    const body=req.body
    console.log('json data',body)
    return res.json({status:"pending"}),
    res.send(body)
    
})


// for delete
app.delete('/User/:id',(req,res)=>{
    const UserId=parseInt(req.params.id)
    const index = data.findIndex(item => item.id ===    UserId);
    // for checking status
    if(index=== -1){
        return res.status(400).send("data not found")
    }
    // remode data from Array
    data.splice(index,1);
    res.json({messege:"data delete successfully"})
})



app.listen(5001,()=>{
    console.log('server is running on 5001')
})