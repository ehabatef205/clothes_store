const express = require("express");
const fileUpload = require('express-fileupload')
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const router = require("./src/routes/index");
const cors = require("cors");
const bodyparser = require('body-parser')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected: ", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
}))

app.use(router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is starting at port ${port}`);
  });
});
