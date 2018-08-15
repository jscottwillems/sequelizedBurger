var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
    db.Burger.findAll()
        // use promise method to pass the burgers...
        .then(function (dbBurger) {
            // into the main index, updating the page

            var hbsObject = {
                burger: dbBurger
            };
            return res.render("index", hbsObject);
        });
});

router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (hbsObject) {
        var hbsObject = {
            burger: dbBurger
        };
        return res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.body.id
        }
    }).then(function (hbsObject) {
        var hbsObject = {
            burger: dbBurger
        };
        return res.render("index", hbsObject);
    });
});

router.delete("/api/burgers/:id", function (req, res) {

    db.Burger.db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (hbsObject) {
        var hbsObject = {
            burger: dbBurger
        };
        return res.render("index", hbsObject);
    });
})

module.exports = router;