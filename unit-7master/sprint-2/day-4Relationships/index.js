const express=require(express);

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('App is working')
})


app.listen(8080,()=>{
    console.log(`app is listening at 8080`)
})