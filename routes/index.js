var express = require('express');
var router = express.Router();
var request = require('request');

require('dotenv').config();

var API_KEY = process.env.FUNDA_KEY;
var API_URL =  "http://funda.kyrandia.nl/feeds/Aanbod.svc/json/";

var pageOptions =
    {
        title: "Funda | Zoeken",
        content: "Er konden geen resultaten worden getoond."
    };

router.get('/', function(req, res, next) {
    res.render('index/index', pageOptions);
});

router.post('/', function(req, res) {
    var place       = req.body.plaats;
    var range       = req.body.afstand;
    var minPrice    = req.body.minPrijs;
    var maxPrice    = req.body.maxPrijs;
    var typeHome    = req.body.soortWoning;
    var yearRange   = req.body.bouwjaar;
    var searchURL = "/?type=koop&zo=/"+ place +"/+"+ range +"km/"+ minPrice +"-"+ maxPrice +"/0+woonopp/"+ typeHome +"/2+kamers/bouwperiode-"+ yearRange +"/&page=1&pagesize=25";
    var callURL = API_URL + API_KEY + searchURL;
    request(callURL, function (error, response, data) {
        if (error) {
            res.render('404', pageOptions);
        } else {
            res.locals.data =  JSON.parse(data);
            res.locals.form = req.body;
            res.render('index/results', pageOptions);
        }
    });

});

module.exports = router;