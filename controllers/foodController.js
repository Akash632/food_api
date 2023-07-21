const foodModel = require("../model/foodModel")

const getItemsController=async(req,res)=>{
    try{
        const result = await foodModel.find({});

        res.status(200).send({
            success:true,
            message:"List of food items",
            items:result
        })
    }catch(err){
        res.status(500).send({
            success:true,
            message:'Internal server error'
        })
    }
}

const addItemsController = async (req,res)=>{
    try{
        const {name,image_src,price,category}=req.body;

        const result = await foodModel({name,image_src,price,category}).save();

        res.status(200).send({
            success:true,
            message:"item added successfully"
        })
    }
    catch(err){
        res.status(500).send({
            success:true,
            message:"Internal server error"
        })
    }
}

const getItemsDetailsController = async (req,res)=>{
    try{
        const {id}=req.params;

        const result = await foodModel.find({_id:id});

        res.status(200).send({
            success:true,
            message:"Item details",
            item:result
        })
    }
    catch(err){
        res.status(500).send({
            success:false,
            message:"Internal server error"
        })
    }
}
module.exports = {getItemsController,addItemsController,getItemsDetailsController}