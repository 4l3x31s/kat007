var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var infoRoute = require('./routes/info-route');
var modelRoute = require('./routes/model-route');
var app = express();

var port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send({mensaje:"Hola mundo"})
})
// http://localhost:3000/usuario/insert
app.use("/info",infoRoute);
app.use("/model",modelRoute);
app.listen(port,()=>{
    console.log("Servidor inicializado en puerto" + PORT)
})

