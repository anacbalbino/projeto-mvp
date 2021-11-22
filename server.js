const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require('./app/db/models');

//db.sequelize.sync();

db.sequelize.sync({force:true})

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//app.get('/',(req,res)=>{
 //   res.json({
 //       mensagem:'GRUPOU API'
 //   })
//})

require("./app/routes")(app);

app.listen(3000,()=>{
    console.log('Servidor rodando...')
})