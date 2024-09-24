const express = require("express");
const john = express.Router();
const con = require("../controller/control");

john.get('/', con.main);
john.get('/about', (req, res) => {
    res.render('about');
});
john.get('/services', (req, res) => {
    res.render('services');
});
john.get('/gallery', (req, res) => {
    res.render('gallery');
});
john.get('/contact', (req, res) => {
    res.render('contact');
});
module.exports = john;
