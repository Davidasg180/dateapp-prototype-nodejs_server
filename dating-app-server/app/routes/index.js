const express = require('express');
const router = express.Router();
const Models = require('../models');
router.get('/', (req, res) => {
    // if (!req.user.admin) return res.sendStatus(401);
    //res.sendStatus(200);
    //res.send("HUrRay!!");
    res.render('index', { title: 'Express' });
});

router.get('/mongoose', (req, res) => {

    // if (!req.user.admin) return res.sendStatus(401);
    // res.sendStatus(200);
    var value = Models.User.findOne(function (err, leads) {
        res.send(leads);
    });
    // res.render('index', { title: 'Express' });
});


module.exports = router;