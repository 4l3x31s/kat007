var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var userRoute = require('./routes/user-route');
var app = express();

const PORT = config.port || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send({mensaje:"Hola mundo"})
})
// http://localhost:3000/usuario/insert
app.use("/usuario",userRoute);
app.listen(PORT,()=>{
    console.log("Servidor inicializado en puerto" + PORT)
})
