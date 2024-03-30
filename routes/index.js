var express = require('express');
var router = express.Router();
const messageModel = require("../models/messages");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const allRecords = await messageModel.find();
  if(allRecords == null) res.render('index', { title: 'Message Board', messages: [] });
  else res.render('index', { title: 'Message Board', messages: allRecords });
});
router.post("/new", async function(req,res,next){
  await messageModel.create({user: req.body.user, message: req.body.message, added: new Date()});
  res.redirect("/");
});

module.exports = router;
