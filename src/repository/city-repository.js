const{City} = require('../models/index') //index will include all the models

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.Create ({name});
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteCity({cityid}){
        try {
            await  City.destroy({where:{id:cityid}});
        } catch (error) {
            throw{error}
        }

    }
 
    async UpdateCity(cityid,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:cityid;
                }
            })
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
}

module.exports=CityRepository;