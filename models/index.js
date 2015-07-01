var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number, Number]
})

var hotelSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	num_stars: Number,
	amenities: String
})

var thingsToDoSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	age_range: String
})

var restaurantSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	cuisine: String,
	price: Number
})

var Place = mongoose.model('Place', placeSchema)
var Hotel = mongoose.model('Hotel', hotelSchema)
var ThingsToDo = mongoose.model('ThingsToDo', thingsToDoSchema)
var Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = {
	Place: Place,
	Hotel: Hotel,
	ThingsToDo: ThingsToDo,
	Restaurant: Restaurant
}