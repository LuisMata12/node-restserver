const{Schema,model}=require('mongoose');

const usuarioSchema = Schema({
    nombre:{
        type:String,
        require:[true,'El nombre es requerido']
    },
    correo:{
        type:String,
        require:[true,'El correo es requerido'],
        unique:true
    },
    contraseña:{
        type:String,
        require:[true,'la contraseña es obligatoria'],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    google:{
        type:Boolean,
        default:false
    }
});

usuarioSchema.methods.toJSON = function(){
    const{__v, contraseña, ...usuario }=this.toObject()
    return usuario
}

module.exports=model('Usuario',usuarioSchema);