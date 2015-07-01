var express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/', function(req, res, next){
	var arr = [
		models.Hotel.find().exec(),
		models.Restaurant.find().exec(),
		models.ThingsToDo.find().exec()
	]

	Promise.all(arr)
	   .then(function(data){
	   		res.render('index', {
	        	all_hotels: data[0],
	        	all_restaurants: data[1],
	        	all_things_to_do: data[2]
	    	})
	   }).catch(next)
})

module.exports = router