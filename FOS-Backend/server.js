const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const signuproute = require('./routes/signuproute');
const loginroute = require('./routes/loginroute');
const mongo = require("./mongo");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({
    secret: "dfsjlhfa$^*^SD*^d2",
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 80000}
}));
app.use("/signup", signuproute);
app.use("/login", loginroute);
mongo.connectToServer(function(err, client){if(err) console.log(err)});

app.listen(3001, ()=>{
    console.log("FOS Server is up and running!!!");
})