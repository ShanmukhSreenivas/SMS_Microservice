const mongoose = require("mongoose");

require('dotenv').config();

var uri = process.env.MONGODB_URI

const options = {
    useNewUrlParser:  true,
    useFindAndModify: false,
    useUnifiedTopology:  true,
};

mongoose.connect(uri, options).then(() => {
    console.log("Connection established with database :");
}, 
err => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});
