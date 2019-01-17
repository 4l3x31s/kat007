var express = require('express');

var infoCtrl = require('../controllers/infoController');
var auth = require('../middleware/auth');
var api = express.Router();

api.put("/actualizar-info",auth, infoCtrl.actualizarInfo);
api.get("/buscar-info",auth, infoCtrl.buscarInfo);
api.get("/listar-info",auth, infoCtrl.listarInfo);
api.post("/insertar-info",auth, infoCtrl.insertarInfo);
api.post("/genera-token", infoCtrl.generaToken);

module.exports = api;
