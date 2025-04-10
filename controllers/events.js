const express = require('express')
const router = express.Router()

const Event = require('../models/event')

const verify = require('../middleware/verify-token')

router.get('/', verify, async (req, res) => {
    try {
        const events = Event.find({}, 'event_name')
        res.json(events)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})


router.post('/', verify, async (req, res) => {
    try {
        const { event_title, organizer, description, attendees, category, start_date, end_date, location } = req.body
        const newEvent = await Event.create({
            event_title,
            organizer,
            description,
            attendees,
            category,
            start_date,
            end_date,
            location
        })
        res.json(newEvent)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})


router.put('/:eventId', verify, async (req, res) => {
    try {
        // const {start_date, end_date} = req.body
        const event = await Event.findById(req.params.eventId)

        if(!event.organizer.equals(req.user._id)) {
            return res.status(403).send("You're not allowed to do that!")
        }

        if(req.body.start_date && req.body.Dateend_date && new Date(req.body.start_date) >= new Date(req.body.end_date)) {
            return res.status(400).json({ err: 'Start date must be earlier than end date'})
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.eventId,
            req.body,
            { new: true }
        )
        updatedEvent._doc.organizer = req.user
        res.status(200).json(updatedEvent)
        
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})
module.exports = router