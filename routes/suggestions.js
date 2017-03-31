var express = require('express');
var router = express.Router();
var request = require('request');

require('dotenv').config();

// var API_TINY =  "http://funda.kyrandia.nl/tinyId/";
// var API_URL =  "http://funda.kyrandia.nl/feeds/Aanbod.svc/json/";
// var API_KEY = process.env.FUNDA_KEY;
// var tinyID = "49013804,49015089,49047381,49042033,49036708,49010470,48103537,49165890";
// var callURL = API_TINY + tinyID;
//
// router.get('/', function(req, res, next) {
//     request(callURL, function (error, response, data) {
//         var tinyObjects =  JSON.parse(data);
//         var totalDetails = [];
//         tinyObjects.forEach(function(tinyObject) {
//             var callDetail = API_URL + "detail/" + API_KEY + "/koop/" + tinyObject.intid;
//             request(callDetail, function (error, response, body) {
//                 totalDetails.push(JSON.parse(body));
//
//                 if (tinyObjects.length === totalDetails.length) {
//                     res.locals.dataDetail =  totalDetails;
//                     res.render('suggestions');
//                 }
//             });
//         });
//     });
// });

var API_KEY = process.env.FUNDA_KEY;
var API_URL =  "http://funda.kyrandia.nl/feeds/Aanbod.svc/json/";

var pageOptions =
    {
        title: "Funda | Suggesties",
        content: "Er konden geen resultaten worden getoond."
    };

router.get('/', function(req, res) {
    var place       = "purmerend";
    var range       = "10";
    var minPrice    = "150000";
    var maxPrice    = "200000";
    var typeHome    = "appartement";
    var yearRange   = "all";
    var searchURL = "/?type=koop&zo=/"+ place +"/+"+ range +"km/"+ minPrice +"-"+ maxPrice +"/0+woonopp/"+ typeHome +"/2+kamers/bouwperiode-"+ yearRange +"/&page=1&pagesize=25";
    var callURL = API_URL + API_KEY + searchURL;
    request(callURL, function (error, response, data) {
        if (error) {
            res.render('404', pageOptions);
        } else {
            res.locals.data =  JSON.parse(data);
            res.render('suggestions', pageOptions);
        }
    });
});


module.exports = router;