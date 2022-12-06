const express = require("express");
const hbs = require('hbs');

//Configuración de variables de entorno como el puerto de escucha por medio del archivo .env
require("dotenv").config( );


const app = express();
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home",{
    nombre: "Duvan Botero",
    titulo: "Curso de Node"
  } )
});


app.get("/generic",(req, res) => {
  res.render("generic",{
    nombre: "Duvan Botero",
    titulo: "Curso de Node"
  } )
});

app.get("/elements", (req, res) => {
  res.render("elements",{
    nombre: "Duvan Botero",
    titulo: "Curso de Node"
  } )
});

app.get("*",  (req, res) => {
  res.sendFile(__dirname + "/public/back/404.html");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
