'use strict'

const services = require('../services/index');

function isAuth(req,res,next){
    console.log("Ingresa auth")
    console.log(req.headers.autorization);
    if(!req.headers.autorization){
        return res.status(403).send({mensaje: "No tienes acces al servicio"})
    }

    const token = req.headers.autorization.split(' ')[0];

    console.log(token);
    services.decodeToken(token).then(response=>{
        req.user = response
        next()
    }).catch(respone =>{
        res.status(respone.status)
    })
}

module.exports = isAuth;