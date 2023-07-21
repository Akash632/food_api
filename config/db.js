const mongoose = require('mongoose');

const connectdb = async (req,res)=>{
    try{
        await mongoose.connect(`mongodb+srv://akashnagineni632:anumulas6@cluster0.yzy05kh.mongodb.net/?retryWrites=true&w=majority`);
        console.log('mongo connected')
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectdb;