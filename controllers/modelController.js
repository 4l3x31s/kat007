const Modelos = require('../models/modelos').Modelos;
const service = require('../services/index');

function insertarUsuarios(req,res) {
    var modelos = new Modelos({
        nombre: req.body.nombre,
        edad: req.body.edad,
        ci: req.body.ci,
        estatura: req.body.estatura,
        cuerpo: req.body.cuerpo,
        piel: req.body.piel,
        descripcion: req.body.descripcion,
        servicio:req.body.servicio,
        serv_hora: req.body.serv_hora,
        serv_media_hora: req.body.serv_media_hora,
        serv_2_horas: req.body.serv_2_horas,
        reservas: req.body.reservas,
        horarios: req.body.horarios,
        lugares_atencion: req.body.lugares_atencion,
        estado: true,
        ciudad: req.body.ciudad,
        fotos: req.body.fotos
    });
    modelos.save().then((mo)=>{
        console.log(JSON.stringify(mo));
        res.send(mo);
    },(err)=>{
        console.log(JSON.stringify(err));
        res.send(err);
    });
}
function buscar(req, res) {
    Modelos.find({_id: {$regex: req.params.id}}, (err,modelo)=>{
        if(err){
            res.send(err);
        }else{
            res.send(model);
        }
    });
}
function listarModelos(req, res){
    Modelos.find({},(err,cruds)=>{
        console.log(JSON.stringify(cruds));
        if(!err){
            res.send(cruds);
        }else {
            res.send(err);
        }
    });
}
function listarPorCiudad(req, res){
    Modelos.find({ciudad: {$regex: req.params.ciudad}, estado: true},(err,cruds)=>{
        console.log(JSON.stringify(cruds));
        if(!err){
            res.send(cruds);
        }else {
            res.send(err);
        }
    });
}
module.exports = {
    insertarUsuarios,
    buscar,
    listarModelos,
    listarPorCiudad
};