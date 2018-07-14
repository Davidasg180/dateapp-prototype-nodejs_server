const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res) => {
    // if (!req.user.admin) return res.sendStatus(401);
    //res.sendStatus(200);
    //res.send("HUrRay!!");
    res.render('index', { title: 'Express' });
});

router.get('/createDate', (req, res) => {
    // if (!req.user.admin) return res.sendStatus(401);
    //res.sendStatus(200);
    var date = new Models.Date({
        status: "open",
    });
    Models.User.findOne((error, user) => {
        date.providerUser = user._id;
        date.save(function (error, date) {
            res.send(date);
        });
    });
});

router.get('/dates', (req, res) => {
    // if (!req.user.admin) return res.sendStatus(401);
    //res.sendStatus(200);
    Models.Date.find().populate('providerUser', '-password').exec((error, data) => {
        res.send(data);
    });
});

module.exports = router;