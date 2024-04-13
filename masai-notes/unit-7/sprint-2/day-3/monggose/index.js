const express = require('express');
// const router = express.Router();

const {movieModel,connection} = require('./db')

const app = express();
app.use(express.json());

// router.get('/movies', async(req,res)=>{
//     try {

//         const {title, rating, search, page,limit } = req.query;

//         let query = {};

//         if(title){
//             query.title={$regex:title, $options:'i'};
//         }
//         if(rating){
//             query.rating={$gte:parseInt(rating)};
//         }
//         if(search){
//             query.$or=[
//                 {title:{$regex:search, $options:'i'}},
//             ]
//         }

//         const sortFiled = await movieModel.find();
//         const sortOrder = sortBy ? 1 : -1;

//         const movies = await movieModel.find(query)

//         .sort({sortFiled : sortOrder})
//         .skip((page-1)*limit)
//         .limit(parseInt(limit))


//         res.json(movies)
        
//     } catch (error) {
//         console.log('err in routing');
//         console.log(error);
        
//     }
// })

app.get('/',(req,res)=>{
    res.send({msg:"App is working"})
})

app.get('/movies', async(req,res)=>{
    try {

        const movies = await movieModel.find();
        res.send({movies:movies})
        
    } catch (error) {
        console.log("error in getting movie");
        console.log(error);
        
    }
})

app.post('/movies/add', async(req,res)=>{
    const movie = req.body;

    try {
        await movieModel.create(movie);
        res.send({msg:"movie added sucussfully"});
    } catch (error) {
        console.log("err in adding movies");
        console.log(error);
    }
})

app.delete('/movies', async(req,res)=>{
    const movie = req.body;
    try {
        await movieModel.findOneAndDelete(movie);
        res.send({msg:"movie deletd sucuus"})
    } catch (error) {
        console.log('error in deleting movie');
        console.log(error);
    }
})



const port = 4040;

app.listen(port,()=>{
    console.log(`Server connected to the ${port}`)
})