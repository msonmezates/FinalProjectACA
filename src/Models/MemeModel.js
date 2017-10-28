const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  },
  width: {
    required: true,
    type: Number
  },
  height: {
    required: true,
    type: Number
  }
});

module.exports = mongoose.model('Meme', schema);
