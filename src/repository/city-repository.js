const{City} = require('../models/index') //index will include all the models
const {Op} = require('sequelize');

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

   async deleteCity(cityId){
    try {
        await City.destroy({
            where: {
                id: cityId  // Changed from cityid to match Sequelize conventions
            }
        });
        return true;  // Optional: return a confirmation
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}
 
    async UpdateCity(cityId,data){
        try {
            
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // })

            const city = await City.findByPk(cityId)
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error}; 
        }
    };






    async getCity(cityid){
        try {
            const city = City.findByPk(cityid);
            return city;
        } catch (error) {
            throw{error}
        }
    }


  async getAllCities(filter) {
    try {
        if(filter.name){
            const cities = await City.findAll({
                where:{
                    name:{
                        [Op.startsWith] : filter.name
                    }
                }
            });
            return cities;
        }
        const cities = await City.findAll();
        return cities;
    } catch (error) {
        throw { error };
    }
}
}  

module.exports=CityRepository;