const express = require("express");
const routes = express.Router();
const db  = require('../mongo');

routes.route("/").post((req, res)=>{
    let obj = req.body;
    obj.followers = JSON.stringify([]);
    obj.following = JSON.stringify([]);
    obj.tweets = JSON.stringify([]);
    obj.likes = JSON.stringify([]);
    obj.comments = JSON.stringify([]);
    
    let dbinstance = db.getDb();
    dbinstance.collection("users").insertOne(obj);
});

module.exports = routes;