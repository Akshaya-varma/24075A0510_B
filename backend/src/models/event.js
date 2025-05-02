const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    count: { type: Number, default: 1 },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;