const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    age: Number,
    phone: Number,
    email: String,
});

module.exports = mongoose.model("Contact", contactSchema);