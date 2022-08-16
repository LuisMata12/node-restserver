
const {Schema, model}=require('mongoose');

const RoleEschema = Schema({
    rol:{
        type:String,
        require:[true,'El rol es obligatorio']
    }
});

module.exports=model('Role', RoleEschema)