var _ = require('lodash');
var City = require('../models/city.js');

module.exports = function(app) {

    /* Create */
    app.post('/city', function (req, res) {
        var newCity = new City(req.body);
        newCity.save(function(err) {
            if (err) {
                res.json({info: 'error during city create', error: err});
            }
            res.json({info: 'city created successfully'});
        });
    });

    /* Read */
    app.get('/city', function (req, res) {
        City.find(function(err, cities) {
            if (err) {
                res.json({info: 'error during find cities', error: err});
            }
            res.json({info: 'cities found successfully', data: cities});
        });
    });

    app.get('/city/:id', function (req, res) {
        City.findById(req.params.id, function(err, city) {
            if (err) {
                res.json({info: 'error during find city', error: err});
            }
            if (city) {
                // res.json({info: 'city found successfully', data: city});
                setTimeout(function(){
                    res.json({info: 'city found successfully', data: city});
                }, 10000);
            } else {
                res.json({info: 'city not found'});
            }
        });
    });

    /* Update */
    app.put('/city/:id', function (req, res) {
        City.findById(req.params.id, function(err, city) {
            if (err) {
                res.json({info: 'error during find city', error: err});
            }
            if (city) {
                _.merge(city, req.body);
                city.save(function(err) {
                    if (err) {
                        res.json({info: 'error during city update', error: err});
                    }
                    res.json({info: 'city updated successfully'});
                });
            } else {
                res.json({info: 'city not found'});
            }

        });
    });

    /* Delete */
    app.delete('/city/:id', function (req, res) {
        City.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove city', error: err});
            }
            res.json({info: 'city removed successfully'});
        });
    });
};
