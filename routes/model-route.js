var express = require('express')

var modelCtrl = require('../controllers/modelController');

var api = express.Router();

api.post("/insert-model", modelCtrl.insertarUsuarios);
api.get("/buscar-model", modelCtrl.buscar);
api.get("/listar-model", modelCtrl.listarModelos);

module.exports = api;
