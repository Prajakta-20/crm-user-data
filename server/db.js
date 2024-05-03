// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  try {
    mongoose.connect(process.env.URL);
    console.log("DB connected");
  } catch (error) {
    console.log("Error" + error);
  }
};

// export { Connection };

Connection();
