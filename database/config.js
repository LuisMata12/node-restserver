const mongoose = require('mongoose');


const dbConection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODE__CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("base de datos online")
    } catch (error) {
        console.log(error)
        throw new Error("Error al levantar la base de datos")

    }

}

module.exports={
    dbConection
}