var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var infoRoute = require('./ruteo/info-route');
var modelRoute = require('./ruteo/model-route');
var cors = require('cors')
var app = express();

var port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send({mensaje:"Hola mundo"})
})
// http://localhost:3000/usuario/insert
app.use("/info",infoRoute);
app.use("/model",modelRoute);
app.listen(port,()=>{
    console.log("Servidor inicializado en puerto" + port)
})

