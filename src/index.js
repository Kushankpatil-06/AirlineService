const express = require("express");
const bodyParser = require("body-parser")
const {PORT} = require('./config/serverConfig') 

const ApiRoutes = require('./routes/index.js')

const setupAndStartServer = async()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);


    app.listen(3000,async()=>{
        console.log(`Server is running on port`);
    })
}

setupAndStartServer();