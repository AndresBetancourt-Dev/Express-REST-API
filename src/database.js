const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

async function database() {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    const connection = mongoose.connection;
  } catch (error) {
    console.log(error.message);
  }
}

database();
