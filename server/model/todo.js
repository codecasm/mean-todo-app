const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todo = new Schema({
    task: {
        type: String,
        required: true
    },
    status: Boolean
});

module.exports = mongoose.model('todo', todo);