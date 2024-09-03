const {CityService} = require('../services/index');
const cityService = new CityService()

const create = async (req,res)=>{
try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:'City created successfully',
        err:{}
    })
} catch (error) {
    console.log(error);
    return res.status(501).json({
        data:{},
        success:false,
        message: "Not able to create City",
        err:error;
    })
}
}

const delete = async (req,res)=>{
  try {
    const city = await cityService.deleteCity(req.param.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:'City deleted successfully',
        err:{}
    })
} catch (error) {
    console.log(error);
    return res.status(501).json({
        data:{},
        success:false,
        message: "Not able to delete City",
        err:error;
    })
}

}



const update = (req,res)=>{
     try {
    const city = await cityService.UpdateCity(req.param.id,req,body);
    return res.status(200).json({
        data:response,
        success:true,
        message:'City deleted successfully',
        err:{}
    })
} catch (error) {
    console.log(error);
    return res.status(501).json({
        data:{},
        success:false,
        message: "Not able to delete City",
        err:error;
    })
}

}



const get = (req,res)=>{
  try {
    const city = await cityService.getCity(req.param.id);
    return res.status(200).json({
        data:city,
        success:true,
        message:'City fetched successfully',
        err:{}
    })
} catch (error) {
    console.log(error);
    return res.status(501).json({
        data:{},
        success:false,
        message: "Not able to get  City",
        err:error;
    })
}

}


