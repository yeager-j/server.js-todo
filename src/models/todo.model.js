const mongoose = require('mongoose');

let todoSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    complete: {
        type: Boolean,
        default: false
    },
    due: Date,
    created_on: {
        type: Date,
        default: Date.now()
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);