const{City} = require('../models/index') //index will include all the models

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.Create ({name});
            return city;
        } catch (error) {
            throw{error}
        }
    }

    async deleteCity({cityid}){
        try {
            await  City.destroy({where:{id:cityid}});
        } catch (error) {
            throw{error}
        }

    }
}

module.exports=CityRepository;