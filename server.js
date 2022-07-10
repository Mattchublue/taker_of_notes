var express = require("express");
var viewroutes = require("./routing/view-routes")
var controllerroutes =require("./routing/controller-routes")

// 2. I'm creating an 'express' server called app
var app = express();

// 3. Sets a port or run at 7000, Later listener will listen this
var PORT = process.env.PORT || 3000;

//4. Use a middleware to parse the JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//what folder the browser can see
app.use(express.static("public"));
app.use("/api", controllerroutes);

//5. Bring routes
app.use("/", viewroutes);
//6. Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});