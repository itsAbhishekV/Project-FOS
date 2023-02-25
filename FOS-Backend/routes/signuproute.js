const express = require("express");
const routes = express.Router();
const mongodb = require('mongodb').MongoClient;
let dbinstance;
mongodb.connect('mongodb+srv://dhruv:dhruv@cluster0.10txfn8.mongodb.net/?retryWrites=true&w=majority').then(db=>{
    dbinstance = db.db('project-fos');
    console.log("Database connected!!!");
}).catch(err=>console.log(err));

routes.route("/").post((req, res)=>{
    let obj = req.body;
    dbinstance.collection("users").insertOne(obj);
});

module.exports = routes;