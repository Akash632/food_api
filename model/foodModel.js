const mongoose = require('mongoose');

const foodModel = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image_src:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('food',foodModel)