'use strict';

// require express rate limit
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes minutes
    max: 50, // limit each 'from' field to 50 requests per windowMs
    statusCode: 429,
    message: "Too many requests created from this 'from' field, please try again after an hour",
    headers: true
});

// create App function
module.exports = function(app) {
    var smsOrder = require('./controller');

    app
    .route("/inbound/sms")
    .post(smsOrder.Inbound)

    app
    .route("/outbound/sms")
    .post(smsOrder.Outbound, limiter)

    app
    .use(smsOrder.DefaultResponse)
};
