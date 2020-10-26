var express = require('express');
var session = require('express-session');

module.exports = function(app) {
  app.get('/', (req,res) => {
    res.render('main.html')
  });

  app.get('/mypage', (req,res) => {
    res.render('mypage.html');
  });

  app.get('/plnner', (req,res) => {
    res.render('planner.html');
  });

  app.get('/statistics', (req,res) => {
    res.render('statistics.html');
  });

  app.post('/login', (req,res) => {
    res.render('about.html');
  });
  
  app.post('/logout', (req,res) => {
    res.render('about.html');
  });

  app.use(session({
    secret: 'alskdjfalkd123',
    resave: false,
    saveUninitialized: true
  }))

  app.get('/count', (req, res) => {
    if(req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send('count : ' + req.session.count);
  })

}