const mongoose = require('mongoose');
// typy z JS
const eventSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  notification: Boolean,
  time: Date,
});

const EventModel = mongoose.model('Event', eventSchema);

//Event is collection name here
// it will add 's' letter on the end of Event
module.exports = EventModel;
