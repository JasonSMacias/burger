const express = require("express");
const expressHbs = require("express-handlebars");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.engine("handlebars", expressHbs(
  {defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function(){
  console.log(`Now on localhost: ${PORT}!`);
});