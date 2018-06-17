const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
    res.send("HUrRay!!");
});

module.exports = router;