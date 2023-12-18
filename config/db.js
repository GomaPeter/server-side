const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
    .connect("mongodb://127.0.0.1/contact_mern");
    
    console.log('Connection to the database is established...');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

module.exports = connectDB;
