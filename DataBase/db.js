var mongoose = require("mongoose")

async function connectToDataBase(){
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to server");
        
    }catch(error){
        console.log("error",error);
        
    }
}
module.exports = connectToDataBase 