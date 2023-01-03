const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const URL = "mongodb://localhost:27017/resumebuilder";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDb connection succesfull");
});

connection.on("error", (error) => {
  console.log(error);
});
