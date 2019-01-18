var express = require('express')

var modelCtrl = require('../controllers/modelController');
var auth = require('../middleware/auth');
var api = express.Router();

api.post("/insert-model",auth, modelCtrl.insertarUsuarios);
api.get("/buscar-model",auth, modelCtrl.buscar);
api.get("/listar-model",auth, modelCtrl.listarModelos);
api.get("/listar-por-ciudad/:ciudad",auth, modelCtrl.listarPorCiudad);

module.exports = api;
