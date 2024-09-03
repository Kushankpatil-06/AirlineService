const {CityRepository}=require('../repository/index')

class CityService{
    constructor(){
       this.CityRepository = new CityRepository();

    }


    async createCity(data){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Somethhing went wrong at the service layer");
            throw{error};
        }
    };




    
    async deleteCity(cityid){
   try {
    const response = await this.CityRepository.deleteCity(cityid)
    return response;
   } catch (error) {
    console.log("Something went wrong at the service layer");
    throw{error}
   }

    }





    async UpdateCity(cityid,data){
        try {
            const city = await this.CityRepository.UpdateCity(cityid,data)
            return city;
        } catch (error) {
            console.log("Something went wrong at the service layer");
    throw{error}
        }
    }






    async getCity(cityid) {
         try {
            const city = await this.CityRepository.getxity(cityid)
                 return city;
         } catch (error) {
            console.log("Something went wrong at the service layer");
    throw{error}
         }           

    }

    
}