const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
      required: true,
    },
    event_title: {
      type: String,
      required: true,
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    attendees: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      enum: ["Wedding", "Sports", "Graduation Party", "Baby Shower", "Conference", "Arts & Entertainment"],
      required: true,
    },
    start_date: {
      type: Date,
      default: Date.now,
    },
    end_date: {
      type: Date,
      default: Date.now,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
// venue_name: {
//     type: String,
//     required: true
// },
// address: {
//     type: String,
//     required: true
// },
// latitude: {
//     type: Number,
//     required: true
// },
// longitude: {
//     type: Number,
//     required: true
// }

// const taskSchema = new Schema({
//     task_id: {
//         type: Schema.Types.ObjectId,
//         default: () => new mongoose.Types.ObjectId(),
//         required: true
//     },
//     task_name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     due_date: {
//         type: Date,
//         required: true
//     },
//     assigned_to: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'in-progress', 'completed'],
//         default: 'pending'
//     }
// }, {timestamps: true})
// Make guest Schema a child of the event schema that is just a list of creatable and deletable names
