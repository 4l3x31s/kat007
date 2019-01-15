var express = require('express');

var infoCtrl = require('../controllers/infoController');

var api = express.Router();

api.put("/actualizar-info", infoCtrl.actualizarInfo);
api.get("/buscar-info", infoCtrl.buscarInfo);
api.get("/listar-info", infoCtrl.listarInfo);
api.post("/insertar-info", infoCtrl.insertarInfo);

module.exports = api;
