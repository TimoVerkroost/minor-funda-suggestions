var express = require('express');
var router = express.Router();

var pageOptions =
    {
        title: "Funda | Offline",
        content: "Je bent offline: Er is iets mis gegaan, want wij konden uw verzoek niet afhandelen."
    };

router.get('/', function(req, res, next) {
    res.render('offline', pageOptions);
});

module.exports = router;