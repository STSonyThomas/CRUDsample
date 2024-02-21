console.log("Hello!");
const express = require("express");
const Product = require("./models/product.model.js");
const app = express();
const productRoute= require("./routes/product.route.js");
const mongoose = require("mongoose");
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//routes
app.use("/api/products",productRoute);
//mongoose connection code snippet
mongoose
  .connect(
    "mongodb+srv://goodtobetrue2:aeiou2357@backenddb.ndhofzm.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database"))
  .catch(() => console.log("Not connected to the database"));

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.listen(3000);
