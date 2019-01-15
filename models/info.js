var mongoose = require("mongoose");

var Schema = mongoose.Schema;

mongoose.connect('mongodb://4l3x31s:123alexeis@ds257314.mlab.com:57314/katbase');

var info_schema = new Schema({
    bienvenida: String,
    disponibles: String,
    contactos: [[String]]
});

var Info = mongoose.model("Info", info_schema);

module.exports.Info = Info;