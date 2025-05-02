class EventsController {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }

    async createEvent(req, res) {
        try {
            const { x, y } = req.body;
            const event = await this.eventModel.findOneAndUpdate(
                { x, y },
                { $inc: { count: 1 } },
                { new: true, upsert: true }
            );
            res.status(201).json(event);
        } catch (error) {
            console.error('Error in createEvent:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getEvents(req, res) {
        console.log('GET /api/mouse called');
        try {
            const events = await this.eventModel.find({});
            res.status(200).json(events);
        } catch (error) {
            console.error('Error in getEvents:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = EventsController;