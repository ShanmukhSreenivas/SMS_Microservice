'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SMSSchema = new Schema({
    from: {
        type: Number,
        required: true,
    },
    to: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("model", SMSSchema);
