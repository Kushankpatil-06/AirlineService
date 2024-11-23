const express = require("express");
const bodyParser = require("body-parser")
const {PORT} = require('./config/serverConfig') 
const db = require('./models/index')
const ApiRoutes = require('./routes/index.js')
const {City,Airports} = require('./models/index')

const setupAndStartServer = async()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes);


    app.listen(3002,async()=>{
        console.log(`Server is running on port`);
        // db.sequelize.sync({alter:true});
        const city = await City.findOne({
            where:{
                id : 18
            }
        });


        const airports = await city.getAirports();
        // console.log(city,airports);
    })
}

setupAndStartServer();