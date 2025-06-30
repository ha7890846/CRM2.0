const express = require("express");
const cors = require("cors");
const app = express();
const Port = process.env.PORT || 5000;
const connectDB = require("./models/connectDB");
// const { getAdmin } = require('./controllers/adminController');

const empRoutes = require("./routes/empRouter");
app.use(cors());
app.use(express.json());
// app.use('/',getAdmin);
app.use("/", empRoutes);
connectDB();
app.listen(Port, () => {
  console.log(`The Server is Running over the port: ${Port}`);
});
