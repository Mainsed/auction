const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(express.json({extended: true}))

app.use('/api/auth', require('./authRoutes'))
app.use('/api/user', require('./profileRoutes'))
app.use('/api/lot', require('./lotRoutes'))

async function start () {
    try{
        mongoose.connect(
            'mongodb+srv://Mainsed:qwerty1234@auctioncluster.xmns3.mongodb.net/auction?retryWrites=true&w=majority',
            {useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(5000, ()=>{console.log('Server started!')})
    }catch(e){
        console.log('Error: ' + e.message)
    }
}
start();