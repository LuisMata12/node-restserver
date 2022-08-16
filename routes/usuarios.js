const { Router }=require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPath } = require('../controllers/usuarios');
const {check}=require('express-validator')
const router = Router();
const {validarCampos} = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioPorId} = require('../helpers/db-validators');

router.get('/',usuariosGet);

router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
],usuariosPut);

router.post('/',[
    check('correo','El correo no es valido').isEmail(),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('contraseña','La contraseña debe tener mas de 6 letras').isLength({min:6}),
    // check('rol','No es valido ese rol').isIn(['ADMIN_ROL','USER_ROLE']),
    check('rol').custom(esRolValido),
    check('correo').custom(emailExiste),
    validarCampos
],usuariosPost);

router.delete('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId)],
    usuariosDelete);

router.patch('/',usuariosPath);




module.exports = router;