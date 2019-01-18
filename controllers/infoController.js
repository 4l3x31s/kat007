const Info = require('../models/info').Info;
const service = require('../services/index');
const auth = require('../middleware/auth');

const services = require('../services/index');
function generaToken(req,res) {
    if(req.body.user == 'guanyu'){
        res.status(200).send({
            mensaje: 'Token generado',
            continuarFlujo: true,
            token: services.createToken(req.body.user)
        })
    }else {
        return res.status(500).send({mensaje: 'Error al generar los datos.', continuarFlujo: false})
    }
}
function insertarInfo(req,res) {
    var info = new Info({
        bienvenida: req.body.bienvenida,
        disponibles: req.body.disponibles,
        contactos: req.body.contactos
        
    });
    info.save().then((inf)=>{
        console.log(JSON.stringify(inf));
        res.send(inf);
    },(err)=>{
        console.log(JSON.stringify(err));
        res.send(err);
    });
}
function buscarInfo(req, res) {
    Info.find({_id: {$regex: req.params.id}}, (err,info)=>{
        if(err){
            res.send(err);
        }else{
            res.send(info);
        }
    });
}
function listarInfo(req, res){
    Info.find({},(err,cruds)=>{
        console.log(JSON.stringify(cruds));
        if(!err){
            res.send(cruds);
        }else {
            res.send(err);
        }
    });
}
function actualizarInfo(req,res){
    Info.find({_id: {$regex: req.params.id}}, (err,info)=>{
        if(err){
            res.send(err)
        }else{
            //usuario.nombre = req.body.nombre;
            info.bienvenida = req.body.bienvenida;
            info.disponibles = req.body.disponibles;
            info.contactos = req.body.contactos;
            info.save((err)=>{
                if(!err){
                    res.send({mensaje:"Se actualizo los datos", estado: true})
                }else{
                    res.send({mensaje:"Error al actualizar", estado: false})
                }
            })
        }
    })
}
module.exports = {
    insertarInfo,
    buscarInfo,
    listarInfo,
    actualizarInfo,
    generaToken
}