const Rol =require('../models/rol');
const Usuario  = require('../models/usuario');

 const esRolValido=async(rol='')=>{
    const existeRol = await Rol.findOne({ rol });
    if(!existeRol){
        throw new Error(`El ${rol} no esta registrado en la base de datos`)
    }
}

const emailExiste= async(correo='')=>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error('Ese correo ya fue regstrado')
    }
}

const existeUsuarioPorId= async(id)=>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error('Ese ID no esta registrado')
    }
}





    

module.exports={
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}