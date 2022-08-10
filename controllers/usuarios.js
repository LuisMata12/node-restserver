const {response, request}= require('express');

const usuariosGet = (req=request,res)=>{

    const query = req.query;
    res.status(200).json({
        'msg':'get api controlador',
        query
    });
}

const usuariosPost = (req=request,res)=>{

    const body = req.body;

    res.status(200).json({
        'msg':'post api controlador',
        body
    });
}

const usuariosPut = (req,res)=>{

    const id = req.params.id;

    res.status(200).json({
        'msg':'put api controlador',
        id
    });
}

const usuariosPath = (req,res)=>{
    res.status(200).json({
        'ok':true,
        'msg':'path api controlador'
    });
}

const usuariosDelete = (req,res)=>{
    res.status(200).json({
        'ok':true,
        'msg':'delete api controlador'
    });
}


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete

}