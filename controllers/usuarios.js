const {response, request}= require('express');
const Usuario  = require('../models/usuario');
const bcryptjs = require('bcryptjs');



const usuariosGet = async (req=request,res)=>{

    const {limite = 5, desde = 0} = req.query;
    const query = {estado: true}

    const usuarios = await Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite));
    const total = await Usuario.countDocuments(query);
    res.status(200).json({
        total,
        usuarios
    });
}

const usuariosPost = async (req=request,res)=>{
    
    //body
    const {nombre, correo, contraseña, rol} = req.body;
    const usuario = new Usuario({nombre, correo, contraseña, rol});
    
    // encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt);

    await usuario.save();


    res.status(200).json(usuario);
}

const usuariosPut = async (req,res= response)=>{

    const { id } = req.params;
    const {  _id,contraseña,google,correo,...rest} =req.body;

    // TODO, validar contra la base de datos
    if(contraseña){
        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        rest.contraseña = bcryptjs.hashSync(contraseña, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, rest);

    res.status(200).json({
        'msg':'put api controlador',
        usuario
    });
}

const usuariosPath = (req,res)=>{
    res.status(200).json({
        'ok':true,
        'msg':'path api controlador'
    });
}

const usuariosDelete = async (req,res)=>{

    const { id }=req.params;

    const usuario = await Usuario.findByIdAndDelete( id );

    res.json(usuario);
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}