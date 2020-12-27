// Requiring necessary npm package
const express = require("express");
const mongoose = require("mongoose");

// Setting up Port for deployment
const PORT = process.env.PORT || 3001;

// Creating express app and configuring middleware
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}: http://localhost:${PORT}`);
});