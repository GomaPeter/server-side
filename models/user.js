const mongoose = require("mongoose");

const Userschma = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "name is required"],
    },
    email: {
        type:String,
        required: [true, "email is required"],
    },

    password: {
        type:String,
        required: [true, "password is required"],
    },
});

const user = new mongoose.model("User", Userschma);

module.exports = user;