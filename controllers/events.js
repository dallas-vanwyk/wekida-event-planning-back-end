// controllers/events.js

const express = require("express");
const router = express.Router();

const Event = require("../models/event");

const verify = require("../middleware/verify-token");

router.get('/', verify, async (req, res) => {
    try {
        const userId = req.user._id

        const events = await Event.find({ organizer: userId })
            .populate('organizer')
            .sort({ start_date: 'asc' });

        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});



router.post("/", verify, async (req, res) => {
    try {
        console.log("Add Event Hit", req.body);

        const { event_title, organizer, description, attendees, category, start_date, end_date, location } = req.body;
        const newEvent = await Event.create({
            event_title,
            organizer,
            description,
            attendees,
            category,
            start_date,
            end_date,
            location,
        });
        console.log(newEvent);

        res.json(newEvent);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});

router.put("/:eventId", verify, async (req, res) => {
    try {
        const { start_date, end_date } = req.body;
        const event = await Event.findById(req.params.eventId);

        if (!event.organizer.equals(req.user._id)) {
            return res.status(403).send("You're not allowed to do that!");
        };

        if (start_date && end_date && new Date(start_date) >= new Date(end_date)) {
            return res.status(400).json({ err: "Start date must be earlier than end date" });
        };

        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
        updatedEvent._doc.organizer = req.user;
        res.status(200).json(updatedEvent);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});

router.get("/:eventId", verify, async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId).populate(["organizer"]);
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});

router.delete("/:eventId", verify, async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);

        if (!event.organizer.equals(req.user._id)) {
            return res.status(403).send("You're not allowed to do that!");
        };
        const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
        res.status(200).json(deletedEvent);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});


router.post('/:eventId/attendees', verify, async (req, res) => {
    try {
        const { name, email } = req.body;
        const event = await Event.findById(req.params.eventId);

        if (!event) {
            return res.status(404).json({ err: 'Event not found' });
        };

        if (!event.organizer.equals(req.user._id)) {
            return res.status(403).send("You're not allowed to do that!");
        };

        const attendee = {
            _id: new mongoose.Types.ObjectId(),
            name,
            email
        };

        event.attendees.push(attendee);
        await event.save();

        res.status(200).json(event.attendees);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});

router.put('/:eventId/attendees/:attendeeId', verify, async (req, res) => {
    try {
        const { name, email } = req.body;
        const event = await Event.findById(req.params.eventId);

        if (!event) {
            return res.status(404).json({ err: 'Event not found' });
        };

        if (!event.organizer.equals(req.user._id)) {
            return res.status(403).send("You're not allowed to do that!");
        };

        const attendee = event.attendees.id(req.params.attendeeId);

        if (!attendee) {
            return res.status(404).json({ err: 'Attendee not found' });
        };

        if (name) attendee.name = name;
        if (email) attendee.email = email;

        await event.save();

        res.status(200).json(attendee);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});


router.delete('/:eventId/attendees/:attendeeId', verify, async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);

        if (!event) {
            return res.status(404).json({ err: 'Event not found' });
        };

        if (!event.organizer.equals(req.user._id)) {
            return res.status(403).send("You're not allowed to do that!");
        };

        const attendee = event.attendees / id(req.params.attendeeId);
        if (!attendee) {
            return res.status(404).json({ err: 'Attendee not found' });
        };

        attendee.remove();
        await event.save();

        res.status(200).json({ message: 'Attendee removed', attendees: event.attendees });
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
});


module.exports = router;
