const mongoose = require('mongoose')

const ThingSchema = new mongoose.Schema({
	name: String,
	email: String
})

module.exports = mongoose.model('Thing', ThingSchema)