const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const listener = () => {
  console.log("DB was connected");
};

async function database() {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  const connection = mongoose.connection;
  await connection.once("open", listener);
}

database();
