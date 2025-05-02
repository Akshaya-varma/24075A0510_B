const express = require('express');
const EventsController = require('../controllers/eventsController');
const EventModel = require('../models/event');

const router = express.Router();
const eventsController = new EventsController(EventModel);

router.post('/api/mouse', (req, res) => {
    console.log('POST /api/mouse called');
    eventsController.createEvent(req, res);
});

router.get('/api/mouse', (req, res) => {
    console.log('GET /api/mouse called');
    eventsController.getEvents(req, res);
});

const setRoutes = (app) => {
    app.use(router);
};

module.exports = { setRoutes };