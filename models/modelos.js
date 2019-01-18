var mongoose = require("mongoose");

var Schema = mongoose.Schema;

mongoose.connect('mongodb://4l3x31s:123alexeis@ds257314.mlab.com:57314/katbase');

var model_schema = new Schema({
    nombre: { type: String, required: 'El campo es requerido'},
    edad: {type: Number, required: 'El campo es requerido' },
    ci: {type: String, required: 'El campo es requerido' },
    estatura: {type: Number, required: 'El campo es requerido' },
    cuerpo: {type: String, required: 'El campo es requerido' },
    piel: { type: String, required: 'El campo es requerido' },
    descripcion: { type: String, required: 'El campo es requerido' },
    servicio: { type: String, required: 'El campo es requerido' },
    serv_hora: { type: Number, required: 'El campo es requerido' },
    serv_media_hora: { type: Number, required: 'El campo es requerido' },
    serv_2_horas: { type: Number, required: 'El campo es requerido' },
    reservas: { type: String, required: 'El campo es requerido' },
    horarios: { type: String, required: 'El campo es requerido' },
    lugares_atencion: { type: String, required: 'El campo es requerido' },
    estado: { type: Boolean, required: 'El campo es requerido' },
    ciudad: { type: String, required: 'El campo es requerido' },
    fotos: [[String]]
})

var Modelos = mongoose.model("Modelos", model_schema);

module.exports.Modelos = Modelos;