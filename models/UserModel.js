const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    index: { unique: true, dropDups: true }, // this is unique generator generated by Mongoose
    required: true,
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

// Schema - generowanie modelu
// Model - interfejs do 
