const express = require('express');
const router = express.Router();
const Thing = require('../models/things');

// Get all routes
router.get('/', async (req, res) => {
	const things = await Thing.find();

	res.json(things);
});

// Create new quote
router.post('/new', async (req, res) => {
	const newThing = new Thing(req.body);
	
	const savedThing = await newThing.save();

	res.json(savedThing);
});

// Get specific thing
router.get('/get/:id', async (req, res) => {
	const q = await Thing.findById({ _id: req.params.id });

	res.json(q);
});

// Delete a thing
router.delete('/delete/:id', async (req, res) => {
	const result = await Thing.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a thing
router.patch('/update/:id', async (req, res) => {
	const q = await Thing.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(q);
});

// Get random thing
router.get('/random', async (req, res) => {
	const count = await Thing.countDocuments();
	const random = Math.floor(Math.random() * count);
	const q = await Thing.findOne().skip(random);

	res.json(q);
});

module.exports = router;